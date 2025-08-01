import React, { useRef, useState } from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { PiCodeBlockBold } from "react-icons/pi";
import { toast } from "react-toastify";

function Conversar() {
  const formRef = useRef(null);
  // Estado para controlar e mostrar o formulário para preenchimento - Candidaturas
  const [sending, setSending] = useState(false);
  const [nomeCompleto, setnomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função para enviar o formulário
  const handleStartProject = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);

    // Valida os campos obrigatórios
    const nome = formData.get("nome")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
    const tipoProjeto = formData.get("tipoProjeto");

    if (!nome || !email || !message || !tipoProjeto) {
      toast.error("Por favor, preenche todos os campos obrigatórios.");
      setSending(false);
      return;
    }

    try {
      const response = await fetch("/api/start-project", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada com sucesso! Obrigado, entrarei em contacto em breve."
        );

        // Limpa os campos do formulário
        setnomeCompleto("");
        setEmail("");
        setMessage("");

        // Limpa os campos não-controlados
        e.target.reset();
      } else {
        toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      toast.error(
        "Erro inesperado. Tente mais tarde. Se o problema persistir, contacte-nos."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section id="conversar" className="relative min-h-screen">
        {/* Fundo dividido */}
        <div className="absolute inset-0 ">
          <div className="h-1/2 bg-[#f2f8fb]">
            {/* Título e subtítulo */}
            <div className="mb-10 pt-36">
              <span className=" text-xl sm:text-3xl md:text-4xl text-gray-900 font-semibold text-center flex mb-2 uppercase tracking-wide items-center justify-center gap-1">
                <PiCodeBlockBold className="text-gray-600" /> Vamos estruturar o
                teu projeto?
              </span>

              <h2 className="text-xs sm:text-lg text-center font-medium text-gray-500 leading-tight">
                Mesmo que estejas no início ou sem tudo definido, podes começar
                por aqui. <br />É só preencher o que souberes, o resto alinhamos
                juntos.
              </h2>
            </div>
          </div>

          <div className="h-1/2 py-16 pb-36 bg-white">
            <GlobalContainer>
              {/* Formulário */}
              <div>
                <div>
                  <form
                    method="POST"
                    encType="multipart/form-data"
                    className="space-y-6 sm:space-y-10  container mx-auto px-4 sm:px-6 lg:px-32"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Primeiro Nome e Último Nome */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                          Como te posso chamar?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nomeCompleto"
                          required
                          placeholder="Como te posso chamar?"
                          className="w-full border outline-none focus:border-secundario hover:border-secundario rounded-md px-4 py-2 transition duration-500"
                        />
                      </div>

                      {/* E-mail */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="teuemail@email.com"
                          pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$"
                          className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500"
                          title="O e-mail deve terminar com @gmail.com, @hotmail.com ou @outlook.com"
                        />
                      </div>
                    </div>

                    {/*  Link de referência ou site atual */}
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">
                        Link de referência ou site atual{" "}
                        <span
                          class="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                        >
                          opcional
                        </span>
                      </label>
                      <input
                        type="link"
                        name="link"
                        placeholder="Se já tiveres um site, portfólio ou referência visual, partilha aqui."
                        pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$"
                        className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500"
                      />
                    </div>

                    <div className="flex items-start gap-20 justify-start text-sm font-medium text-gray-700 ">
                      <div className="justify-self-center relative w-72 ">
                        <fieldset className="max-w-content gap-2 flex flex-col py-1">
                          <legend className="flex items-center justify-between py-2 gap-1">
                            Tipo de projeto que procuras
                            <span className="text-red-500">*</span>
                          </legend>
                          <select
                            name="tipoProjeto"
                            required
                            className="select select-bordered ring-1 ring-gray-200 focus:outline-none active:border-secundario active:ring-secundario 
                          focus:ring-secundario hover:ring-secundario transition-all duration-500 rounded-md py-2 w-full"
                          >
                            <option value="" disabled selected>
                              Seleciona um tipo de projeto
                            </option>
                            <option value="landing">Landing Page</option>
                            <option value="website">Website Completo</option>
                            <option value="portfolio">Portfólio</option>
                            <option value="redesign">Redesign</option>
                            <option value="outro">Outro / Ainda não sei</option>
                          </select>
                        </fieldset>
                      </div>

                      <div className="justify-self-center relative w-72">
                        <fieldset className="max-w-content gap-2 flex flex-col py-1">
                          <legend className="flex items-center justify-between py-2 gap-1">
                            Prazo ideal{" "}
                            <span
                              className="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                          </legend>
                          <select
                            className="select select-bordered ring-1 ring-gray-200 focus:outline-none active:border-secundario active:ring-secundario 
                          focus:ring-secundario hover:ring-secundario transition-all duration-500 rounded-md py-2 w-full"
                          >
                            <option value="" disabled selected>
                              Seleciona prazo ideal
                            </option>
                            <option value="naoTenhoPressa">
                              Não tenho pressa
                            </option>
                            <option value="2semanas">
                              Dentro de 2 semanas
                            </option>
                            <option value="1mes">Dentro de 1 mês</option>
                            <option value="urgencia">Tenho urgência</option>
                          </select>
                        </fieldset>
                      </div>

                      <div className="justify-self-center relative w-72">
                        <fieldset className="max-w-content gap-2 flex flex-col py-1">
                          <legend className="flex items-center justify-between py-2 gap-1">
                            Orçamento estimado
                            <span
                              className="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                          </legend>
                          <select
                            className="select select-bordered ring-1 ring-gray-200 focus:outline-none active:border-secundario active:ring-secundario 
                          focus:ring-secundario hover:ring-secundario transition-all duration-500 rounded-md py-2 w-full"
                          >
                            <option value="" disabled selected>
                              Seleciona orçamento estimado
                            </option>
                            <option value="aindaNaoSei">Ainda não sei</option>
                            <option value="ate300">Até 300€</option>
                            <option value="entre300e500">300€ – 500€</option>
                            <option value="entre500e800">500€ – 800€</option>
                            <option value="mais800">800€ ou mais</option>
                          </select>
                        </fieldset>
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">
                        Mensagem <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder="Conta-me onde estás agora. Pode ser só uma ideia vaga, uma necessidade específica ou até uma dúvida. Tudo bem por aqui."
                        name="message"
                        rows="4"
                        required
                        className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500 resize-none"
                        aria-label="Mensagem"
                      ></textarea>
                    </div>

                    {/* Botão de Envio */}
                    <div className="flex flex-col items-center justify-center mt-6">
                      <button
                        type="submit"
                        className="w-fit bg-secundario text-white py-4 px-10 rounded-md transition-colors duration-500  hover:bg-secundario/90 focus:outline-none focus:ring-2 focus:ring-secundario focus:ring-opacity-50 shadow-md "
                        aria-label="Enviar Candidatura"
                      >
                        Enviar e começar conversa
                      </button>
                    </div>
                  </form>

                  <div className="flex items-center justify-center py-10">
                    <small>
                      🔒 As tuas informações são usadas apenas para entender e
                      alinhar o projeto contigo. Sem spam, sem compromisso
                      automático.
                    </small>
                  </div>
                </div>
              </div>
            </GlobalContainer>
          </div>
        </div>

        {/* Mensagem Bem-vindo */}
        <div className=" hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-[4rem] p-3 shadow-lg z-10 text-gray-600 ring-1 ring-gray-500/10 ring-inset">
          Tu guias, eu estruturo.
        </div>
      </section>
      <section className="py-52"></section>
    </>
  );
}

export default Conversar;
