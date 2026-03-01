
import utecLogo from '../assets/utec_ventures.png';
import startupLogo from '../assets/startup_peru.png';
import freshmartLogo from '../assets/freshmart.png';

const logos = [
  { name: 'UTEC Ventures', src: utecLogo },
  { name: 'Startup Perú', src: startupLogo },
  { name: 'Freshmart', src: freshmartLogo },
];

const LogoCloud = () => {
  // Triplicamos el contenido para tener suficiente longitud en el marquee
  const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-slate-900 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-12 uppercase tracking-widest">
          Confían en nosotros
        </p>

        {/* Contenedor del Carrusel con máscara en los bordes */}
        <div className="relative flex overflow-hidden group mask-image-linear">

          <div className="flex gap-16 md:gap-24 animate-marquee min-w-max hover:[animation-play-state:paused] items-center justify-center pr-16 md:pr-24">
            {extendedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 h-10 md:h-16 lg:h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
