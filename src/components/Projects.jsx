import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ id, name, description, tags, metric, metricSub, type, repo, demo, press, index }) => {
  return (
    <motion.div
      id={id}
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="project-card p-8 flex flex-col h-full">

      <div id={`${id}-header`} className="flex items-start justify-between mb-5">
        <span
          id={`${id}-type-badge`}
          className={`text-[11px] font-mono font-medium uppercase tracking-[2px]
          px-3 py-1.5 rounded-full ${
            type === 'enterprise'
              ? 'bg-surfaceAccent text-textMuted border border-border'
              : 'bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]'
          }`}>
          {type === 'enterprise' ? 'Enterprise' : 'Open Source'}
        </span>
        <div id={`${id}-links`} className="flex gap-2">
          {repo && (
            <div
              id={`${id}-github-link`}
              onClick={() => window.open(repo, '_blank')}
              className="w-9 h-9 rounded-full bg-surfaceAccent border border-border
                flex justify-center items-center cursor-pointer
                hover:bg-border transition-colors">
              <img src={github} alt="source code" className="w-4 h-4 object-contain" />
            </div>
          )}
          {demo && (
            <div
              id={`${id}-demo-link`}
              onClick={() => window.open(demo, '_blank')}
              className="h-9 px-4 rounded-full bg-cta
                flex justify-center items-center cursor-pointer
                hover:bg-textSecondary transition-colors">
              <span className="text-ctaText text-[12px] font-sans font-medium">Live Demo</span>
            </div>
          )}
        </div>
      </div>

      <div id={`${id}-metric-container`} className="mb-5">
        <span id={`${id}-metric`} className="text-[44px] font-display text-textPrimary leading-none tracking-tight">
          {metric}
        </span>
        <p id={`${id}-metric-sub`} className="text-textMuted text-[13px] font-sans mt-1.5">{metricSub}</p>
      </div>

      <h3 id={`${id}-name`} className="text-textPrimary text-[20px] font-sans font-semibold mb-3">
        {name}
      </h3>
      <p id={`${id}-description`} className="text-textSecondary text-[14px] leading-[22px] font-sans flex-1">
        {description}
      </p>

      <div id={`${id}-tags`} className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            id={`${id}-tag-${tag.name}`}
            className="text-[12px] font-mono font-medium text-textMuted
            bg-surfaceAccent px-3 py-1.5 rounded-lg border border-border">
            {tag.name}
          </span>
        ))}
      </div>

      {press && press.length > 0 && (
        <div id={`${id}-press`} className="mt-4 pt-4 border-t border-border">
          <p className="text-[11px] font-mono text-textMuted uppercase tracking-[2px] mb-2.5">Press Coverage</p>
          <div className="flex flex-wrap gap-2">
            {press.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-sans font-medium text-textSecondary
                bg-surfaceAccent px-3 py-1.5 rounded-lg border border-border
                hover:text-textPrimary hover:border-textFaint transition-colors inline-flex items-center gap-1">
                {item.label}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div id="projects-container">
      <motion.div variants={textVariant()}>
        <p id="projects-subtitle" className={styles.sectionSubText}>What I've Built</p>
        <h2 id="projects-title" className={`${styles.sectionHeadText} mt-3`}>
          Projects<span className="italic">.</span>
        </h2>
      </motion.div>

      <motion.p
        id="projects-description"
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-6 text-textSecondary text-[16px] max-w-3xl leading-[26px] font-sans">
        From enterprise AI systems processing billions of records to open-source developer tools —
        these projects showcase my work across the full spectrum of software engineering.
      </motion.p>

      <div id="projects-grid" className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
