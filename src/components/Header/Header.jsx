import HeaderItem from "../HeaderItem/HeaderItem";
import { HEADER_ITEMS } from "../../utils/model";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 py-12 px-24">
      <ChangeLanguage />
      <ul className="flex flex-row w-full justify-between">
        {HEADER_ITEMS.map((item) => (
          <HeaderItem key={item.id} href={item.href} text={item.text} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
