import React, { useContext } from "react";
import "./anguageSwitcher.css";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="lang-toggle">
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        className={lang === "jp" ? "active" : ""}
        onClick={() => setLang("jp")}
      >
        日本語
      </button>
    </div>
  );
};

export default LanguageSwitcher;
