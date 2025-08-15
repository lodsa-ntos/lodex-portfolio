import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function WebsiteTerms() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | LodeX Studio</title>
        <meta
          name="description"
          content="Política de cookies da LodeX Studio. Como utilizamos cookies e tecnologias similares no nosso website."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Política de Cookies
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última atualização:</strong> 15 de agosto de 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. O que são Cookies?
                </h2>
                <p>
                  Cookies são pequenos ficheiros de texto que são armazenados no
                  seu dispositivo quando visita um website. <br />Eles são amplamente
                  utilizados para fazer com que os websites funcionem de forma
                  mais eficiente e para fornecer informações aos proprietários
                  do site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Como Utilizamos Cookies
                </h2>
                <p>
                  Utilizamos cookies para melhorar a sua experiência no nosso
                  website e para entender como interage com o nosso conteúdo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Tipos de Cookies que Utilizamos
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      3.1 Cookies Estritamente Necessários
                    </h3>
                    <p>
                      Estes cookies são essenciais para o funcionamento do
                      website. Eles permitem-lhe navegar pelo website e usar as
                      suas funcionalidades.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <p>
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Cookies de sessão para formulários</li>
                        <li>Cookies de segurança</li>
                        <li>Preferências de idioma</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      3.2 Cookies de Performance
                    </h3>
                    <p>
                      Estes cookies coletam informações sobre como utiliza o
                      nosso website, como as páginas que visita mais
                      frequentemente.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <p>
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Google Analytics</li>
                        <li>Dados de tempo de carregamento</li>
                        <li>Páginas de erro</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      3.3 Cookies Funcionais
                    </h3>
                    <p>
                      Estes cookies permitem que o website se lembre de escolhas
                      que faz e fornecem funcionalidades melhoradas e
                      personalizadas.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <p>
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Preferências de utilizador</li>
                        <li>Conteúdo personalizado</li>
                        <li>Chat widgets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Cookies de Terceiros
                </h2>
                <p>
                  Alguns cookies são colocados por serviços de terceiros que
                  aparecem nas nossas páginas:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Google Analytics
                      </h4>
                      <p className="text-sm text-gray-600">
                        Para análise do tráfego e comportamento dos utilizadores
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        WhatsApp Widget
                      </h4>
                      <p className="text-sm text-gray-600">
                        Para funcionalidade de chat direto
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Vercel</h4>
                      <p className="text-sm text-gray-600">
                        Para hosting e performance do website
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Gestão de Cookies
                </h2>
                <p>
                  Pode controlar e/ou eliminar cookies como desejar. Pode
                  eliminar todos os cookies que já estão no seu computador <br />e
                  pode configurar a maioria dos navegadores para impedir que
                  sejam colocados.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-yellow-800">
                    <strong>Nota:</strong> Se escolher eliminar ou desativar
                    cookies, algumas funcionalidades do nosso website podem não
                    funcionar corretamente.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Como Gerir Cookies no Seu Navegador:
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>Chrome:</strong> Definições → Privacidade e
                      segurança → Cookies
                    </li>
                    <li>
                      <strong>Firefox:</strong> Preferências → Privacidade e
                      Segurança
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferências → Privacidade
                    </li>
                    <li>
                      <strong>Edge:</strong> Definições → Privacidade, pesquisa
                      e serviços
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Consentimento para Cookies
                </h2>
                <p>
                  Ao continuar a utilizar o nosso website, você concorda com o
                  uso de cookies conforme descrito nesta política. <br />Se não
                  concordar, deve ajustar as configurações do seu navegador ou
                  deixar de utilizar o website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Atualizações da Política
                </h2>
                <p>
                  Esta política de cookies pode ser atualizada periodicamente.
                  Recomendamos que revise esta página regularmente <br />para se
                  manter informado sobre como utilizamos cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Contacto
                </h2>
                <p>Se tem questões sobre a nossa utilização de cookies:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p>
                    <strong>LodeX Studio</strong>
                  </p>
                  <p>Email: lodexstudio@gmail.com</p>
                  <p>Telefone: +351 935 895 551</p>
                  <p>Morada: Sacavém, Lisboa, Portugal</p>
                </div>
              </section>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default WebsiteTerms;
