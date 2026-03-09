import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    id={`experience-${experience.company_name.replace(/\s/g, '-').toLowerCase()}`}
    contentStyle={{
      background: '#F2F0ED',
      color: '#111111',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
      border: '1px solid #E5E3DF',
      borderRadius: '1.125rem',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #E5E3DF',
    }}
    date={
      <div id={`exp-date-${experience.company_name.replace(/\s/g, '-').toLowerCase()}`}>
        <h3 className="text-textMuted text-[14px] font-sans font-medium">
          {experience.date}
        </h3>
        {experience.location && (
          <p className="text-textFaint text-[13px] font-sans mt-1">{experience.location}</p>
        )}
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon ? (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        ) : (
          <span className="text-white font-sans font-bold text-[11px]">
            {experience.iconText || experience.company_name.charAt(0)}
          </span>
        )}
      </div>
    }>
    <div>
      <h3 id={`exp-title-${experience.company_name.replace(/\s/g, '-').toLowerCase()}`}
        className="text-textPrimary text-[20px] font-sans font-semibold">
        {experience.title}
      </h3>
      <p id={`exp-company-${experience.company_name.replace(/\s/g, '-').toLowerCase()}`}
        className="text-textSecondary text-[15px] font-sans font-medium mt-1"
        style={{ margin: 0, marginTop: '4px' }}>
        {experience.company_name}
      </p>
      {experience.subtitle && (
        <p id={`exp-subtitle-${experience.company_name.replace(/\s/g, '-').toLowerCase()}`}
          className="text-textMuted text-[13px] font-mono mt-2">
          {experience.subtitle}
        </p>
      )}
      {experience.points && (
        <ul id={`exp-points-${experience.company_name.replace(/\s/g, '-').toLowerCase()}`}
          className="mt-5 space-y-3">
          {experience.points.map((point, i) => (
            <li key={i} className="text-textSecondary text-[14px] font-sans leading-[22px] pl-4 relative
              before:content-[''] before:absolute before:left-0 before:top-[9px]
              before:w-1.5 before:h-1.5 before:rounded-full before:bg-border">
              {point}
            </li>
          ))}
        </ul>
      )}
      {experience.links && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer"
              className="text-[12px] font-mono font-medium text-textMuted
              bg-surfaceAccent px-3 py-1.5 rounded-lg border border-border
              hover:text-textPrimary hover:border-textFaint transition-colors">
              {link.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div id="experience-container">
      <motion.div variants={textVariant()}>
        <p id="experience-subtitle" className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Career Journey
        </p>
        <h2 id="experience-title" className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem] mt-3`}>
          Experience<span className="italic">.</span>
        </h2>
      </motion.div>

      <div id="experience-timeline" className="mt-16 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <div id="experience-education" className="mt-16 max-w-3xl mx-auto">
        <div className="surface-card p-8">
          <div id="education-badges" className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[2px]
              px-3 py-1.5 rounded-full bg-surfaceAccent text-textMuted border border-border">
              Education
            </span>
            <span className="text-[11px] font-mono font-medium uppercase tracking-[2px]
              px-3 py-1.5 rounded-full bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2]">
              CKA Certified — 97/100
            </span>
          </div>
          <h3 id="education-title" className="text-textPrimary text-[22px] font-display">
            Master of Computer Science
          </h3>
          <p id="education-school" className="text-textSecondary text-[15px] font-sans mt-2">
            Northeastern University, Boston — GPA: 3.905/4.0
          </p>
          <p id="education-date" className="text-textMuted text-[13px] font-mono mt-1">
            Graduated May 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
