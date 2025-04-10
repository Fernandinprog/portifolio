import { Github, Linkedin, Mail, XIcon } from "lucide-react";

const Footer = () => {
  const redesSociais = [
    {
      icon: <Github className="h-6 w-6" />,
      link: "https://github.com/Fernandinprog",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      link: "https://www.linkedin.com/in/fernando-sandes-de-moura-7739911b2/",
      label: "LinkedIn",
    },
    {
      icon: <XIcon className="h-6 w-6" />,
      link: "https://x.com/Omestredelas",
      label: "X (Twitter)",
    },
  ];

  return (
    <footer className="w-full bg-gray-200 py-12 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Redes Sociais */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Redes Sociais
            </h2>
            <div className="flex gap-4">
              {redesSociais.map((rede, index) => (
                <a
                  key={index}
                  href={rede.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
                  aria-label={rede.label}
                >
                  {rede.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center text-center text-zinc-900 dark:text-white">
            <p>©️ 2024 Fernando Sandes. Todos os direitos reservados.</p>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Contato
            </h2>
            <a
              href="mailto:fernandosandesmoura@gmail.com"
              className="flex items-center gap-2 text-zinc-900 transition-colors hover:text-fuchsia-500 dark:text-white"
            >
              <Mail className="h-6 w-6" />
              <span>fernandosandesmoura@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-gray-600 dark:border-zinc-700 dark:text-zinc-400">
          <p>Desenvolvido com ❤️ usando React e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
