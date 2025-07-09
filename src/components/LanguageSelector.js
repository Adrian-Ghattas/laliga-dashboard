import React from "react";

export default function LanguageSelector({ language, setLanguage, translations }) {
  return (
    <div>
      <label htmlFor="language-select">{translations.language}:</label>{" "}
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        aria-label={translations.language}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
