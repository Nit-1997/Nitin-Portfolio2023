import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <div id="tech-container">
      <motion.div variants={textVariant()}>
        <p id="tech-subtitle" className={styles.sectionSubText}>My toolkit</p>
        <h2 id="tech-title" className={`${styles.sectionHeadText} mt-3`}>
          Technologies<span className="italic">.</span>
        </h2>
      </motion.div>

      <div id="tech-categories" className="mt-14 flex flex-col gap-10">
        {Object.entries(technologies).map(([category, techs], catIndex) => (
          <motion.div
            key={category}
            id={`tech-category-${catIndex}`}
            variants={fadeIn('up', 'spring', 0.1 * catIndex, 0.6)}>
            <h3
              id={`tech-category-title-${catIndex}`}
              className="text-textMuted text-[12px] font-mono font-medium uppercase tracking-[3px] mb-4">
              {category}
            </h3>
            <div id={`tech-category-tags-${catIndex}`} className="flex flex-wrap gap-3">
              {techs.map((tech, techIndex) => (
                <div
                  key={tech.name}
                  id={`tech-tag-${catIndex}-${techIndex}`}
                  className="tech-tag rounded-xl px-4 py-2.5 flex items-center gap-2.5 cursor-default">
                  {tech.icon && (
                    <img
                      id={`tech-icon-${catIndex}-${techIndex}`}
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span
                    id={`tech-name-${catIndex}-${techIndex}`}
                    className="text-textPrimary text-[14px] font-sans font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
