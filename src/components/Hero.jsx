import { styles } from '../styles';
import { nitin } from '../assets';

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen mx-auto bg-heroOverlay overflow-hidden flex items-center">

      <div id="hero-gradient-overlay" className="absolute inset-0 bg-gradient-hero" />

      <div
        id="hero-content"
        className={`relative ${styles.paddingX}
        max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full
        pt-[120px] pb-[100px]`}>

        <div id="hero-text-container" className="flex-1 z-10 text-center md:text-left">
          <p
            id="hero-label"
            className="animate-hero-fade-up-1 font-mono text-[13px] text-white/50 uppercase tracking-[3px] mb-6">
            Senior AI Engineer &middot; Tech Lead
          </p>

          <h1
            id="hero-heading"
            className={`animate-hero-fade-up-2 ${styles.heroHeadText}`}>
            Building AI systems{' '}
            <span className="italic">that matter</span>
          </h1>

          <p
            id="hero-description"
            className={`animate-hero-fade-up-3 ${styles.heroSubText} mt-6 max-w-xl md:max-w-lg`}>
            Tech lead for CVS Health's conversational AI Agent platform.
            Building systems over billions of health records, intelligent
            agents, and infrastructure that powers healthcare for 23M Americans.
          </p>

          <div
            id="hero-cta-container"
            className="animate-hero-fade-up-4 mt-10 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              id="hero-cta-work"
              href="#projects"
              className="h-12 md:h-14 px-8 md:px-10 inline-flex items-center justify-center
              bg-white text-textPrimary rounded-full font-sans font-semibold text-[15px] md:text-[16px]
              hover:bg-white/90 transition-all duration-200">
              View My Work
            </a>
            <a
              id="hero-cta-contact"
              href="#contact"
              className="h-12 md:h-14 px-8 md:px-10 inline-flex items-center justify-center
              border border-white/25 text-white rounded-full font-sans font-medium text-[15px] md:text-[16px]
              hover:bg-white/10 transition-all duration-200">
              Get In Touch
            </a>
          </div>
        </div>

        <div
          id="hero-image-container"
          className="animate-hero-fade-up-3 hidden md:flex flex-shrink-0 relative">
          <div className="glass-card-dark p-3">
            <img
              id="hero-image"
              src={nitin}
              alt="Nitin Bhat"
              className="w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div
        id="hero-scroll-notch"
        className="absolute bottom-0 left-1/2 -translate-x-1/2
        w-[320px] md:w-[400px] h-10 bg-primary rounded-t-[2rem] scroll-notch" />
    </section>
  );
};

export default Hero;
