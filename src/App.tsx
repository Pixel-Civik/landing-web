import Header from './components/Header';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import UseCases from './components/UseCases';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-neon-teal/30 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <LogoCloud />
        <UseCases />
        <Services />
        <HowItWorks />
        <Benefits />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
