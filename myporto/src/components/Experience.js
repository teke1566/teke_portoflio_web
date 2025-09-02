import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useContent } from "../content/ContentContext";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#4682B436", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg || "#1f2937",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 0 3px rgba(255,255,255,0.35) inset",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon ? (
          <img
            src={experience.icon}
            alt={experience.company_name || experience.title}
            className="w-[70%] h-[70%] object-contain"
          />
        ) : (
          <span className="text-white text-sm font-semibold">
            {(experience.company_name || experience.title || "•").replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {(experience.points || []).map((pt, i) => (
        <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">{pt}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { content } = useContent();
  const experiences = Array.isArray(content?.experience) ? content.experience : [];

  return (
    <section id="experience">
      <motion.div variants={textVariant()}>
        <h6 className="h2 text-accent text-center" style={{ color: "#3498db" }}>
          Education and Work Experience.
        </h6>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, idx) => (
            <ExperienceCard key={`experience-${idx}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience);
