import { MenuIcon, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-lg dark:bg-zinc-900/90"
          : "bg-white dark:bg-zinc-900"
      } p-4`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-zinc-900 dark:text-white">
          Nando/Dev
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="#about"
            className="text-zinc-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
          >
            Sobre Mim
          </a>
          <a
            href="#projects"
            className="text-zinc-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="text-zinc-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
          >
            Contato
          </a>
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 text-zinc-900 transition-colors hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-800"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-zinc-900 transition-colors duration-200 hover:text-fuchsia-500 focus:outline-none dark:text-white"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
          {isOpen && (
            <div className="fixed inset-0 top-16 z-[9999] bg-white/95 backdrop-blur-sm dark:bg-zinc-900/95">
              <div className="flex h-full flex-col items-center justify-center space-y-8">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-xl text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
                >
                  Sobre Mim
                </a>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="text-xl text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
                >
                  Projetos
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="text-xl text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
                >
                  Contato
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="rounded-full p-2 text-zinc-900 transition-colors hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-800"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
