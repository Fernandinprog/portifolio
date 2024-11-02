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
    <div className="flex flex-col w-full   items-center bg-gradient-to-r from-zinc-800 to-zinc-900  p-2  gap-4 h-[600px]">
      <h1 className="text-3xl text-white">Sobre min</h1>
      <div className="w-full flex flex-col text-start p-4 lg:w-1/2 text-white  rounded-md">
        <p className="apresentacao text-xl">
          Meu nome é Fernando, prazer. Sou um cara fascinado em tecnologia meu
          sonho é viver disso, um dia ainda quero escrever um livro e fazer algo
          que impacte a vida das pessoas. Gosto de ler livros de aventura e
          tecnicos tambem pra me aprofundar nas tecnologias, sou um cara curioso
          mesmo, tenho hiperfoco quando o assunto me prende, além de ser
          comunicativo.
        </p>
      </div>
      <span className="w-full  h-[1px] mt-4 bg-black  "></span>
      <div className="w-full flex flex-col p-2  gap-6 items-center">
        <h1 className="text-3xl text-white">Tecnologias</h1>
        <Tecnologias />
      </div>
      <span className="w-full  h-[1px] mt-4 bg-black  "></span>
    </div>
  );
};

export default Sobre;
