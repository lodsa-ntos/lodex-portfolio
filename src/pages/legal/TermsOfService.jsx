import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | LodeX Studio</title>
        <meta
          name="description"
          content="LodeX Studio Terms of Service. Conditions for using our web development services."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Last updated:</strong> 30 August 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of terms
                </h2>
                <p>
                  By accessing and using LodeX Studio's services, you agree to
                  be bound by these Terms of Service. If you do not agree to any
                  part of these terms, you should not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Description of services
                </h2>
                <p>LodeX Studio provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website and landing page development</li>
                  <li>Professional portfolio creation</li>
                  <li>Redesign of existing websites</li>
                  <li>UX/UI design consulting</li>
                  <li>Maintenance and technical support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Work process
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    3.1 Initial consultation
                  </h3>
                  <p>
                    Every project begins with a free consultation to understand
                    your needs and goals.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    3.2 Proposal and quote
                  </h3>
                  <p>
                    After the consultation, we provide a detailed proposal with
                    timeline and costs.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    3.3 Development
                  </h3>
                  <p>
                    Work starts after the proposal is approved and the initial
                    payment (50%) is made.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    3.4 Delivery and final payment
                  </h3>
                  <p>
                    The remaining payment (50%) is due upon delivery of the
                    completed project.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Payments and refunds
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    4.1 Payment structure
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>50% at project start</li>
                    <li>50% upon final delivery</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-900">
                    4.2 Refund policy
                  </h3>
                  <p>
                    Refunds are assessed on a case-by-case basis. If work has
                    already begun, any refund will be proportional to the work
                    not performed.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Intellectual property
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    5.1 Client rights
                  </h3>
                  <p>
                    Upon full payment, the client owns the rights to the final
                    design and code developed specifically for their project.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900">
                    5.2 LodeX Studio rights
                  </h3>
                  <p>
                    We reserve the right to showcase the work in our portfolio
                    and promotional materials, unless otherwise agreed in
                    writing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Client responsibilities
                </h2>
                <p>The client agrees to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide necessary content and information on time</li>
                  <li>Respond to feedback requests within 7 business days</li>
                  <li>Make payments within agreed timelines</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Limitation of liability
                </h2>
                <p>
                  LodeX Studio will not be liable for any indirect, special,
                  incidental, or consequential damages arising from the use of
                  our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Support and maintenance
                </h2>
                <p>
                  We offer 30 days of free support after project delivery to fix
                  bugs. Content or feature changes are subject to separate
                  quotes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Termination
                </h2>
                <p>
                  Either party may terminate the agreement with 7 days' prior
                  notice. In case of termination, payment is due for work
                  already performed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Governing law
                </h2>
                <p>
                  These terms are governed by Portuguese law. Any dispute will
                  be resolved in the competent courts in Portugal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Contact
                </h2>
                <p>For questions about these Terms of Service:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p>
                    <strong>LodeX Studio</strong>
                  </p>
                  <p>Email: lodexstudio@gmail.com</p>
                  <p>Phone: +351 935 895 551</p>
                  <p>Address: Sacavém, Lisbon, Portugal</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  12. Changes to these terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time.
                  Changes will be communicated via the website and will take
                  effect 30 days after publication.
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
