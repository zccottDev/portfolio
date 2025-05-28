import React from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;