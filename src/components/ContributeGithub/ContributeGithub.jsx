import Image from "next/image";

const ContributeGithub = () => {
  return (
    <div className="flex relative contribute-github ml-30">
      <a
        href="https://github.com/10delin/portfolio-andrea"
        target="_blank"
        rel="noreferrer"
        className="flex items-center no-underline px-4 rounded-md shadow-md text-blue-900 bg-gray-100 border border-gray-300 hover:bg-blue-200"
      >
        <Image
          src="https://img.icons8.com/color/48/000000/github.png"
          alt="github"
          width={50}
          height={50}
        />
      </a>
    </div>
  );
};

export default ContributeGithub;
