const TitleArea = ({ title }) => {
  return (
    <div className="flex items-center text-xl font-semibold mb-12">
      <p className="w-96 font-bold text-2xl">{title}</p>
      <div className="hidden md:flex w-full h-1 bg-gray-300 ml-8"></div>
    </div>
  );
};

export default TitleArea;
