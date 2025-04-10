import gsap from "gsap";
import { useEffect, useRef } from "react";
import Logojavascript from "/javascript-logo.png";
import ReactLogo from "/React-icon.svg.png";
import NodeLogo from "/Node.js-logo.png";
import TsLogo from "/ts-logo.png";
import TailwindLogo from "/twind-logo.png";
import CssLogo from "/CSS3_logo.svg.png";
import HtmlLogo from "/HTML5_logo.png";
import NextLogo from "/next-js-logo.png";
import PostgresLogo from "/PostgreSQL_logo.png";

const tecnologias = [
  { src: Logojavascript, alt: "JavaScript" },
  { src: ReactLogo, alt: "React" },
  { src: NodeLogo, alt: "Node.js" },
  { src: TsLogo, alt: "TypeScript" },
  { src: TailwindLogo, alt: "Tailwind CSS" },
  { src: CssLogo, alt: "CSS3" },
  { src: HtmlLogo, alt: "HTML5" },
  { src: NextLogo, alt: "Next.js" },
  { src: PostgresLogo, alt: "PostgreSQL" },
];

const Tecnologias = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const scrollWidth = container.scrollWidth;
    const duration = (scrollWidth / containerWidth) * 20;

    gsap.to(container, {
      x: -scrollWidth + containerWidth,
      duration: duration,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={containerRef} className="flex gap-8 md:gap-12">
        {tecnologias.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              className="h-12 w-12 transition-transform hover:scale-110 md:h-14 md:w-14"
              src={tech.src}
              alt={tech.alt}
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {tech.alt}
            </span>
          </div>
        ))}
        {/* Duplicar tecnologias para criar efeito infinito */}
        {tecnologias.map((tech, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex flex-col items-center gap-2"
          >
            <img
              className="h-12 w-12 transition-transform hover:scale-110 md:h-14 md:w-14"
              src={tech.src}
              alt={tech.alt}
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {tech.alt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
