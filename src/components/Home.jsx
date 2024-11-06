import gsap from "gsap";
import { Github, Linkedin, X } from "lucide-react";
import FotoPerfil from "/PERFIL.jpg";
const Home = () => {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    gsap.from(".desktop", {
      x: -800,
      opacity: 0,
      ease: "power2.in",
    });
    gsap.to(".desktop", {
      x: 0,
      opacity: 1,
    });
  });
  mm.add("(max-width: 768px)", () => {
    gsap.from(".mobile", {
      x: 200,
      opacity: 0,
      ease: "power2.in",
    });
    gsap.to(".mobile", {
      x: 0,
      opacity: 1,
      ease: "power2.in",
    });
  });

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-gradient-to-r from-zinc-800 to-zinc-900 p-2">
      <div className="mobile desktop mt-12 flex w-72 flex-col items-center justify-center gap-6">
        <img className="mt-8 rounded-full" src={FotoPerfil} alt="" />
        <h1 className="text-xl font-bold text-white">
          Desenvolvedor Full-stack
        </h1>
      </div>
      <div className="mobile desktop flex items-center gap-6 p-4">
        <Linkedin className="cursor-pointer text-2xl text-white">
          <a href="https://www.linkedin.com/in/fernando-sandes-de-moura-7739911b2/"></a>
        </Linkedin>
        <Github className="cursor-pointer text-2xl text-white">
          <a href="https://github.com/Fernandinprog"></a>
        </Github>
        <X className="cursor-pointer text-4xl text-white">
          <a href="https://x.com/Omestredelas"></a>
        </X>
      </div>
    </div>
  );
};

export default Home;
