import { useTranslation } from "react-i18next";

const ExperienceItem = ({ experience }) => {
  const { t } = useTranslation();

  return (
    <li className="relative pl-16 border-l-2 border-gray-400 pb-12 last:border-0">
      {experience.actual && (
        <div className="bg-[#2a85ee] border rounded-full h-5 w-5 absolute left-[-11px] top-0" />
      )}
      <div className="font-semibold text-xl mb-1">{t(experience.position)}</div>
      <p className="text-gray-500 font-semibold mb-1">
        {t(experience.company)}
      </p>
      <p className="text-black mb-8">{t(experience.date)}</p>
      <div className="flex flex-col justify-evenly gap-3">
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: t(experience.description1) }}
        />
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: t(experience.description2) }}
        />
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: t(experience.description3) }}
        />
      </div>
    </li>
  );
};

export default ExperienceItem;
