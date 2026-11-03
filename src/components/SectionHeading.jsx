const SectionHeading = ({ id, eyebrow, title, center = false }) => (
  <div id={`${id}-heading-group`} className={`mb-9 ${center ? 'text-center' : ''}`}>
    <p id={`${id}-eyebrow`} className="font-mono text-[12px] uppercase tracking-[2.5px] text-textMuted">
      {eyebrow}
    </p>
    <h2 id={`${id}-heading`} className="mt-2.5 font-display text-[34px] leading-[1.05] tracking-[-0.01em] sm:text-[46px]">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
