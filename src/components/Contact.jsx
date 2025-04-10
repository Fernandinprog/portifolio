import { Bird, Mail, User } from "lucide-react";
import TelImage from "/email.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações básicas
    if (
      !formData.nome ||
      !formData.sobrenome ||
      !formData.email ||
      !formData.mensagem
    ) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Por favor, insira um email válido!");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar o formulário
    toast.success("Sua mensagem foi enviada com sucesso!");
    setFormData({ nome: "", sobrenome: "", email: "", mensagem: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-100 py-20 dark:bg-gradient-to-t dark:from-zinc-800 dark:to-zinc-900"
    >
      <div className="container mx-auto px-4">
        <ToastContainer position="top-right" />

        <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 md:text-4xl dark:text-white">
          Contato
        </h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full rounded-lg shadow-xl"
              src={TelImage}
              alt="Imagem de contato"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl rounded-lg bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:bg-zinc-800/50"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-zinc-900 dark:text-white">
                  <User className="h-5 w-5 text-fuchsia-500" />
                  Nome
                </label>
                <input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 bg-white p-3 text-zinc-900 outline-none transition-colors focus:border-fuchsia-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  type="text"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-zinc-900 dark:text-white">
                  <User className="h-5 w-5 text-fuchsia-500" />
                  Sobrenome
                </label>
                <input
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 bg-white p-3 text-zinc-900 outline-none transition-colors focus:border-fuchsia-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  type="text"
                  placeholder="Seu sobrenome"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className="flex items-center gap-2 text-zinc-900 dark:text-white">
                <Mail className="h-5 w-5 text-fuchsia-500" />
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-md border border-gray-300 bg-white p-3 text-zinc-900 outline-none transition-colors focus:border-fuchsia-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                type="email"
                placeholder="Digite seu email"
              />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className="flex items-center gap-2 text-zinc-900 dark:text-white">
                <Bird className="h-5 w-5 text-fuchsia-500" />
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className="h-32 rounded-md border border-gray-300 bg-white p-3 text-zinc-900 outline-none transition-colors focus:border-fuchsia-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                placeholder="Digite sua mensagem"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-fuchsia-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-fuchsia-600"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
