import { EXPERIENCES } from "../../utils/model";

import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";

const ExperiencePage = ({ t }) => {
  return (
    <div id="experience" className="mt-20 mx-10 w-full">
      <div className="flex justify-start items-center rounded-2xl">
        <ul className="mt-8 w-full">
          {EXPERIENCES.map((experience) => (
            <ExperienceItem key={experience.id} t={t} experience={experience} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePage;
