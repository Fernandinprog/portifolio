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
    <div className="flex flex-col  w-full    items-center bg-gradient-to-t from-zinc-800 to-zinc-900   p-2  gap-4 h-[1000px] lg:h-[800px]">
      <ToastContainer />
      <h1 className="text-3xl text-white mt-4 font-bold">Contato</h1>
      <div className=" flex  flex-col mt-12 mb-4 lg:flex-row gap-4 justify-center items-center w-full ">
        <img className="w-[400px]     rounded-md  " src={TelImage} />
        <form className="flex flex-col mt-8 items-center w-[400px] lg:w-[600px] bg-slate-200 rounded-lg gap-4  p-10 shadow-2xl  ">
          <div className="flex  gap-4 justify-center w-full items-center">
            <label className="text-xl text-white font-bold">
              <User className="text-black" />
            </label>
            <input
              className="w-[50%] h-10 rounded-md outline-none text-black p-2"
              type="text"
              placeholder="Digite seu nome"
            />
            <input
              className="w-[50%] h-10 rounded-md outline-none text-black p-2"
              type="text"
              placeholder="Seu sobrenome"
            />
          </div>
          <div className="flex gap-4 mt-4 justify-center  w-full items-center">
            <label className="text-xl text-white font-bold">
              <Mail className="text-black" />
            </label>
            <input
              className="w-full h-10 rounded-md outline-none text-black p-2"
              type="text"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex  justify-center items-center w-full gap-4 ">
            <label className="text-xl text-white font-bold">
              <Bird className="text-black" />
            </label>
            <textarea className="rounded-md mt-4 w-full"></textarea>
          </div>
          <div className="w-full flex justify-center items-center  border-black">
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 duration-150 w-[40%] text-white font-bold py-2 px-4 rounded-md"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex gap-4  justify-center items-center text-center p-4  text-white  rounded-md"></div>
    </div>
  );
};

export default Contact;
