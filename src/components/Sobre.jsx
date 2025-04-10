import { ArrowBigDown } from "lucide-react";
import Tecnologias from "./Tecnologias";
import gsap from "gsap";
import { useEffect } from "react";

const Sobre = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(".apresentacao", {
        x: -400,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    mm.add("(max-width: 768px)", () => {
      gsap.from(".apresentacao", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center bg-gray-100 py-20 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">
          Sobre mim
        </h2>

        <div className="apresentacao mx-auto max-w-3xl rounded-lg bg-white/80 p-6 text-zinc-900 shadow-lg backdrop-blur-sm dark:bg-zinc-800/50 dark:text-white">
          <p className="text-lg leading-relaxed md:text-xl">
            Meu nome é Fernando, prazer. Sou um cara fascinado em tecnologia meu
            sonho é viver disso, um dia ainda quero escrever um livro e fazer
            algo que impacte a vida das pessoas. Gosto de ler livros de aventura
            e tecnicos tambem pra me aprofundar nas tecnologias, sou um cara
            curioso mesmo, tenho hiperfoco quando o assunto me prende, além de
            ser comunicativo.
          </p>

          <a
            href="/public/Currículo_.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-6 py-3 text-white transition-colors hover:bg-fuchsia-600"
          >
            Download Currículo
            <ArrowBigDown className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">
            Tecnologias
          </h2>
          <Tecnologias />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
