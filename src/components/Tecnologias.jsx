import gsap from "gsap";
import { useEffect } from "react";
import Logojavascript from "/javascript-logo.png";
import ReactLogo from "/React-icon.svg.png";
import NodeLogo from "/Node.js-logo.png";
import TsLogo from "/ts-logo.png";
import TailwindLogo from "/twind-logo.png";
import CssLogo from "/CSS3_logo.svg.png";
import HtmlLogo from "/HTML5_logo.png";
import NextLogo from "/next-js-logo.png";
import PostgresLogo from "/PostgreSQL_logo.png";

const Tecnologias = () => {
  useEffect(() => {
    gsap.from(".image", {
      x: -1500,
      delay: 3,
    });
    gsap.to(".image", {
      x: 2000,
      duration: 15,
      repeat: -1,
      ease: "linear",
      
    });
  }, []);

  return (
    <div className=" overflow-hidden flex w-full justify-center gap-12">
      <img className="w-14 h-14 image " src={Logojavascript} alt="" />
      <img className="w-14 h-14 image " src={ReactLogo} alt="" />
      <img className="w-14 h-14 image " src={NodeLogo} alt="" />
      <img className="w-14 h-14 image " src={TsLogo} alt="" />
      <img className="w-14 h-14 image " src={TailwindLogo} alt="" />
      <img className="w-14 h-14 image " src={CssLogo} alt="" />
      <img className="w-14 h-14 image " src={HtmlLogo} alt="" />
      <img className="w-14 h-14 image bg-white " src={NextLogo} alt="" />
      <img className="w-14 h-14 image " src={PostgresLogo} alt="" />
    </div>
  );
};
export default Tecnologias;
