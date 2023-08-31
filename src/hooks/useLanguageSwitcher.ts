import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageOption {
  value: string;
  label: string;
}

const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>(i18n.language);

  const languageOptions: LanguageOption[] = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "ua", label: "Українська" },
  ];

  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return { currentLang, changeLanguage, languageOptions };
};

export default useLanguageSwitcher;
