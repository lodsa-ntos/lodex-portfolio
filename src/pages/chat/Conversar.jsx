import React, { useState } from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { PiCodeBlockBold } from "react-icons/pi";
import { toast } from "react-toastify";

function Conversar() {
  // Estado para controlar e mostrar o formulário para preenchimento - Candidaturas
  const [sending, setSending] = useState(false);
  const [nomeCompleto, setnomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [referencia, setReferencia] = useState("");
  const [tipoProjeto, setTipoProjeto] = useState("");
  const [prazoIdeal, setPrazoIdeal] = useState("");
  const [orcamentoEstimado, setOrcamentoEstimado] = useState("");
  const [messagem, setMessagem] = useState("");

  // Função para enviar o formulário
  const handleStartProject = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);

    // Valida os campos obrigatórios
    const nome = formData.get("nomeCompleto")?.trim();
    const email = formData.get("email")?.trim();
    const messagem = formData.get("messagem")?.trim();
    const tipoProjeto = formData.get("tipoProjeto");

    if (!nome || !email || !messagem || !tipoProjeto) {
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
        setReferencia("");
        setTipoProjeto("");
        setPrazoIdeal("");
        setOrcamentoEstimado("");
        setMessagem("");

        // Limpa os campos não-controlados
        e.target.reset();
      } else {
        const data = await response.json();
        toast.error(data.error || "Erro ao enviar mensagem.");
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
      <section
        id="conversar"
        className="relative min-h-screen transition-all duration-500"
      > 
        {/* Fundo dividido */}
        <div className="absolute inset-0 ">
          <div className="relative h-1/2 2xl:h-96 bg-[#f2f8fb] flex flex-col items-center justify-center text-center px-4 transition-all duration-500">
            {/* Título e subtítulo */}
            <div className="mb-10 pt-24 md:pt-36">
              <span className=" text-[17px] md:text-3xl xl:text-4xl text-gray-900 font-semibold text-center flex mb-2 uppercase tracking-wide items-center justify-center gap-1">
                <PiCodeBlockBold className="text-gray-600" /> Vamos estruturar o
                teu projeto?
              </span>

              <h2 className="text-sm md:text-lg xl:text-xl text-center font-medium text-gray-500 leading-tight">
                Mesmo que estejas no início ou sem tudo definido,{" "}
                <br className=" md:hidden" />
                podes começar por aqui. <br />É só preencher o que souberes,{" "}
                <br className=" md:hidden" />o resto alinhamos juntos.
              </h2>

              {/* Mensagem Bem-vindo */}
              <div className="absolute bottom-[-1.25rem] left-1/2 -translate-x-1/2 bg-gray-300 rounded-full px-6 py-2 shadow-lg z-10 text-gray-600 text-sm ring-1 ring-gray-500/10 ring-inset transition-all duration-500">
                Tu guias, eu estruturo.
              </div>
            </div>
          </div>

          <div className="h-1/2 py-16 pb-36 bg-white transition-all duration-500">
            <GlobalContainer>
              {/* Formulário */}
              <div>
                <div>
                  <form
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={handleStartProject}
                    className="space-y-6 sm:space-y-10  container mx-auto px-4 sm:px-6 lg:px-32 transition-all duration-500"
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
                          value={nomeCompleto}
                          id="nomeCompleto"
                          onChange={(e) => setnomeCompleto(e.target.value)}
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
                          value={email}
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
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
                        type="referencia"
                        name="referencia"
                        value={referencia}
                        id="referencia"
                        onChange={(e) => setReferencia(e.target.value)}
                        placeholder="Se já tiveres um site, portfólio ou referência visual, partilha aqui."
                        pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$"
                        className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500"
                      />
                    </div>

                    <div className="grid gap-8 md:flex md:items-start xl:gap-20 justify-start text-sm font-medium text-gray-700">
                      <div className="justify-self-center relative w-72 ">
                        <fieldset className="max-w-content gap-2 flex flex-col py-1">
                          <legend className="flex items-center justify-between py-2 whitespace-nowrap gap-1">
                            Tipo de projeto que procuras
                            <span className="text-red-500">*</span>
                          </legend>
                          <select
                            name="tipoProjeto"
                            required
                            id="tipoProjeto"
                            value={tipoProjeto}
                            onChange={(e) => setTipoProjeto(e.target.value)}
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
                          <legend className="flex items-center justify-between py-2 whitespace-nowrap gap-1">
                            Prazo ideal{" "}
                            <span
                              className="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                          </legend>
                          <select
                            id="prazoIdeal"
                            name="prazoIdeal"
                            value={prazoIdeal}
                            onChange={(e) => setPrazoIdeal(e.target.value)}
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
                          <legend className="flex items-center justify-between py-2 whitespace-nowrap gap-1">
                            Orçamento estimado
                            <span
                              className="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                          </legend>
                          <select
                            id="orcamento"
                            name="orcamentoEstimado"
                            value={orcamentoEstimado}
                            onChange={(e) =>
                              setOrcamentoEstimado(e.target.value)
                            }
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
                        placeholder="Conta-me onde estás agora. Pode ser só uma ideia vaga, uma necessidade específica ou até uma dúvida."
                        name="messagem"
                        rows="4"
                        id="messagem"
                        value={messagem}
                        onChange={(e) => setMessagem(e.target.value)}
                        className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500 resize-none"
                        aria-label="Mensagem"
                      ></textarea>
                    </div>

                    {/* Mensagem de Espera */}
                    {sending && (
                      <p
                        className="text-center text-gray-500"
                        role="status"
                        aria-live="polite"
                      >
                        A enviar mensagem, por favor aguarde...
                      </p>
                    )}

                    {/* Botão de Envio */}
                    <div className="flex flex-col items-center justify-center mt-6">
                      <button
                        type="submit"
                        className="w-fit bg-secundario text-white py-4 px-10 rounded-md transition-colors duration-500  hover:bg-secundario/90 focus:outline-none focus:ring-2 focus:ring-secundario focus:ring-opacity-50 shadow-md "
                        aria-label="Enviar mensagem"
                        disabled={sending}
                      >
                        Enviar e começar conversa
                      </button>
                    </div>
                  </form>

                  <div className="flex items-center justify-center text-center py-10">
                    <small>
                      🔒 As tuas informações são usadas apenas para entender{" "}
                      <br className=" md:hidden" />e alinhar o projeto contigo.{" "}
                      <br className=" xl:hidden" />
                      Sem spam, sem compromisso automático.
                    </small>
                  </div>
                </div>
              </div>
            </GlobalContainer>
          </div>
        </div>
      </section>
      <section className="py-80 sm:py-36 md:py-36 xl:py-52 2xl:py-0 transition-all duration-500 "></section>
    </>
  );
}

export default Conversar;
