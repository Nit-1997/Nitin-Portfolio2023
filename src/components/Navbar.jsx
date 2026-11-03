import { useEffect, useState } from 'react';
import { navLinks, RESUME_URL } from '../constants';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const light = scrolled || open;

  return (
    <header
      id="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open ? 'bg-primary border-b border-border' : scrolled ? 'bg-primary/85 backdrop-blur-xl border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}>
      <div id="site-header-inner" className="mx-auto flex h-16 sm:h-[72px] max-w-[1040px] items-center justify-between px-5 sm:px-12">
        <a
          id="site-logo"
          href="#top"
          className={`text-[17px] font-bold tracking-tight transition-colors ${light ? 'text-textPrimary' : 'text-white'}`}
          onClick={() => setOpen(false)}>
          Nitin Bhat
        </a>

        <nav id="site-nav-desktop" aria-label="Primary" className="hidden md:block">
          <ul id="site-nav-desktop-list" className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li id={`site-nav-desktop-item-${link.id}`} key={link.id}>
                <a
                  id={`site-nav-desktop-link-${link.id}`}
                  href={`#${link.id}`}
                  className={`text-[14px] font-medium transition-colors ${
                    light ? 'text-textSecondary hover:text-textPrimary' : 'text-white/70 hover:text-white'
                  }`}>
                  {link.title}
                </a>
              </li>
            ))}
            <li id="site-nav-desktop-item-resume">
              <a
                id="site-nav-desktop-link-resume"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-10 items-center rounded-full px-5 text-[13px] font-semibold transition-colors ${
                  light ? 'bg-cta text-ctaText hover:bg-black' : 'bg-white text-textPrimary hover:bg-white/90'
                }`}>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          id="site-nav-toggle"
          type="button"
          className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav-mobile"
          onClick={() => setOpen((v) => !v)}>
          <span id="site-nav-toggle-icon" className={`relative block h-3.5 w-[22px] ${light ? 'text-textPrimary' : 'text-white'}`}>
            <span
              id="site-nav-toggle-bar-top"
              className={`absolute left-0 h-0.5 w-full bg-current transition-transform ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              id="site-nav-toggle-bar-mid"
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              id="site-nav-toggle-bar-bottom"
              className={`absolute left-0 h-0.5 w-full bg-current transition-transform ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </span>
        </button>
      </div>

      <nav
        id="site-nav-mobile"
        aria-label="Mobile"
        className={`md:hidden overflow-hidden border-t border-border bg-primary transition-[max-height] duration-300 ${
          open ? 'max-h-[420px]' : 'max-h-0 border-transparent'
        }`}>
        <ul id="site-nav-mobile-list" className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <li id={`site-nav-mobile-item-${link.id}`} key={link.id}>
              <a
                id={`site-nav-mobile-link-${link.id}`}
                href={`#${link.id}`}
                className="block py-3 font-display text-[28px] text-textPrimary"
                onClick={() => setOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
          <li id="site-nav-mobile-item-resume" className="pt-3">
            <a
              id="site-nav-mobile-link-resume"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full bg-cta text-[15px] font-semibold text-ctaText">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
