import { MenuIcon } from "lucide-react";
import { useState } from "react";

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
var navtransparent = "bg-transparent";
if (window.scrollY > 100) {
  navtransparent = "bg-zinc-900";
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      onScroll={navtransparent}
      className="fixed left-0 right-0 top-0 z-50 bg-zinc-900 p-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">Nando/Dev</div>

        <div className="hidden space-x-4 md:flex">
          <a href="#about" className="text-white hover:text-gray-400">
            Sobre Mim
          </a>
          <a href="#projects" className="text-white hover:text-gray-400">
            Projetos
          </a>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contato
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              Mais
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                <a
                  href="#resume"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Currículo
                </a>
                <a
                  href="#skills"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Habilidades
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white duration-200 hover:text-fuchsia-500 focus:outline-none"
          >
            <MenuIcon />
          </button>
          {isOpen && (
            <div className="absolute right-0 z-10 mt-2 flex w-56 flex-col items-center rounded-md bg-white shadow-lg">
              <a
                href="#about"
                className="hover: block px-10 py-2 text-gray-800 duration-300 hover:p-4"
              >
                Sobre Mim
              </a>
              <a
                href="#projects"
                className="hover: block px-10 py-2 text-gray-800 duration-300 hover:p-4"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="hover: block px-10 py-2 text-gray-800 duration-300 hover:p-4"
              >
                Contato
              </a>
              <a
                href="#resume"
                className="hover: block px-10 py-2 text-gray-800 duration-300 hover:p-4"
              >
                Currículo
              </a>
              <a
                href="#skills"
                className="hover: block px-10 py-2 text-gray-800 duration-300 hover:p-4"
              >
                Habilidades
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
