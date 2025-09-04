import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../utils/GlobalContainer";

function WebsiteTerms() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | LodeX Studio</title>
        <meta
          name="description"
          content="LodeX Studio Cookie Policy. How we use cookies and similar technologies on our website."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-36 pb-24 min-h-screen">
        <GlobalContainer>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Cookie Policy
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Last updated:</strong> 30 August 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. What are cookies?
                </h2>
                <p>
                  Cookies are small text files stored on your device when you
                  visit a website. They are widely used to make websites work
                  more efficiently and to provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. How we use cookies
                </h2>
                <p>
                  We use cookies to improve your experience on our website and
                  to understand how you interact with our content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Types of cookies we use
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      3.1 Strictly necessary cookies
                    </h3>
                    <p>
                      Essential for the operation of the website. They enable
                      you to navigate the site and use its features.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <p>
                        <strong>Examples:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Session cookies for forms</li>
                        <li>Security cookies</li>
                        <li>Language preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      3.2 Performance cookies
                    </h3>
                    <p>
                      These collect information about how you use our website,
                      such as pages visited most often.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <p>
                        <strong>Examples:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Google Analytics</li>
                        <li>Page load timing</li>
                        <li>Error pages</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      3.3 Functional cookies
                    </h3>
                    <p>
                      Allow the website to remember choices you make and provide
                      enhanced, personalised features.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-3">
                      <p>
                        <strong>Examples:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>User preferences</li>
                        <li>Personalised content</li>
                        <li>Chat widgets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Third‑party cookies
                </h2>
                <p>
                  Some cookies are set by third‑party services that appear on
                  our pages:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Google Analytics
                      </h4>
                      <p className="text-sm text-gray-600">
                        Traffic and behaviour analysis
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        WhatsApp widget
                      </h4>
                      <p className="text-sm text-gray-600">
                        Direct chat functionality
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Vercel</h4>
                      <p className="text-sm text-gray-600">
                        Hosting and performance
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Managing cookies
                </h2>
                <p>
                  You can control and/or delete cookies as you wish. You can
                  delete all cookies already on your computer and set most
                  browsers to prevent them from being placed.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> If you choose to delete or disable
                    cookies, some features of our website may not function
                    properly.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    How to manage cookies in your browser:
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>Chrome:</strong> Settings → Privacy & security →
                      Cookies
                    </li>
                    <li>
                      <strong>Firefox:</strong> Preferences → Privacy & Security
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferences → Privacy
                    </li>
                    <li>
                      <strong>Edge:</strong> Settings → Privacy, search and
                      services
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Cookie consent
                </h2>
                <p>
                  By continuing to use our website, you agree to the use of
                  cookies as described in this policy. If you do not agree,
                  adjust your browser settings or stop using the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Updates to this policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time. Please
                  review this page regularly to stay informed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Contact
                </h2>
                <p>If you have questions about our use of cookies:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p>
                    <strong>LodeX Studio</strong>
                  </p>
                  <p>Email: lodexstudio@gmail.com</p>
                  <p>Phone: +351 935 895 551</p>
                  <p>Address: Sacavém, Lisbon, Portugal</p>
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
