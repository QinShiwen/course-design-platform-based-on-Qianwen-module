"use client";
import React, { createContext, useState, useContext, Context } from "react";

export enum UserLanguageType {
  ENG = "en",
  CN = "cn",
}

type LanguageContextType = {
  language: UserLanguageType;
  setLanguage: (language: UserLanguageType) => void;
};

export const LanguageContext: Context<LanguageContextType> =
  createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [language, setLanguage] = useState(UserLanguageType.ENG);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};
