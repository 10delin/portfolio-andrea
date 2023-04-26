import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderItem = ({ href, text }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <li className="flex relative items-center justify-center text-center">
      <Link
        href={href}
        className={`px-10 py-5 relative inline-block font-semibold text-base transition-colors duration-300 group overflow-hidden hover:text-[#2a85ee] ${
          isActive ? "text-[#2a85ee]" : "text-[#0f104d]"
        }`}
      >
        <span className="relative z-10">{t(text)}</span>
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 transform origin-left transition-transform duration-300 z-0 ${
            isActive
              ? "scale-x-100 opacity-100"
              : "scale-x-0 opacity-0 hover:scale-x-100 hover:opacity-100"
          }`}
        ></span>
        <span
          className={`absolute top-0 left-0 w-full h-full bg-gray-300 transition-opacity z-10 ${
            isActive ? "opacity-20" : "opacity-0 hover:opacity-20"
          }`}
        ></span>
      </Link>
    </li>
  );
};

export default HeaderItem;
