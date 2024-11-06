import { Bird, Mail, User } from "lucide-react";
import TelImage from "/email.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  function handleClick(event) {
    event.preventDefault();
    toast.success("Sua mensagem foi enviada com sucesso!");
  }

  return (
    <div className="flex h-[1000px] w-full flex-col items-center gap-4 bg-gradient-to-t from-zinc-800 to-zinc-900 p-2 lg:h-[800px]">
      <ToastContainer />
      <h1 className="mt-4 text-3xl font-bold text-white">Contato</h1>
      <div className="mb-4 mt-12 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
        <img className="w-[400px] rounded-md" src={TelImage} />
        <form className="mt-8 flex w-[400px] flex-col items-center gap-4 rounded-lg bg-slate-200 p-10 shadow-2xl lg:w-[600px]">
          <div className="flex w-full items-center justify-center gap-4">
            <label className="text-xl font-bold text-white">
              <User className="text-black" />
            </label>
            <input
              className="h-10 w-[50%] rounded-md p-2 text-black outline-none"
              type="text"
              placeholder="Digite seu nome"
            />
            <input
              className="h-10 w-[50%] rounded-md p-2 text-black outline-none"
              type="text"
              placeholder="Seu sobrenome"
            />
          </div>
          <div className="mt-4 flex w-full items-center justify-center gap-4">
            <label className="text-xl font-bold text-white">
              <Mail className="text-black" />
            </label>
            <input
              className="h-10 w-full rounded-md p-2 text-black outline-none"
              type="text"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <label className="text-xl font-bold text-white">
              <Bird className="text-black" />
            </label>
            <textarea className="mt-4 w-full rounded-md"></textarea>
          </div>
          <div className="flex w-full items-center justify-center border-black">
            <button
              onClick={handleClick}
              className="w-[40%] rounded-md bg-blue-500 px-4 py-2 font-bold text-white duration-150 hover:bg-blue-700"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-full items-center justify-center gap-4 rounded-md p-4 text-center text-white"></div>
    </div>
  );
};

export default Contact;
