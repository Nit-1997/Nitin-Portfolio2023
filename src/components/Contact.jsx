import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn, fadeIn } from '../utils/motion';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      id="contact-toast"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        px-6 py-4 rounded-2xl shadow-glass flex items-center gap-3
        ${type === 'success'
          ? 'bg-white border border-[#C8E6C9]'
          : 'bg-white border border-[#FFCDD2]'
        }`}>
      <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        type === 'success' ? 'bg-[#E8F5E9]' : 'bg-[#FFEBEE]'
      }`}>
        {type === 'success' ? (
          <svg className="w-4 h-4 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-[#C62828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </span>
      <p className="text-textPrimary text-[14px] font-sans font-medium">{message}</p>
      <button onClick={onClose} className="ml-2 text-textMuted hover:text-textPrimary transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_sbhy90f',
        'template_a2j9bs8',
        {
          from_name: form.name,
          to_name: 'Nitin Bhat',
          from_email: form.email,
          to_email: 'ntnbhat9@gmail.com',
          message: form.message,
        },
        'x5GoSKikfwhPFeRpy'
      )
      .then(
        () => {
          setLoading(false);
          setToast({ message: 'Message sent! I\'ll get back to you soon.', type: 'success' });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
        }
      );
  };

  return (
    <div id="contact-container">
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <div id="contact-content" className="flex flex-col lg:flex-row gap-8">
        <motion.div
          id="contact-form-wrapper"
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-1 surface-card p-8 md:p-10">
          <p id="contact-subtitle" className={styles.sectionSubText}>Get in touch</p>
          <h3 id="contact-title" className={`${styles.sectionHeadText} mt-3`}>
            Contact<span className="italic">.</span>
          </h3>

          <form
            id="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6 font-sans">
            <label id="contact-name-label" className="flex flex-col">
              <span className="text-textPrimary font-medium mb-3 text-[14px]">Your Name</span>
              <input
                id="contact-name-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-primary py-4 px-6 placeholder:text-textFaint
                text-textPrimary rounded-xl outline-none
                border border-border focus:border-textMuted
                font-medium transition-colors text-[15px]"
              />
            </label>
            <label id="contact-email-label" className="flex flex-col">
              <span className="text-textPrimary font-medium mb-3 text-[14px]">Your Email</span>
              <input
                id="contact-email-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-primary py-4 px-6 placeholder:text-textFaint
                text-textPrimary rounded-xl outline-none
                border border-border focus:border-textMuted
                font-medium transition-colors text-[15px]"
              />
            </label>
            <label id="contact-message-label" className="flex flex-col">
              <span className="text-textPrimary font-medium mb-3 text-[14px]">Your Message</span>
              <textarea
                id="contact-message-input"
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-primary py-4 px-6 placeholder:text-textFaint
                text-textPrimary rounded-xl outline-none
                border border-border focus:border-textMuted
                font-medium transition-colors resize-none text-[15px]"
              />
            </label>

            <button
              id="contact-submit-btn"
              type="submit"
              className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-cta text-ctaText
              font-sans font-semibold text-[15px] w-fit
              hover:bg-textSecondary transition-colors">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div
          id="contact-info-wrapper"
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="lg:w-[380px] flex flex-col gap-6">
          <div id="contact-info-card" className="surface-card p-8">
            <h4 id="contact-connect-title" className="text-textPrimary text-[18px] font-sans font-semibold mb-6">
              Let's Connect
            </h4>
            <div id="contact-links" className="space-y-4">
              <a
                id="contact-email-link"
                href="mailto:ntnbhat9@gmail.com"
                className="flex items-center gap-3 text-textSecondary hover:text-textPrimary transition-colors font-sans text-[15px]">
                <span className="w-10 h-10 rounded-xl bg-surfaceAccent border border-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-textMuted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                ntnbhat9@gmail.com
              </a>
              <a
                id="contact-linkedin-link"
                href="https://www.linkedin.com/in/nit-1997/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-textPrimary transition-colors font-sans text-[15px]">
                <span className="w-10 h-10 rounded-xl bg-surfaceAccent border border-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-textMuted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                LinkedIn
              </a>
              <a
                id="contact-github-link"
                href="https://github.com/Nit-1997"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-textPrimary transition-colors font-sans text-[15px]">
                <span className="w-10 h-10 rounded-xl bg-surfaceAccent border border-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-textMuted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                GitHub
              </a>
              <a
                id="contact-twitter-link"
                href="https://x.com/ntnbhat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-textSecondary hover:text-textPrimary transition-colors font-sans text-[15px]">
                <span className="w-10 h-10 rounded-xl bg-surfaceAccent border border-border flex items-center justify-center">
                  <svg className="w-4 h-4 text-textMuted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </span>
                @ntnbhat
              </a>
            </div>
          </div>
          <div id="contact-location-card" className="surface-card p-8">
            <p id="contact-location-label" className="text-textMuted text-[13px] font-mono uppercase tracking-[2px]">Based in</p>
            <p id="contact-city" className="text-textPrimary text-[20px] font-display mt-2">Sunnyvale, California</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
