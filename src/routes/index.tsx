import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Full Stack Developer · Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a Full Stack Developer building high-impact web and mobile software with great value and close, consultative support.",
      },
      { property: "og:title", content: "Full Stack Developer · Portfolio" },
      {
        property: "og:description",
        content:
          "Tailor-made software with focus on results, performance and close client support.",
      },
    ],
  }),
  component: Portfolio,
});
