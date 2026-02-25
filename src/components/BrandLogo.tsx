const BrandLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/pixel_civik_1.png" 
        alt="Pixel Civik Logo" 
        className="h-16 md:h-20 w-auto object-contain" 
      />
    </div>
  );
};

export default BrandLogo;
