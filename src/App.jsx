import { Contact, Education, Experience, Footer, Hero, Navbar, Projects, Proof } from './components';

const App = () => (
  <>
    <a
      id="skip-to-content"
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cta focus:px-5 focus:py-3 focus:text-ctaText">
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="bg-primary">
      <Hero />
      <Proof />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
