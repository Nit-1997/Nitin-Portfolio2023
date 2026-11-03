import photo640 from '../assets/nitin-640.webp';
import photo320 from '../assets/nitin-320.webp';
import { links } from '../constants';

const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-heroOverlay text-white">
    <div id="hero-glow" aria-hidden="true" className="pointer-events-none absolute inset-0 bg-hero-glow" />

    <div
      id="hero-inner"
      className="relative mx-auto flex max-w-[1040px] flex-col-reverse items-start gap-7 px-5 pb-24 pt-28 sm:px-12 md:flex-row md:items-center md:gap-14 md:pb-32 md:pt-40">
      <div id="hero-copy" className="flex-1">
        <p
          id="hero-badge"
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-[12px] text-white/75">
          <span id="hero-badge-dot" aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[#7bd389] shadow-[0_0_10px_#7bd389]" />
          Staff AI Engineer at Shipt
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-up [animation-delay:80ms] mt-5 font-display text-[42px] leading-[1.04] tracking-[-0.02em] sm:text-[56px] lg:text-[72px]">
          I build AI agents people trust with{' '}
          <em id="hero-heading-accent" className="text-accentSoft">
            their health and their groceries.
          </em>
        </h1>

        <p
          id="hero-lede"
          className="animate-fade-up [animation-delay:160ms] mt-5 max-w-[520px] text-[15px] leading-relaxed text-white/65 sm:text-[18px]">
          I take agents from demo to millions of users. Now leading agentic commerce at Shipt. Before that, I launched{' '}
          <a
            id="hero-lede-health100"
            href={links.health100}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
            Health100
          </a>
          , CVS Health&apos;s AI platform for 25M+ Americans, featured in Forbes.
        </p>

        <div id="hero-ctas" className="animate-fade-up [animation-delay:240ms] mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            id="hero-cta-work"
            href="#experience"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-textPrimary transition-colors hover:bg-white/90">
            See my work
          </a>
          <a
            id="hero-cta-contact"
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
            Get in touch
          </a>
        </div>
      </div>

      <figure
        id="hero-photo"
        className="animate-fade-up w-[120px] shrink-0 rounded-[20px] border border-white/10 bg-white/5 p-1.5 shadow-glassDark sm:w-[160px] md:w-[300px] md:rounded-[26px] md:p-3 lg:w-[320px]">
        <img
          id="hero-photo-img"
          src={photo640}
          srcSet={`${photo320} 320w, ${photo640} 640w`}
          sizes="(min-width: 1025px) 320px, (min-width: 768px) 300px, 160px"
          width="640"
          height="800"
          alt="Portrait of Nitin Bhat"
          className="block aspect-[4/5] w-full rounded-[15px] object-cover md:rounded-[18px]"
        />
      </figure>
    </div>

    <div
      id="hero-notch"
      aria-hidden="true"
      className="absolute bottom-0 left-1/2 h-[26px] w-[200px] -translate-x-1/2 rounded-t-[26px] bg-primary md:h-10 md:w-[400px] md:rounded-t-[32px]"
    />
  </section>
);

export default Hero;
