import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { MdAutoFixHigh } from "react-icons/md";
import { RxDrawingPinFilled } from "react-icons/rx";

function Pedidos() {
  return (
    <section
      id="launchPeack"
      className=" min-h-screen pt-24 pb-24 transition-all duration-500"
    >
      <GlobalContainer>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Pedidos & Pequenas Ajudas
          </h1>

          <p>
            <strong>Olá!</strong> Se chegaste até aqui por recomendação da
            família ou de alguém próximo, <br />
            fico feliz por saber que confiam no meu trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {/** Left side */}
          <div className="flex flex-col self-start gap-4">
            <div className="bg-gray-300 w-full p-3 h-52 rounded-xl">
              <h1 className="flex items-center gap-1 font-semibold mb-6">
                <MdAutoFixHigh className="size-6" />O que posso ajudar a
                resolver
              </h1>

              <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
                <li className="inline-block items-center space-x-3 rtl:space-x-reverse">
                  <span className="size-5 inline-flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm">
                    <strong className="text-secundario">Finanças</strong>, <strong className="text-secundario">Segurança Social</strong>, <strong className="text-secundario">IEFP</strong>, etc.
                  </span>
                </li>

<li className="inline-block items-center space-x-3 rtl:space-x-reverse">
                  <span className="size-5 inline-flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm">
                    Preencher formulários ou organizar ficheiros PDF
                  </span>
                </li>

                <li className="inline-block items-center space-x-3 rtl:space-x-reverse">
                  <span className="size-5 inline-flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm">
                    Fazer pequenas pesquisas ou resolver dúvidas tecnológicas
                  </span>
                </li>

              </ul>
            </div>

            <div className="bg-gray-300 w-full h-52 rounded-xl">sdfsfsdf</div>
          </div>

          {/** Center Content */}
          <div className="relative bg-gray-300 rounded-xl overflow-hidden shadow-md group hover:shadow-lg flex flex-col">
            <img
              src="images/pedidos/pedidos-work.jpeg"
              alt=""
              className=" object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl w-full h-[430px]"
            />

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px] text-white px-5 py-5 space-y-2 text-left rounded-xl">
              <p className="text-base">
                A LØdeX Studio nasceu com muito esforço, e o teu pedido pode
                ajudar a dar visibilidade e reconhecimento ao que construo dia
                após dia.
              </p>
            </div>
          </div>

          {/** Right side */}
          <div className="block flex-col items-end justify-end gap-4 space-y-4">
            <div className="bg-gray-300 w-full h-52 rounded-xl">safsdfsdf</div>

            <div className="bg-gray-300 w-full h-52 rounded-xl">sdfsfsdf</div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default Pedidos;
