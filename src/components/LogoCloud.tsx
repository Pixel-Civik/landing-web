
import utecLogo from '../assets/utec_ventures.png';
import startupLogo from '../assets/startup_peru.png';
import freshmartLogo from '../assets/freshmart.png';

const logos = [
  { name: 'UTEC Ventures', src: utecLogo },
  { name: 'Startup Perú', src: startupLogo },
  { name: 'Freshmart', src: freshmartLogo },
];

const LogoCloud = () => {
  return (
    <section className="py-16 bg-slate-900 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-12 uppercase tracking-widest">
          Confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className={`object-contain opacity-80 hover:opacity-100 hover:drop-shadow-md transition-all duration-300 h-16 md:h-24 lg:h-32`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
