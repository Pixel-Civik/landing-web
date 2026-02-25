import utecLogo from '../assets/utec_ventures.png';
import startupLogo from '../assets/startup_peru.png';
import techceleratorLogo from '../assets/techcelerator.png';

const SocialProof = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-neutral-gray tracking-wider uppercase mb-10">
          Confían en nosotros
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          <img 
            src={utecLogo} 
            alt="UTEC Ventures" 
            className="h-12 md:h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
          <img 
            src={startupLogo} 
            alt="Startup Perú" 
            className="h-12 md:h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
          <img 
            src={techceleratorLogo} 
            alt="Techcelerator" 
            className="h-12 md:h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

