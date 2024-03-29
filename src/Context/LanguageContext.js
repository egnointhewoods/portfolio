import { useState, createContext } from "react";

export const LanguageContext = createContext({});

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
