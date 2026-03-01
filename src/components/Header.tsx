import BrandLogo from './BrandLogo';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-sm transition-all text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Full Brand Logo Composition */}
        <div className="flex-shrink-0">
          <BrandLogo />
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#casos" className="text-sm font-medium text-slate-300 hover:text-[var(--color-neon-teal)] transition-colors">Casos de Uso</a>
          <a href="#capacidades" className="text-sm font-medium text-slate-300 hover:text-[var(--color-neon-teal)] transition-colors">Capacidades</a>
          <a href="#comofunciona" className="text-sm font-medium text-slate-300 hover:text-[var(--color-neon-teal)] transition-colors">Cómo Funciona</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex">
          <a href="#contacto" className="px-4 py-2 rounded-lg bg-blue-600/10 text-blue-400 font-semibold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all text-sm">
            Solicitar Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
