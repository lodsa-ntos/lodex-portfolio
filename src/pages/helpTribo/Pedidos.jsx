import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";

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
            Ainda ajudo, sim. Mas agora com estrutura. <br />
            Só aceito pedidos feitos por aqui, de forma organizada, com valor
            definido. <br />O meu tempo é real. A entrega também.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/** Left side */}
          <div className="flex flex-col self-start gap-4">
            <div className="bg-gray-300 w-full  h-52">safsdfsdf</div>

            <div className="bg-gray-300 w-full h-52">sdfsfsdf</div>
          </div>

          {/** Center Content */}
          <div className="bg-gray-300"></div>

          {/** Right side */}
          <div className="flex flex-col items-end justify-end gap-4">
            <div className="bg-gray-300 w-full h-52">safsdfsdf</div>

            <div className="bg-gray-300 w-full  h-52">sdfsfsdf</div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default Pedidos;
