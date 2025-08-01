import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { PiCodeBlockBold } from "react-icons/pi";

function Conversar() {
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
                          name="primeiroNome"
                          placeholder="Como te posso chamar?"
                          required
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
                          placeholder="teuemail@email.com"
                          required
                          pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$"
                          className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500"
                          title="O e-mail deve terminar com @gmail.com, @hotmail.com ou @outlook.com"
                        />
                      </div>
                    </div>

                    {/* E-mail */}
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">
                        Link de referência ou site atual{" "} <span
                              class="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Se já tiveres um site, portfólio ou referência visual, partilha aqui."
                        required
                        pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$"
                        className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500"
                        title="O e-mail deve terminar com @gmail.com, @hotmail.com ou @outlook.com"
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
                            class="select select-bordered ring-1 ring-gray-200 focus:outline-none active:border-secundario active:ring-secundario 
                          focus:ring-secundario hover:ring-secundario transition-all duration-500 rounded-md py-2 w-full"
                          >
                            <option disabled selected>
                              Seleciona um tipo de projeto
                            </option>
                            <option>Landing Page</option>
                            <option>Website Completo</option>
                            <option>Portfólio</option>
                            <option>Redesign</option>
                            <option>Outro / Ainda não sei</option>
                          </select>
                        </fieldset>
                      </div>

                      <div className="justify-self-center relative w-72">
                        <fieldset className="max-w-content gap-2 flex flex-col py-1">
                          <legend className="flex items-center justify-between py-2 gap-1">
                            Prazo ideal{" "}
                            <span
                              class="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                          </legend>
                          <select
                            class="select select-bordered ring-1 ring-gray-200 focus:outline-none active:border-secundario active:ring-secundario 
                          focus:ring-secundario hover:ring-secundario transition-all duration-500 rounded-md py-2 w-full"
                          >
                            <option disabled selected>
                              Seleciona prazo ideal
                            </option>
                            <option>Não tenho pressa</option>
                            <option>Dentro de 2 semanas</option>
                            <option>Dentro de 1 mês</option>
                            <option>Tenho urgência</option>
                          </select>
                        </fieldset>
                      </div>

                      <div className="justify-self-center relative w-72">
                        <fieldset className="max-w-content gap-2 flex flex-col py-1">
                          <legend className="flex items-center justify-between py-2 gap-1">
                            Orçamento estimado
                            <span
                              class="bg-gray-100 text-gray-500 ring-1 ring-gray-500/10 ring-inset text-xs font-medium me-2 px-1.5 py-0.5 
                             rounded-full"
                            >
                              opcional
                            </span>
                          </legend>
                          <select
                            class="select select-bordered ring-1 ring-gray-200 focus:outline-none active:border-secundario active:ring-secundario 
                          focus:ring-secundario hover:ring-secundario transition-all duration-500 rounded-md py-2 w-full"
                          >
                            <option disabled selected>
                              Seleciona orçamento estimado
                            </option>
                            <option>Ainda não sei</option>
                            <option>Até 300€</option>
                            <option>300€ – 500€</option>
                            <option>500€ – 800€</option>
                            <option>800€ ou mais</option>
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
