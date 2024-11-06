import { Github } from "lucide-react";
import HtmlLogo from "/HTML5_logo.png";
import NextLogo from "/next-js-logo.png";
import TailwindLogo from "/twind-logo.png";
import PostgresLogo from "/PostgreSQL_logo.png";
import Fswbarber from "/fsw-barber.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  y: 400,
  opacity: 0,
  delay: 1.5,
  duration: 2,
});
gsap.to(".card", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".start",
    start: "top 90%",
    end: "bottom 20%",
    ease: "power1.in",
  },
});

const Cardproject = () => {
  return (
    <>
      <div className="flex h-[4000px] w-full flex-col items-center gap-4 bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 lg:h-[1100px]">
        <h1 className="start mb-8 text-3xl font-bold uppercase text-white">
          Projetos
        </h1>
        <div className="start card grid w-full grid-cols-1 justify-items-center gap-4 lg:grid-cols-4 lg:justify-items-center">
          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>

          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>

          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>
          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>

          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>

          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>

          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>

          <div className="mt-4 flex h-[420px] w-[300px] cursor-pointer flex-col items-center gap-4 rounded-md border-2 bg-zinc-900 p-4 duration-300 ease-in-out hover:border-fuchsia-600">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="mt-1 flex items-center justify-center gap-2">
                <img className="h-10 w-10 bg-white" src={NextLogo} alt="" />
                <img className="h-8 w-8" src={HtmlLogo} alt="" />
                <img className="h-10 w-10" src={TailwindLogo} alt="" />
                <img className="h-10 w-10" src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="cursor-pointer text-white"></Github>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardproject;
