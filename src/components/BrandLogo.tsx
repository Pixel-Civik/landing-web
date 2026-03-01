const BrandLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/pixel_civik_2.png"
        alt="Pixel Civik Logo"
        className="h-10 md:h-12 lg:h-14 w-auto object-contain"
      />
    </div>
  );
};

export default BrandLogo;
