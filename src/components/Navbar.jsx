import { MenuIcon } from "lucide-react";
import { useState } from "react";

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão do link

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
}); 
var navtransparent = "bg-transparent"
if (window.scrollY > 100) {
  navtransparent = "bg-zinc-900"
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return ( 
        <nav onScroll={navtransparent} className="bg-zinc-900 p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Nando/Dev</div>
  
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-white hover:text-gray-400">Sobre Mim</a>
            <a href="#projects" className="text-white hover:text-gray-400">Projetos</a>
            <a href="#contact" className="text-white hover:text-gray-400">Contato</a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                Mais
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <a href="#resume" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Currículo</a>
                  <a href="#skills" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Habilidades</a>
                </div>
              )}
            </div>
          </div>
  
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-fuchsia-500 duration-200 focus:outline-none"
            >
              <MenuIcon/>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 flex flex-col  items-center bg-white rounded-md z-10 shadow-lg">
                <a href="#about" className="block px-10 py-2 text-gray-800 hover: hover:p-4 duration-300">Sobre Mim</a>
                <a href="#projects" className="block px-10 py-2 text-gray-800 hover: hover:p-4 duration-300">Projetos</a>
                <a href="#contact" className="block px-10 py-2 text-gray-800 hover: hover:p-4 duration-300">Contato</a>
                <a href="#resume" className="block px-10 py-2 text-gray-800 hover:  hover:p-4 duration-300">Currículo</a>
                <a href="#skills" className="block px-10 py-2 text-gray-800 hover:  hover:p-4 duration-300">Habilidades</a>
              </div>
            )}
          </div>
        </div>
      </nav>
    
     );
}
 
export default NavBar;