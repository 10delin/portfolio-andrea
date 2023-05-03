import HeaderItem from "../HeaderItem/HeaderItem";
import { HEADER_ITEMS } from "../../utils/model";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import ContributeGithub from "../ContributeGithub/ContributeGithub";

const Header = () => {
  return (
    <header className="flex flex-row fixed justify-between w-full left-0 top-0 pt-5 px-24 z-10 shadow-md bg-white">
      <ChangeLanguage />
      <ul className="flex flex-row w-full justify-center">
        {HEADER_ITEMS.map((item) => (
          <HeaderItem key={item.id} href={item.href} text={item.text} />
        ))}
      </ul>
      <ContributeGithub />
    </header>
  );
};

export default Header;
