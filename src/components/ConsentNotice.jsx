import React, { useState, useEffect } from "react";

const ConsentNotice = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const dataConsent = localStorage.getItem("dataConsent");
    if (!dataConsent) {
      // Show banner after a small delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptData = () => {
    localStorage.setItem("dataConsent", "accepted");
    setShowBanner(false);
  };

  const declineData = () => {
    localStorage.setItem("dataConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🍪 Utilizamos cookies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Este website utiliza cookies para melhorar a sua experiência,
              analisar o tráfego e personalizar conteúdo. Ao continuar a
              navegar, concorda com a nossa utilização de cookies.{" "}
              <a
                href="/cookies"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Saiba mais
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={declineData}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              Recusar
            </button>
            <button
              onClick={acceptData}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentNotice;
