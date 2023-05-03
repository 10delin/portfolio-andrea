import { useTranslation } from "react-i18next";
import Image from "next/image";
import { iconSocial } from "../../utils/model";
import { iconContact } from "../../utils/model";
import UnderFooter from "../UnderFooter/UnderFooter";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-[#363636] text-white py-4 px-4 sm:py-2 sm:px-6 md:py-4 md:px-8 lg:py-4 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 ">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold mb-2">{t("footer.title")}</p>
          <p>{t("footer.subtitle")}</p>
          <p className="mt-3">
            <a
              href="https://github.com/10delin/portfolio"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline hover:bg-text-title-secondary hover:text-white font-medium"
            ></a>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold mb-2">{t("footer.contact")}</p>
          <div className="flex flex-col items-center md:items-start gap-3">
            {iconContact.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center mr-6 mb-2 md:mb-0"
                >
                  <Image
                    src={icon.icon}
                    title={icon.title}
                    alt={icon.alt}
                    className="w-1/4 mr-2"
                    width={50}
                    height={50}
                  />
                  {icon.title}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xl font-bold mb-2">{t("footer.follow")}</p>
          <div className="flex flex-col items-center md:items-start gap-3">
            {iconSocial.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center mr-6 mb-2 md:mb-0"
                >
                  <Image
                    src={icon.icon}
                    title={icon.title}
                    alt={icon.alt}
                    className="w-1/4 mr-2"
                    width={50}
                    height={50}
                  />
                  {icon.title}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
      <UnderFooter />
    </>
  );
};

export default Footer;
