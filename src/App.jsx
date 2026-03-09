import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div id="app-root" className="relative z-0 bg-primary">
        <div id="app-hero-section">
          <Navbar />
          <Hero />
        </div>

        <div id="app-about-section">
          <About />
        </div>

        <div id="app-tech-section" className="bg-gradient-soft">
          <Tech />
        </div>

        <div id="app-projects-section">
          <Projects />
        </div>

        <div id="app-experience-section" className="bg-gradient-soft">
          <Experience />
        </div>

        <div id="app-contact-section" className="bg-gradient-cta relative z-0">
          <Contact />
        </div>

        <footer id="app-footer" className="py-10 bg-primary border-t border-border">
          <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-textMuted text-[13px] font-sans">
              Nitin Bhat &middot; {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/nit-1997/" target="_blank" rel="noreferrer"
                className="text-textMuted text-[13px] font-sans hover:text-textPrimary transition-colors">LinkedIn</a>
              <a href="https://github.com/Nit-1997" target="_blank" rel="noreferrer"
                className="text-textMuted text-[13px] font-sans hover:text-textPrimary transition-colors">GitHub</a>
              <a href="https://x.com/ntnbhat" target="_blank" rel="noreferrer"
                className="text-textMuted text-[13px] font-sans hover:text-textPrimary transition-colors">X</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
