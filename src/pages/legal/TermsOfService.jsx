import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Termos de Serviço | LodeX Studio</title>
        <meta
          name="description"
          content="Termos de serviço da LodeX Studio. Condições de utilização dos nossos serviços de desenvolvimento web."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Termos de Serviço
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última atualização:</strong> 15 de agosto de 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao aceder e utilizar os serviços da LodeX Studio, você
                  concorda em ficar vinculado por estes Termos de Serviço. Se
                  não concordar com qualquer parte destes termos, não deve
                  utilizar os nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Descrição dos Serviços
                </h2>
                <p>A LodeX Studio oferece os seguintes serviços:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Desenvolvimento de websites e landing pages</li>
                  <li>Criação de portfólios profissionais</li>
                  <li>Redesign de websites existentes</li>
                  <li>Consultoria em UX/UI Design</li>
                  <li>Manutenção e suporte técnico</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Processo de Trabalho
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    3.1 Consulta Inicial
                  </h3>
                  <p>
                    Todo projeto começa com uma consulta gratuita para entender
                    as suas necessidades e objectivos.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    3.2 Proposta e Orçamento
                  </h3>
                  <p>
                    Após a consulta, fornecemos uma proposta detalhada com
                    prazos e custos.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    3.3 Desenvolvimento
                  </h3>
                  <p>
                    O trabalho inicia após a aprovação da proposta e pagamento
                    inicial (50%).
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    3.4 Entrega e Pagamento Final
                  </h3>
                  <p>
                    O restante pagamento (50%) é devido na entrega do projeto
                    completo.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Pagamentos e Reembolsos
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    4.1 Estrutura de Pagamento
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>50% no início do projeto</li>
                    <li>50% na entrega final</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-900">
                    4.2 Política de Reembolso
                  </h3>
                  <p>
                    Os reembolsos são analisados caso a caso. Se o trabalho já
                    foi iniciado, o reembolso será proporcional ao trabalho não
                    realizado.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Propriedade Intelectual
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    5.1 Direitos do Cliente
                  </h3>
                  <p>
                    Após o pagamento completo, o cliente detém os direitos sobre
                    o design final e código desenvolvido especificamente para o
                    seu projeto.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    5.2 Direitos da LodeX Studio
                  </h3>
                  <p>
                    Reservamos o direito de utilizar o trabalho realizado no
                    nosso portfólio e materiais promocionais, salvo acordo em
                    contrário.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Responsabilidades do Cliente
                </h2>
                <p>O cliente compromete-se a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Fornecer conteúdo e informações necessárias em tempo útil
                  </li>
                  <li>
                    Responder a pedidos de feedback dentro de 7 dias úteis
                  </li>
                  <li>Efectuar pagamentos nos prazos acordados</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Limitação de Responsabilidade
                </h2>
                <p>
                  A LodeX Studio não será responsável por danos indirectos,
                  especiais, incidentais ou consequenciais resultantes da
                  utilização dos nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Suporte e Manutenção
                </h2>
                <p>
                  Oferecemos 30 dias de suporte gratuito após a entrega do
                  projeto para correção de bugs. Alterações de conteúdo ou
                  funcionalidades estão sujeitas a orçamento separado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Rescisão
                </h2>
                <p>
                  Qualquer parte pode rescindir o acordo com aviso prévio de 7
                  dias. Em caso de rescisão, o pagamento será devido pelo
                  trabalho já realizado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Lei Aplicável
                </h2>
                <p>
                  Estes termos são regidos pelas leis portuguesas. Qualquer
                  disputa será resolvida nos tribunais competentes em Portugal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Contacto
                </h2>
                <p>Para questões sobre estes Termos de Serviço:</p>
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
                  12. Alterações aos Termos
                </h2>
                <p>
                  Reservamos o direito de modificar estes termos a qualquer
                  momento. As alterações serão comunicadas através do website e
                  entrarão em vigor 30 dias após a publicação.
                </p>
              </section>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default TermsOfService;
