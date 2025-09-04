import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function DataProtection() {
  return (
    <>
      <Helmet>
        <title>Data Protection | LodeX Studio</title>
        <meta
          name="description"
          content="How LodeX Studio protects your personal data: collection, use, sharing, security, and your rights."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Data Protection
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Last updated:</strong> 30 August 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Information we collect
                </h2>
                <p>We collect information you provide directly when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Interact with our website</li>
                </ul>
                <p>
                  This may include: name, email address, phone number, message,
                  and any other information you choose to share with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. How we use your information
                </h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and requests</li>
                  <li>Provide our services</li>
                  <li>Send newsletters (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Sharing information
                </h2>
                <p>
                  We do not sell, rent, or share your personal information with
                  third parties, except when:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Necessary to provide our services</li>
                  <li>Required by law</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Cookies and similar technologies
                </h2>
                <p>
                  We use cookies and similar technologies to improve your
                  experience on our website. Cookies are small files stored on
                  your device that help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyse website traffic</li>
                  <li>Personalise content</li>
                  <li>Improve site functionality</li>
                </ul>
                <p>
                  For more details, see our{" "}
                  <a href="/legal/cookies">Cookie Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Data security
                </h2>
                <p>
                  We implement appropriate security measures to protect your
                  personal information against unauthorised access, alteration,
                  disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Your rights
                </h2>
                <p>Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Rectify inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Data retention
                </h2>
                <p>
                  We keep your personal information only for as long as
                  necessary to fulfil the purposes described in this policy,
                  unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Contact
                </h2>
                <p>
                  If you have questions about this policy or how we handle your
                  data:
                </p>
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
                  9. Changes to this policy
                </h2>
                <p>
                  We may update this Data Protection page periodically. Material
                  changes will be posted here with an updated date.
                </p>
              </section>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default DataProtection;
