import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, description }) => {
  return (
    <motion.div
      id={`service-card-${index}`}
      variants={fadeIn('up', 'spring', 0.2 * index, 0.75)}
      className="flex-1 min-w-[280px] max-w-[380px]">
      <div
        id={`service-card-inner-${index}`}
        className="surface-card p-8 h-full">
        <div
          id={`service-card-number-${index}`}
          className="w-10 h-10 rounded-full bg-surfaceAccent flex items-center justify-center mb-5">
          <span className="font-mono text-[13px] text-textMuted font-medium">
            0{index + 1}
          </span>
        </div>
        <h3 id={`service-title-${index}`} className="text-textPrimary text-[20px] font-sans font-semibold mb-3">
          {title}
        </h3>
        <p id={`service-desc-${index}`} className="text-textSecondary text-[15px] leading-[24px] font-sans">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about-container">
      <motion.div variants={textVariant()}>
        <p id="about-subtitle" className={styles.sectionSubText}>Introduction</p>
        <h2 id="about-title" className={`${styles.sectionHeadText} mt-3`}>
          Overview<span className="italic">.</span>
        </h2>
      </motion.div>

      <motion.p
        id="about-description"
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-8 text-textSecondary text-[17px] max-w-3xl leading-[28px] font-sans">
        Senior AI Engineer and Tech Lead at CVS Health, leading the conversational AI Agent platform
        and Unified Records Platform serving 23M Americans across 1B+ health records. Previously at
        Cisco building Webex's data search platform serving 30M+ users. Certified Kubernetes
        Administrator (CKA — 97/100). MS in Computer Science from Northeastern University (3.9 GPA).
        Judge at SF Hacks 2026.
      </motion.p>

      <div id="about-services-grid" className="mt-16 flex flex-wrap gap-6 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
