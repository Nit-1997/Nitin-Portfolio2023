import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.png';
import x from '../assets/icons/x.svg';
import { socials } from '../constants';

const Footer = () => (
  <footer id="site-footer" className="border-t border-border py-7">
    <div
      id="site-footer-inner"
      className="mx-auto flex max-w-[1040px] flex-col items-center justify-between gap-3 px-5 text-[13px] text-textMuted sm:flex-row sm:px-12">
      <p id="site-footer-copy">Nitin Bhat · {new Date().getFullYear()}</p>
      <ul id="site-footer-socials" className="flex items-center gap-5">
        {[
          { id: 'linkedin', href: socials.linkedin, icon: linkedin, label: 'LinkedIn' },
          { id: 'github', href: socials.github, icon: github, label: 'GitHub' },
          { id: 'x', href: socials.x, icon: x, label: 'X' },
        ].map((s) => (
          <li id={`site-footer-social-${s.id}`} key={s.id}>
            <a
              id={`site-footer-social-${s.id}-link`}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="block opacity-55 transition-opacity hover:opacity-100">
              <img id={`site-footer-social-${s.id}-icon`} src={s.icon} alt="" width="18" height="18" className="h-[18px] w-[18px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
