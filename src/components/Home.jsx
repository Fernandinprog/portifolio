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
    <div className="flex flex-col w-full  bg-gradient-to-r from-zinc-800 to-zinc-900  items-center p-2  gap-4 ">
      <div className=" mobile desktop flex gap-6 flex-col mt-12 items-center justify-center  w-72">
        <img className="rounded-full " src={FotoPerfil} alt="" />
        <h1 className="  text-white text-xl font-bold ">
          Desenvolvedor Full-stack
        </h1>
      </div>
      <div className="flex mobile desktop gap-6 items-center p-4">
        <Linkedin
          href="https://www.linkedin.com/in/fernando-sandes-de-moura-7739911b2/"
          className="text-white text-2xl cursor-pointer"
        ></Linkedin>
        <Github className="text-white text-2xl cursor-pointer">
          <a href=""></a>
        </Github>
        <X className="text-white text-4xl cursor-pointer">
          <a href="https://x.com/Omestredelas"></a>
        </X>
      </div>
    </div>
  );
};

export default Home;
