import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: t("language.english"), flag: "🇺🇸" },
    { code: "fr", name: t("language.french"), flag: "🇫🇷" },
    { code: "es", name: t("language.spanish"), flag: "🇪🇸" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    localStorage.setItem("i18nextLng", code);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 active:scale-95 transition-all duration-200 border border-white/20 cursor-pointer group"
        aria-label={t("language.changeLanguage")}
      >
        <Globe className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-sm font-medium">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
      </button>

      <div
        className={`absolute top-full right-0 mt-2 transition-all duration-200 transform origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 min-w-[180px]">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {t("language.selectLanguage")}
          </div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center justify-between w-full px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                currentLanguage.code === language.code
                  ? "bg-primary-50 text-primary-600"
                  : "text-gray-700 hover:bg-gray-50 active:scale-95"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              {currentLanguage.code === language.code && (
                <Check className="w-4 h-4 text-primary-600 animate-bounce" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
