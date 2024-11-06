import { ArrowBigDown } from "lucide-react";
import Tecnologias from "./Tecnologias";
import gsap from "gsap";

const pp = matchMedia("(min-width: 768px)");
pp.addEventListener("change", () => {
  gsap.from(".apresentacao", {
    x: -400,
    opacity: 0,
    ease: "power1.in",
  });
  gsap.to(".apresentacao", {
    x: 0,
    opacity: 1,
    ease: "power1.in",
  });
});
gsap.from(".apresentacao", {
  x: 400,
  opacity: 0,
  ease: "power1.in",
});

gsap.to(".apresentacao", {
  x: 0,
  opacity: 1,
  ease: "power1.in",
});
const Sobre = () => {
  return (
    <div className="flex h-[600px] w-full flex-col items-center gap-4 bg-gradient-to-r from-zinc-800 to-zinc-900 p-2">
      <h1 className="text-3xl text-white">Sobre mim</h1>
      <div className="flex w-full flex-col rounded-md p-4 text-start text-white lg:w-1/2">
        <p className="apresentacao text-xl">
          Meu nome é Fernando, prazer. Sou um cara fascinado em tecnologia meu
          sonho é viver disso, um dia ainda quero escrever um livro e fazer algo
          que impacte a vida das pessoas. Gosto de ler livros de aventura e
          tecnicos tambem pra me aprofundar nas tecnologias, sou um cara curioso
          mesmo, tenho hiperfoco quando o assunto me prende, além de ser
          comunicativo.
        </p>
        <button className="mt-4 flex items-center justify-center gap-2 rounded-md bg-black p-2 text-white">
          <a href="/public/Currículo_.pdf" download>
            Curriculo
          </a>
          <ArrowBigDown />
        </button>
      </div>
      <span className="mt-4 h-[1px] w-full bg-black"></span>
      <div className="flex w-full flex-col items-center gap-6 p-2">
        <h1 className="text-3xl text-white">Tecnologias</h1>
        <Tecnologias />
      </div>
      <span className="mt-4 h-[1px] w-full bg-black"></span>
    </div>
  );
};

export default Sobre;
