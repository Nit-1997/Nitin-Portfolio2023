import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar-main"
      className={`${styles.paddingX} w-full flex items-center py-4 fixed
      top-0 z-20 transition-all duration-500 ${
        scrolled
          ? 'bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-glass'
          : 'bg-white/[0.08] backdrop-blur-xl border-b border-white/[0.12]'
      }`}>
      <div className="w-full flex justify-between items-center max-w-[1100px] mx-auto">
        <Link
          id="navbar-logo-link"
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <span
            id="navbar-logo-text"
            className={`text-[22px] font-display italic tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-textPrimary' : 'text-white'
            }`}>
            Nitin Bhat
          </span>
        </Link>

        <ul id="navbar-desktop-links" className="list-none hidden sm:flex flex-row gap-10 mt-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              id={`nav-link-${nav.id}`}
              className={`${
                active === nav.title
                  ? scrolled ? 'text-textPrimary' : 'text-white'
                  : scrolled ? 'text-textMuted' : 'text-white/60'
              } ${scrolled ? 'hover:text-textPrimary' : 'hover:text-white'}
              text-[14px] font-sans font-medium tracking-[1px] cursor-pointer
              transition-colors duration-300 nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div id="navbar-mobile-container" className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              id="navbar-mobile-menu"
              className="p-6 bg-primary absolute
                top-0 left-0 w-screen h-[100vh] z-10">
              <div className="flex justify-end">
                <img
                  id="navbar-close-btn"
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                id="navbar-mobile-links"
                className="list-none flex flex-col gap-8
                items-center justify-center mt-[25vh]">
                {navLinks.map((nav) => (
                  <li
                    id={`mobile-nav-${nav.id}`}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-textPrimary' : 'text-textMuted'
                    } text-[32px] font-display
                      tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              id="navbar-menu-btn"
              src={menu}
              alt="menu"
              className={`w-[26px] h-[26px] object-contain cursor-pointer transition-all duration-500 ${
                scrolled ? '' : 'invert'
              }`}
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
