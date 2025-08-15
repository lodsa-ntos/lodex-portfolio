import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";
import { BubblyLink } from "../../library/BubblyLink";

function ServerError() {
  return (
    <>
      <Helmet>
        <title>Erro 500 - Erro Interno do Servidor | LodeX Studio</title>
        <meta
          name="description"
          content="Erro interno do servidor. A LodeX Studio está a trabalhar para resolver o problema."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <GlobalContainer>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <span className="text-8xl">🛠️</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Erro 500
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Erro interno do servidor
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Ups! Algo correu mal do nosso lado. A nossa equipa já foi
              notificada e está a trabalhar para resolver o problema o mais
              rapidamente possível.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <BubblyLink
                to="/"
                colorStart="#3B82F6"
                colorEnd="#1E40AF"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                🏠 Voltar à página inicial
              </BubblyLink>

              <a
                href="/conversar"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                📞 Contactar suporte
              </a>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Enquanto esperamos...
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pode tentar recarregar a página em alguns minutos</li>
                <li>• Verifique a sua ligação à internet</li>
                <li>• Se o problema persistir, contacte-nos</li>
              </ul>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>
                Se precisar de ajuda urgente, pode contactar-nos diretamente:
              </p>
              <div className="mt-2 space-y-1">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:lodexstudio@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    lodexstudio@gmail.com
                  </a>
                </p>
                <p>
                  📱 WhatsApp:{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=351935895551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800"
                  >
                    +351 935 895 551
                  </a>
                </p>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default ServerError;
