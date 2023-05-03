import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import translation_en from "../locales/en-GB/translation.json";
import translation_es from "../locales/es-ES/translation.json";
import Footer from "@/components/Footer/Footer";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
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
      <div className="flex min-h-screen flex-col items-center justify-between px-24 py-24">
        <Component {...pageProps} />
      </div>
      <Footer />
    </I18nextProvider>
  );
}
