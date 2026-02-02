import React, { createContext, useEffect, useMemo, useState } from "react";
import es from "./es.json";
import en from "./en.json";

export const I18nContext = createContext(null);

const DICTS = { es, en };
const DEFAULT_LANG = "en"; // cambiá a "es" si querés español por defecto

function isValidLang(value) {
  return value === "es" || value === "en";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return isValidLang(saved) ? saved : DEFAULT_LANG;
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const dict = DICTS[lang] ?? DICTS[DEFAULT_LANG];

    const t = (path) => {
      if (!path) return "";
      const result = path
        .split(".")
        .reduce(
          (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
          dict,
        );

      // fallback: si falta la key, devuelve el path para que lo veas rápido
      return result !== undefined ? result : path;
    };

    const setLanguage = (nextLang) => {
      if (!isValidLang(nextLang)) return;
      setLang(nextLang);
    };

    return { lang, setLanguage, t };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
