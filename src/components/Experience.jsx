import { earlierRoles, experiences } from '../constants';
import SectionHeading from './SectionHeading';

const Point = ({ id, point }) => {
  const [pre, bold, post, href] = point;
  const strong = bold && <strong id={`${id}-strong`} className="font-semibold text-textPrimary">{bold}</strong>;
  return (
    <li id={id} className="relative pl-5 text-[15px] leading-relaxed text-[#333] sm:text-[16px]">
      <span id={`${id}-dot`} aria-hidden="true" className="absolute left-0.5 top-[10px] h-1.5 w-1.5 rounded-full bg-textPrimary" />
      {pre}
      {href ? (
        <a
          id={`${id}-link`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[#bbb] underline-offset-[3px] hover:decoration-textPrimary">
          {strong}
        </a>
      ) : (
        strong
      )}
      {post}
    </li>
  );
};

const Ladder = ({ id, steps }) => (
  <ol id={id} aria-label="Promotions" className="mt-2.5 flex flex-wrap items-center gap-1.5 font-mono text-[11.5px] text-textSecondary">
    {steps.map((step, i) => {
      const last = i === steps.length - 1;
      return (
        <li id={`${id}-step-${i}`} key={step} className="flex items-center gap-1.5">
          <span
            id={`${id}-step-${i}-label`}
            className={`rounded-md border px-2 py-0.5 ${last ? 'border-cta bg-cta text-ctaText' : 'border-border bg-surface'}`}>
            {step}
          </span>
          {!last && (
            <span id={`${id}-step-${i}-arrow`} aria-hidden="true" className="text-[#b3aea6]">
              →
            </span>
          )}
        </li>
      );
    })}
  </ol>
);

const Featured = ({ id, items }) => (
  <ul id={id} aria-label="Featured in" className="mt-6 grid gap-3 sm:grid-cols-3">
    {items.map((item) => (
      <li id={`${id}-${item.id}`} key={item.id}>
        <a
          id={`${id}-${item.id}-link`}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col gap-2.5 rounded-2xl border border-border bg-white px-[18px] py-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-cardHover">
          <span id={`${id}-${item.id}-source-mark`} className="flex h-[22px] items-center gap-2">
            {item.wordmark ? (
              <span id={`${id}-${item.id}-wordmark`} className="font-grotesk text-[15px] font-bold tracking-[-0.01em]">
                <span id={`${id}-${item.id}-wordmark-accent`} className="text-[#e4002b]">
                  FIERCE
                </span>{' '}
                Healthcare
              </span>
            ) : (
              <img
                id={`${id}-${item.id}-logo`}
                src={item.logo}
                alt={item.logoAlt}
                loading="lazy"
                decoding="async"
                className={item.label ? 'h-[22px] w-auto' : 'h-[18px] w-auto'}
              />
            )}
            {item.label && (
              <span id={`${id}-${item.id}-label`} className="font-grotesk text-[15px] font-semibold">
                {item.label}
              </span>
            )}
          </span>
          <span id={`${id}-${item.id}-title`} className="text-[13.5px] leading-snug text-[#333]">
            {item.title}
          </span>
          <span id={`${id}-${item.id}-source`} className="mt-auto font-mono text-[11px] text-textMuted">
            {item.source} ↗
          </span>
        </a>
      </li>
    ))}
  </ul>
);

const Experience = () => (
  <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-16 py-16 md:py-24">
    <div id="experience-inner" className="mx-auto max-w-[1040px] px-5 sm:px-12">
      <SectionHeading id="experience" eyebrow="Experience" title="Where I've worked." />

      <ol id="experience-list">
        {experiences.map((job, i) => (
          <li
            id={`job-${job.id}`}
            key={job.id}
            className={`grid gap-3.5 md:grid-cols-[200px_1fr] md:gap-10 ${i === 0 ? '' : 'border-t border-border pt-9'} pb-9`}>
            <div id={`job-${job.id}-meta`} className="flex items-center justify-between md:block">
              <img
                id={`job-${job.id}-logo`}
                src={job.logo}
                alt={job.company}
                loading="lazy"
                decoding="async"
                className={`${job.logoHeight} w-auto max-w-[150px] object-contain`}
              />
              <p id={`job-${job.id}-when`} className="text-right font-mono text-[12px] leading-relaxed text-textMuted md:mt-3.5 md:text-left">
                <time id={`job-${job.id}-dates`} dateTime={job.start}>
                  {job.dates}
                </time>
                <br />
                <span id={`job-${job.id}-location`}>{job.location}</span>
              </p>
            </div>

            <div id={`job-${job.id}-body`}>
              <h3 id={`job-${job.id}-title`} className="text-[20px] font-bold sm:text-[22px]">
                {job.title}
                <span id={`job-${job.id}-company-sr`} className="sr-only">
                  {' '}at {job.company}
                </span>
              </h3>
              {job.ladder && <Ladder id={`job-${job.id}-ladder`} steps={job.ladder} />}
              <ul id={`job-${job.id}-points`} className="mt-4 space-y-2.5">
                {job.points.map((point, p) => (
                  <Point key={p} id={`job-${job.id}-point-${p}`} point={point} />
                ))}
              </ul>
              {job.featured && <Featured id={`job-${job.id}-featured`} items={job.featured} />}
            </div>
          </li>
        ))}
      </ol>

      <div
        id="experience-earlier"
        className="flex flex-col gap-3 rounded-2xl border border-border bg-surface px-6 py-5 text-[14.5px] text-textSecondary md:flex-row md:items-center md:gap-7">
        <h3 id="experience-earlier-heading" className="font-mono text-[11px] font-normal uppercase tracking-[2.5px] text-textMuted">
          Earlier
        </h3>
        <ul id="experience-earlier-list" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-7">
          {earlierRoles.map((role) => (
            <li id={`experience-earlier-${role.id}`} key={role.id}>
              <strong id={`experience-earlier-${role.id}-company`} className="font-semibold text-textPrimary">
                {role.company}
              </strong>{' '}
              · {role.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
