import { useTranslation } from "react-i18next";

const ExperienceItem = ({ experience }) => {
  const { t } = useTranslation();

  return (
    <li className="relative pl-16 border-l-2 border-gray-400 pb-12">
      {experience.actual && (
        <div className="bg-[#2a85ee] border rounded-full h-5 w-5 absolute left-[-11px]" />
      )}
      <div className="font-semibold">{t(experience.position)}</div>
      <p className="text-gray-600">{t(experience.company)}</p>
      <p className="text-gray-600">{t(experience.date)}</p>
      <p className="text-gray-600">{t(experience.description1)}</p>
      <p className="text-gray-600">{t(experience.description2)}</p>
      <p className="text-gray-600">{t(experience.description3)}</p>
    </li>
  );
};

export default ExperienceItem;
