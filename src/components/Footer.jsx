import { Github, Linkedin, Mail, XIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="grid h-[320px] w-full grid-cols-1 gap-4 bg-gradient-to-r from-zinc-800 to-zinc-900 p-2 lg:grid-cols-3">
      <div className="mt-4 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <h2 className="text-2xl font-bold text-white">Redes sociais</h2>
        <Github className="h-6 w-6 cursor-pointer text-white"></Github>
        <Linkedin className="h-6 w-6 cursor-pointer text-white" />
        <XIcon className="h-6 w-6 cursor-pointer text-white" />
      </div>
      <div className="mt-4 flex items-center justify-center text-white">
        Todos os direitos reservados ©️ 2024
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Entre em contato</p>
        <div className="flex items-center justify-center gap-2">
          <Mail className="h-6 w-6 text-white" />
          <p className="font-thin text-white">fernandosandesmoura@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
