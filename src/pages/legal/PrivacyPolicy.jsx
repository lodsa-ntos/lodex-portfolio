import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | LodeX Studio</title>
        <meta
          name="description"
          content="Learn how LodeX Studio collects, uses, and protects your personal data."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Last updated:</strong> 30 August 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p>
                  We respect your privacy and are committed to protecting your
                  personal data. This policy explains how we collect, use,
                  disclose, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Data we collect
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact data (name, email, phone)</li>
                  <li>Technical data (IP address, browser type)</li>
                  <li>Usage data (pages visited, interactions)</li>
                  <li>Data you provide via forms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. How we use your data
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to inquiries and deliver services</li>
                  <li>Improve the website and user experience</li>
                  <li>Send marketing communications where permitted</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Legal bases for processing
                </h2>
                <p>
                  Depending on the activity, processing may be based on your
                  consent, performance of a contract, legitimate interests, or
                  compliance with a legal obligation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Sharing your data
                </h2>
                <p>
                  We may share data with service providers who help us operate
                  the website, analyse traffic, or provide functionality (e.g.,
                  hosting, analytics, chat).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Data retention
                </h2>
                <p>
                  We retain personal data only for as long as necessary to
                  fulfil the purposes for which it was collected, unless a
                  longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Your rights
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, correct, or delete your data</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Object to processing or request restriction</li>
                  <li>Data portability where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Cookies and similar technologies
                </h2>
                <p>
                  We use cookies to enhance your experience. See our
                  <a href="/legal/cookies">Cookie Policy</a> to learn more.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. International transfers
                </h2>
                <p>
                  Your data may be transferred and processed outside your
                  country of residence. We take appropriate measures to protect
                  data as required by applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Security
                </h2>
                <p>
                  We implement appropriate technical and organisational measures
                  to protect your data against unauthorised access, alteration,
                  disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Contact
                </h2>
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
                  12. Updates to this policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Please
                  review this page regularly.
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
