import { Github, Linkedin, Mail, XIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-[320px] grid grid-cols-1 gap-4 p-2  lg:grid-cols-3 bg-gradient-to-r from-zinc-800 to-zinc-900    ">
      <div
        className=" flex flex-col  justify-center items-center mt-4 gap-4 lg:flex-row"
      >
        <h2 className="text-2xl text-white font-bold">Redes sociais</h2>
        <Github className="w-6 h-6 text-white cursor-pointer"></Github>
        <Linkedin className="w-6 h-6 text-white cursor-pointer" />
        <XIcon className="w-6 h-6 text-white cursor-pointer" />
      </div>
      <div className="  flex justify-center mt-4  items-center text-white">
        Todos os direitos reservados ©️ 2024
      </div>
      <div className="flex flex-col  justify-center items-center">
        <p>Entre em contato</p>
        <div className="flex  justify-center items-center gap-2">
          <Mail className="w-6 h-6  text-white" />
          <p className="text-white  font-thin">fernandosandesmoura@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
