import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | LodeX Studio</title>
        <meta
          name="description"
          content="Política de privacidade da LodeX Studio. Como recolhemos, utilizamos e protegemos os seus dados pessoais."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Política de Privacidade
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última atualização:</strong> 15 de agosto de 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Informações que Recolhemos
                </h2>
                <p>
                  Recolhemos informações que você nos fornece diretamente quando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Entra em contacto através dos nossos formulários</li>
                  <li>Subscreve a nossa newsletter</li>
                  <li>Interage com o nosso website</li>
                </ul>
                <p>
                  As informações podem incluir: nome, endereço de email, número
                  de telefone, mensagem e outras informações que escolha
                  partilhar connosco.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Como Utilizamos as Suas Informações
                </h2>
                <p>Utilizamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responder às suas consultas e pedidos</li>
                  <li>Fornecer os nossos serviços</li>
                  <li>Enviar newsletters (apenas com o seu consentimento)</li>
                  <li>Melhorar o nosso website e serviços</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Partilha de Informações
                </h2>
                <p>
                  Não vendemos, alugamos ou partilhamos as suas informações
                  pessoais com terceiros, exceto quando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Necessário para fornecer os nossos serviços</li>
                  <li>Exigido por lei</li>
                  <li>Com o seu consentimento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Cookies e Tecnologias Similares
                </h2>
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar a sua
                  experiência no nosso website. Os cookies são pequenos
                  ficheiros armazenados no seu dispositivo que nos ajudam a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analisar o tráfego do website</li>
                  <li>Personalizar conteúdo</li>
                  <li>Melhorar a funcionalidade do site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Segurança dos Dados
                </h2>
                <p>
                  Implementamos medidas de segurança adequadas para proteger as
                  suas informações pessoais contra acesso, alteração, divulgação
                  ou destruição não autorizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Os Seus Direitos
                </h2>
                <p>De acordo com o RGPD, você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aceder às suas informações pessoais</li>
                  <li>Rectificar informações incorretas</li>
                  <li>Solicitar a eliminação dos seus dados</li>
                  <li>Retirar o consentimento a qualquer momento</li>
                  <li>Portar os seus dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Retenção de Dados
                </h2>
                <p>
                  Mantemos as suas informações pessoais apenas pelo tempo
                  necessário para cumprir os propósitos descritos nesta
                  política, a menos que seja exigido um período de retenção mais
                  longo por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Contacto
                </h2>
                <p>
                  Se tem questões sobre esta Política de Privacidade ou sobre
                  como tratamos os seus dados pessoais, pode contactar-nos:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p>
                    <strong>LodeX Studio</strong>
                  </p>
                  <p>Email: lodexstudio@gmail.com</p>
                  <p>Telefone: +351 935 895 551</p>
                  <p>Morada: Sacavém, Lisboa, Portugal</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Alterações a Esta Política
                </h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente.
                  Notificaremos sobre alterações significativas publicando a
                  nova política nesta página com uma data de atualização.
                </p>
              </section>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default PrivacyPolicy;
