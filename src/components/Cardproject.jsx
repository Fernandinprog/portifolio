import { Github } from "lucide-react";
import HtmlLogo from "/HTML5_logo.png";
import NextLogo from "/next-js-logo.png";
import TailwindLogo from "/twind-logo.png";
import PostgresLogo from "/PostgreSQL_logo.png";
import Fswbarber from "/fsw-barber.png";
import FinanceAI from "/Finance-AI.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projetos = [
  {
    titulo: "FSW-barber",
    imagem: Fswbarber,
    tecnologias: [
      { src: NextLogo, alt: "Next.js" },
      { src: HtmlLogo, alt: "HTML5" },
      { src: TailwindLogo, alt: "Tailwind CSS" },
      { src: PostgresLogo, alt: "PostgreSQL" },
    ],
    link: "https://github.com/seu-usuario/fsw-barber",
  },
  {
    titulo: "Finance AI",
    imagem: FinanceAI,
    tecnologias: [
      { src: NextLogo, alt: "Next.js" },
      { src: HtmlLogo, alt: "HTML5" },
      { src: TailwindLogo, alt: "Tailwind CSS" },
      { src: PostgresLogo, alt: "PostgreSQL" },
    ],
    link: "https://github.com/Fernandinprog/financ-ai",
  },
  // Adicione mais projetos aqui
];

const Cardproject = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotateX: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
            // markers: true, // remova o comentário para debug
          },
          delay: index * 0.15, // escalonamento entre cards
        },
      );
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full bg-white py-20 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase text-zinc-900 md:text-4xl dark:text-white">
          Projetos
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card perspective-1000 group relative flex h-[420px] w-full flex-col items-center gap-4 rounded-lg border-2 border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/20 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {projeto.titulo}
              </h3>

              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={projeto.imagem}
                  alt={projeto.titulo}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {projeto.tecnologias.map((tech, techIndex) => (
                  <img
                    key={techIndex}
                    className="h-8 w-8 transition-transform hover:scale-110"
                    src={tech.src}
                    alt={tech.alt}
                  />
                ))}
              </div>

              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardproject;
