import { education } from '../constants';
import SectionHeading from './SectionHeading';

const Education = () => (
  <section id="education" aria-labelledby="education-heading" className="scroll-mt-16 py-16 md:py-24">
    <div id="education-inner" className="mx-auto max-w-[1040px] px-5 sm:px-12">
      <SectionHeading id="education" eyebrow="Education" title="Strong fundamentals." />

      <ul id="education-list" className="grid gap-4 md:grid-cols-3">
        {education.map((item) => (
          <li id={`education-${item.id}`} key={item.id} className="rounded-[20px] border border-border bg-white p-6">
            <img
              id={`education-${item.id}-logo`}
              src={item.logo}
              alt={item.logoAlt}
              loading="lazy"
              decoding="async"
              className="h-10 w-auto"
            />
            <p id={`education-${item.id}-score`} className="mt-4 font-display text-[46px] leading-none">
              {item.score}
              <span id={`education-${item.id}-out-of`} className="ml-1 text-[20px] text-textMuted">
                {item.outOf}
              </span>
            </p>
            <h3 id={`education-${item.id}-title`} className="mt-2.5 text-[16px] font-semibold">
              {item.title}
            </h3>
            <p id={`education-${item.id}-detail`} className="mt-1 text-[14px] leading-normal text-textSecondary">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Education;
