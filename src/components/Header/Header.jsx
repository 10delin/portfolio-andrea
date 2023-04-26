import HeaderItem from "../HeaderItem/HeaderItem";
import { HEADER_ITEMS } from "../../utils/model";

const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 p-24">
      <ul className="flex flex-row w-full justify-between">
        {HEADER_ITEMS.map((item) => (
          <HeaderItem key={item.id} href={item.href} text={item.text} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
