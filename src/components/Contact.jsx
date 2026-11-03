import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.png';
import { EMAIL, socials } from '../constants';

const pill = 'inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold transition-colors';

const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-16 bg-gradient-cta py-16 text-center md:py-24">
    <div id="contact-inner" className="mx-auto max-w-[1040px] px-5 sm:px-12">
      <p id="contact-eyebrow" className="font-mono text-[12px] uppercase tracking-[2.5px] text-textMuted">
        Contact
      </p>
      <h2
        id="contact-heading"
        className="mx-auto mt-4 max-w-[760px] font-display text-[38px] leading-[1.05] tracking-[-0.01em] sm:text-[60px]">
        Building agents for millions of people? Let&apos;s talk.
      </h2>
      <div id="contact-ctas" className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a id="contact-email" href={`mailto:${EMAIL}`} className={`${pill} bg-cta text-ctaText hover:bg-black`}>
          <svg id="contact-email-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]">
            <rect id="contact-email-icon-body" x="3" y="5" width="18" height="14" rx="2" />
            <path id="contact-email-icon-flap" d="m3 7 9 6 9-6" />
          </svg>
          Email me
        </a>
        <a
          id="contact-linkedin"
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pill} border border-[#cfcac3] bg-white hover:bg-white/80`}>
          <img id="contact-linkedin-icon" src={linkedin} alt="" width="18" height="18" className="h-[18px] w-[18px]" />
          LinkedIn
        </a>
        <a
          id="contact-github"
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pill} border border-[#cfcac3] bg-white hover:bg-white/80`}>
          <img id="contact-github-icon" src={github} alt="" width="18" height="18" className="h-[18px] w-[18px]" />
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
