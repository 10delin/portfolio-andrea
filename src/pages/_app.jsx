import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import translation_en from "../locales/en-GB/translation.json";
import translation_es from "../locales/es-ES/translation.json";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      translation: translation_en,
    },
    es: {
      translation: translation_es,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
