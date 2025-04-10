import gsap from "gsap";
import { Github, Linkedin, X } from "lucide-react";
import FotoPerfil from "/PERFIL.jpg";

const Home = () => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.from(".desktop", {
      x: -800,
      opacity: 0,
      duration: 5,
      ease: "power2.out",
    });
  });
  mm.add("(min-width: 768px)", () => {
    gsap.to(".desktop", {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out",
      repeatRefresh: true,
      repeat: Infinity,
    });
  });

  mm.add("(max-width: 768px)", () => {
    gsap.from(".mobile", {
      x: -700,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      repeatRefresh: true,
    });
  });
  mm.add("(max-width: 768px)", () => {
    gsap.to(".mobile", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });
  });

  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-20 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900"
    >
      <div className="mobile desktop flex w-full max-w-4xl flex-col items-center justify-center gap-8">
        <div className="relative">
          <img
            className="h-48 w-48 rounded-full border-4 border-fuchsia-500 object-cover shadow-lg md:h-64 md:w-64"
            src={FotoPerfil}
            alt="Foto de perfil"
          />
          <div className="absolute rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-30 blur"></div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl dark:text-white">
            Desenvolvedor Full-stack
          </h1>
          <p className="mt-2 text-zinc-700 dark:text-gray-300">
            Transformando ideias em código
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/fernando-sandes-de-moura-7739911b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/Fernandinprog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/Omestredelas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
          >
            <X className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
