import React from "react";
import { useTranslation } from "react-i18next";

function I18nTest() {
  const { t, i18n } = useTranslation();

  console.log("i18n current language:", i18n.language);
  console.log("i18n resources:", i18n.options.resources);
  console.log("Translation test:", t("nav.home"));

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "white",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        zIndex: 9999,
        fontSize: "12px",
      }}
    >
      <div>Language: {i18n.language}</div>
      <div>Home: {t("nav.home")}</div>
      <div>About: {t("nav.about")}</div>
      <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}

export default I18nTest;
