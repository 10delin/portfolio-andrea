import Link from "next/link";

const HeaderItem = ({ href, text }) => {
  return (
    <li className="flex items-center jsutify-center ">
      <Link href={href} className="px-10 py-5 hover:bg-cyan-600 cursor-pointer">
        {text}
      </Link>
    </li>
  );
};

export default HeaderItem;
