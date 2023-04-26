import Link from "next/link";
import { useTranslation } from "react-i18next";

const HeaderItem = ({ href, text }) => {
  const { t } = useTranslation();

  return (
    <li className="flex items-center justify-center border border-solid border-black">
      <Link href={href} className="px-10 py-5 hover:bg-[#22a5f1] font-medium">
        {t(text)}
      </Link>
    </li>
  );
};

export default HeaderItem;
