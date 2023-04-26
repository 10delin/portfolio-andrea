import HeaderItem from "../HeaderItem/HeaderItem";

const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 p-24">
      <ul className="flex flex-row w-full justify-between">
        <HeaderItem href="/" text="Home" />
        <HeaderItem href="/about" text="About" />
        <HeaderItem href="/experience" text="Experience" />
        <HeaderItem href="/contact" text="Contact" />
      </ul>
    </header>
  );
};

export default Header;
