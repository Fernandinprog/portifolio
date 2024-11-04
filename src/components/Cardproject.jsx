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
      <div className="flex flex-col items-center w-full h-[4000px] lg:h-[1100px] bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 gap-4 ">
        <h1 className="text-white start text-3xl uppercase mb-8 font-bold">
          Projetos
        </h1>
        <div className="grid  grid-cols-1 start justify-items-center lg:grid-cols-4 lg:justify-items-center  card  w-full   gap-4">
          <div className=" flex flex-col       w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>

          <div className="flex flex-col      w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>

          <div className="flex flex-col      w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>
          <div className="flex flex-col w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>

          <div className="flex flex-col w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>

          <div className="flex flex-col w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>

          <div className="flex flex-col w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>

          <div className="flex flex-col  w-[300px] h-[420px] border-2 cursor-pointer hover:border-fuchsia-600 duration-300 ease-in-out bg-zinc-900 rounded-md items-center p-4  mt-4 gap-4 ">
            <h1 className="text-3xl text-white">FSW-barber</h1>
            <img className="w-48 rounded-md" src={Fswbarber} alt="" />
            <p className="text-white">
              <div className="flex gap-2 mt-1 justify-center items-center">
                <img className="w-10 h-10 bg-white" src={NextLogo} alt="" />
                <img className="w-8 h-8" src={HtmlLogo} alt="" />
                <img className="w-10 h-10" src={TailwindLogo} alt="" />
                <img className="w-10 h-10  " src={PostgresLogo} alt="" />
              </div>
            </p>
            <Github className="text-white cursor-pointer"></Github>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardproject;
