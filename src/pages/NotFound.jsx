import React from "react";
import { BubblyLink } from "../library/BubblyLink";
import { Helmet } from "react-helmet";
import GlobalContainer from "../utils/GlobalContainer";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada - 404 | LodeX Studio</title>
        <meta
          name="description"
          content="A página que procuras não existe ou foi movida. Volta à página inicial ou explora os projetos disponíveis na LodeX Studio."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <GlobalContainer>
          <div className="text-center max-w-2xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              404
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              🔍 Página não encontrada
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed">
              A página que procuras não existe, foi movida ou o link pode estar
              incorreto. Mas não te preocupes! Temos muito conteúdo interessante
              para explorares.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-12">
              <BubblyLink
                to="/"
                colorStart="#3B82F6"
                colorEnd="#1E40AF"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                🏠 Página inicial
              </BubblyLink>

              <BubblyLink
                to="/portfolio"
                colorStart="#10B981"
                colorEnd="#047857"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                💼 Ver portfólio
              </BubblyLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🎨 Serviços
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Landing pages, websites completos e redesigns profissionais.
                </p>
                <BubblyLink
                  to="/servicos"
                  colorStart="#6366F1"
                  colorEnd="#4F46E5"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Explorar →
                </BubblyLink>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📝 Blog
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tutoriais, tips e novidades sobre desenvolvimento web.
                </p>
                <BubblyLink
                  to="/blog"
                  colorStart="#8B5CF6"
                  colorEnd="#7C3AED"
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                >
                  Ler artigos →
                </BubblyLink>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  💬 Contacto
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tens um projeto em mente? Vamos conversar!
                </p>
                <BubblyLink
                  to="/conversar"
                  colorStart="#F59E0B"
                  colorEnd="#D97706"
                  className="text-yellow-600 hover:text-yellow-800 text-sm font-medium"
                >
                  Começar projeto →
                </BubblyLink>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>
                Se acreditas que isto é um erro, podes reportar em:{" "}
                <a
                  href="mailto:lodexstudio@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  lodexstudio@gmail.com
                </a>
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default NotFound;
