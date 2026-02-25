import BrandLogo from './BrandLogo';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2 flex justify-start items-center">
        {/* Full Brand Logo Composition */}
        <BrandLogo />
      </div>
    </header>
  );
};

export default Header;
