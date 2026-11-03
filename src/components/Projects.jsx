import github from '../assets/icons/github.svg';
import { projects } from '../constants';
import SectionHeading from './SectionHeading';

const Projects = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    className="scroll-mt-16 border-y border-border bg-surface py-16 md:py-24">
    <div id="projects-inner" className="mx-auto max-w-[1040px] px-5 sm:px-12">
      <SectionHeading id="projects" eyebrow="Projects" title="Things I built on my own." />

      <ul id="projects-list" className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li id={`project-${project.id}`} key={project.id}>
            <article
              id={`project-${project.id}-card`}
              className="flex h-full flex-col rounded-[20px] border border-border bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-cardHover sm:p-7">
              <p
                id={`project-${project.id}-tag`}
                className={`self-start rounded-md px-2 py-1 font-mono text-[10.5px] uppercase tracking-[1px] ${
                  project.sold ? 'bg-[#e5f3e7] text-[#2f6b3a]' : 'bg-[#eceefa] text-[#3b4aa8]'
                }`}>
                {project.tag}
              </p>
              <h3 id={`project-${project.id}-name`} className="mt-3.5 font-display text-[26px] leading-tight sm:text-[30px]">
                {project.name}
              </h3>
              <p id={`project-${project.id}-description`} className="mt-2 flex-1 text-[15px] leading-relaxed text-textSecondary">
                {project.description}
              </p>
              <div id={`project-${project.id}-footer`} className="mt-5 flex items-center justify-between gap-4">
                <p id={`project-${project.id}-stack`} className="font-mono text-[11.5px] text-textMuted">
                  {project.stack}
                </p>
                <a
                  id={`project-${project.id}-link`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name}: ${project.cta}`}
                  className="flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-textPrimary hover:underline">
                  <img id={`project-${project.id}-link-icon`} src={github} alt="" width="16" height="16" className="h-4 w-4" />
                  {project.cta}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
