"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import SpainIcon from "../../assets/images/spain.webp";
import UkIcon from "../../assets/images/united-kingdom.webp";
import Image from "next/image";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const classLanguageSpanish =
    language === "es"
      ? "flex relative items-center no-underline py-2 px-4 w-full cursor-pointer bg-blue-200"
      : "flex relative items-center no-underline py-2 px-4 w-full cursor-pointer hover:bg-blue-300";

  const classLanguageEngish =
    language === "en"
      ? "flex relative items-center no-underline py-2 px-4 w-full cursor-pointer bg-blue-200"
      : "flex relative items-center no-underline py-2 px-4 w-full cursor-pointer hover:bg-blue-300";

  return (
    <div className="flex relative border border-solid border-[#afafaf] rounded max-w-[120px] mb-10">
      <div className={classLanguageSpanish} onClick={() => setLanguage("es")}>
        <Image width={40} src={SpainIcon} alt="Spanish" />
      </div>
      <div className={classLanguageEngish} onClick={() => setLanguage("en")}>
        <Image width={40} src={UkIcon} alt="English" />
      </div>
    </div>
  );
};

export default ChangeLanguage;
