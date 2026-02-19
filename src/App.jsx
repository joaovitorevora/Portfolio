import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import { 
  Rocket, Layout, Search, Smartphone, 
  MessageSquare, ArrowRight, Code2, ShieldCheck, 
  CheckCircle2, Zap, Lock, Headphones, X, Send
} from 'lucide-react';

const App = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const words = ["Encantar", "Inovar", "Conectar", "Crescer"];

  // Sua chave do Web3Forms já configurada
  const WEB3FORMS_KEY = "f319a765-6537-43b4-a54f-855c8ecef334";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // --- LÓGICA DE ENVIO VIA AJAX (SEM REDIRECIONAR) ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    Swal.fire({
      title: 'Enviando...',
      text: 'Aguarde um momento enquanto processamos sua solicitação.',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      const res = await response.json();

      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Solicitação Enviada!',
          text: 'Recebi seus dados. Em breve entrarei em contato via WhatsApp para conversarmos sobre seu projeto!',
          confirmButtonColor: '#2563eb',
          customClass: { popup: 'rounded-[2rem]' }
        });
        setIsModalOpen(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!',
        text: 'Ocorreu um problema ao enviar. Por favor, tente novamente ou me chame direto no WhatsApp.',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  const openContactForm = (planName = "Geral") => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const stepVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* --- MODAL DE FORMULÁRIO --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition">
                <X size={24} />
              </button>
              
              <div className="mb-8 text-left">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Solicitar Orçamento</h3>
                <p className="text-slate-500 font-medium italic">Plano: <span className="text-blue-600">{selectedPlan}</span></p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input type="hidden" name="subject" value={`Nova Solicitação de Site: ${selectedPlan}`} />
                <input type="hidden" name="plano_escolhido" value={selectedPlan} />
                
                <div>
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">Seu Nome</label>
                  <input required name="name" type="text" placeholder="João Silva" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 transition" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-black uppercase text-slate-400 ml-2">WhatsApp</label>
                    <input required name="whatsapp" type="tel" placeholder="(00) 00000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 transition" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase text-slate-400 ml-2">E-mail</label>
                    <input required name="email" type="email" placeholder="seu@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 transition" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">Sobre o seu projeto</label>
                  <textarea required name="message" rows="3" placeholder="Conte brevemente o que você precisa..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 transition resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                  ENVIAR SOLICITAÇÃO <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="/background-hero.png" alt="Desenvolvimento de Sites" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 mb-8">
              Desenvolvimento de Sites
            </span>
            <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight text-white uppercase tracking-tighter">
              Sites feitos para <br />
              <div className="h-[1.2em] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                    className="text-blue-400 italic inline-block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
            <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Somos especialistas no design e desenvolvimento de sites, oferecendo soluções digitais personalizadas que alavanquem os resultados do seu negócio.
            </p>
            <div className="mt-12">
              <button onClick={() => openContactForm("Geral")} className="bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 flex items-center gap-3 mx-auto uppercase tracking-wider">
                DESENVOLVA SEU SITE <Rocket size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- SEÇÃO SOBRE MIM --- */}
      <section id="sobre" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] rotate-3"></div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/perfil.png" alt="Victor" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8 italic text-slate-900 tracking-tight">Tecnologia, Parceria e o Melhor Custo-Benefício para seu Negócio.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Olá, sou o João Vitor, tenho 25 anos e sou graduando em <strong>Ciência da Computação</strong>, transformo minha paixão por tecnologia em soluções digitais que impulsionam negócios.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Acredito que um projeto de sucesso nasce da proximidade com o cliente. Ofereço suporte presente e transparente para garantir que seu site seja uma ferramenta de crescimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ESTRUTURA E DIFERENCIAIS --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight italic uppercase tracking-tighter">
              Design de impacto aliado a uma <span className="text-blue-400">estrutura de alto nível</span>.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">Garantimos que sua presença online transmita seriedade e confiança instantânea através de interfaces estratégicas e sistemas robustos.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 font-bold italic">
              {["Site Institucional", "Agendamento Online", "Catálogo Digital", "Blog", "Landing Pages"].map(item => (
                <li key={item} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"/> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800/40 p-8 md:p-12 rounded-[2.5rem] border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-blue-400 uppercase tracking-tighter">Diferenciais Técnicos</h3>
            <div className="space-y-6">
              {[
                { t: "Design 100% Personalizado", d: "Sua marca com a originalidade que ela merece." },
                { t: "SEO Técnico Avançado", d: "Arquitetura pronta para as primeiras páginas do Google." },
                { t: "Responsividade", d: "Ajuste perfeito em qualquer tela e dispositivo." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 text-left">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" size={20} />
                  <div><h4 className="font-bold text-white text-lg mb-1">{item.t}</h4><p className="text-slate-400 text-sm leading-relaxed">{item.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ETAPAS DO PROCESSO --- */}
      <section className="py-32 bg-white text-center overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 uppercase tracking-tighter italic text-center">Seu site pronto em <span className="text-blue-600">5 Etapas</span></h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { n: "1", t: "Briefing", d: "Coleta estratégica de informações." },
              { n: "2", t: "Desenvolvimento", d: "Construção com código moderno." },
              { n: "3", t: "Validação", d: "Refinamento com seu feedback." },
              { n: "4", t: "Otimização", d: "Performance, SEO e segurança." },
              { n: "5", t: "Publicação", d: "Projeto no ar com suporte total." }
            ].map((step, i) => (
              <motion.div key={i} variants={stepVariants} initial="offscreen" whileInView="onscreen" whileHover={{ y: -10 }} className="bg-slate-50 p-10 rounded-[2.5rem] relative border border-slate-100 min-h-[320px] flex flex-col justify-center shadow-sm hover:shadow-xl transition-all duration-300">
                <span className="text-8xl font-black text-blue-100 absolute -top-2 -right-2 leading-none opacity-60 select-none">{step.n}</span>
                <h4 className="text-2xl font-extrabold mb-4 relative z-10 text-slate-800 tracking-tight">{step.t}</h4>
                <p className="text-base text-slate-500 relative z-10 font-medium leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLANOS --- */}
      <section id="planos" className="py-32 bg-slate-50 border-y border-slate-200 text-center">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-20 uppercase tracking-tighter italic">Escolha o plano <span className="text-blue-600">ideal para sua empresa</span></h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-white p-10 rounded-[3rem] border border-slate-200 flex flex-col hover:shadow-2xl transition-all">

              <h3 className="text-2xl font-black mb-4 uppercase">Profissional Smart</h3>

              <p className="text-slate-500 mb-8 italic">Ideal para presença digital objetiva.</p>

              <div className="mb-8 font-black"><span className="text-2xl">R$</span> <span className="text-5xl">700</span></div>

              <div className="space-y-4 mb-10 flex-grow text-left">

                {["Até 2 páginas", "Design personalizado", "WhatsApp Integrado", "Responsividade", "Suporte 20 dias"].map(item => (

                  <div key={item} className="flex items-center gap-3 text-sm text-slate-600 font-bold"><CheckCircle2 className="text-blue-500" size={16}/> {item}</div>

                ))}

              </div>

              <button onClick={() => openContactForm("Plano Smart")} className="w-full py-5 rounded-2xl bg-white border-2 border-slate-900 font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-tighter">ENTRAR EM CONTATO</button>

            </motion.div>

            <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col hover:shadow-2xl transition-all relative overflow-hidden">

              <div className="absolute top-8 right-8 bg-blue-600 text-[10px] font-black px-4 py-1 rounded-full uppercase">Mais Completo</div>

              <h3 className="text-2xl font-black mb-4 uppercase text-blue-400">Profissional Plus</h3>

              <p className="text-slate-400 mb-8 italic">Estrutura robusta para autoridade.</p>

              <div className="mb-8 font-black"><span className="text-2xl">R$</span> <span className="text-5xl">1.997</span></div>

              <div className="space-y-4 mb-10 flex-grow text-left">

                {["Até 5 páginas", "Design personalizado", "WhatsApp Integrado","Formulários", "SEO Otimizado", "Responsividade", "Suporte 30 dias"].map(item => (

                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300 font-bold"><CheckCircle2 className="text-blue-400" size={16}/> {item}</div>

                ))}

              </div>

              <button onClick={() => openContactForm("Plano Plus")} className="w-full py-5 rounded-2xl bg-blue-600 font-black text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all uppercase tracking-tighter">ENTRAR EM CONTATO</button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* --- GARANTIAS --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="text-yellow-500"/>, t: "Velocidade", d: "Carregamento instantâneo." },
            { icon: <ShieldCheck className="text-blue-600"/>, t: "Segurança", d: "Certificado SSL incluso." },
            { icon: <Lock className="text-green-600"/>, t: "LGPD", d: "Proteção de dados." },
            { icon: <Headphones className="text-purple-600"/>, t: "Suporte", d: "Tira dúvidas direto." }
          ].map((selo, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm">{selo.icon}</div>
              <h4 className="font-bold text-slate-800 mb-2 uppercase tracking-tighter tracking-widest text-sm">{selo.t}</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed">{selo.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter leading-none">Bora dar vida ao seu site?</h2>
          <button onClick={() => openContactForm("Geral")} className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-4 mx-auto uppercase tracking-tighter">
            <MessageSquare /> Solicitar Orçamento
          </button>
          <div className="mt-20 pt-10 border-t border-white/10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">© 2026 Joao - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;