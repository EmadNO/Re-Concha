
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Technology from './components/Technology';
import Applications from './components/Applications';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Team />
          <Technology />
          <Applications />
          <Impact />
          <Contact />
        </main>
        <Footer />
        <GeminiAssistant />
      </div>
    </LanguageProvider>
  );
};

export default App;
