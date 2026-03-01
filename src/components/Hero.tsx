import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Scan } from 'lucide-react';
import { useState, useEffect } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

// ==========================================
// AÑADE TUS IMÁGENES AQUÍ:
// ==========================================
// Puedes colocar rutas locales o imports (ej: import img1 from '../assets/img1.jpg')
// Borra las URLs de Unsplash proporcionadas como ejemplo.
const scanImages = [
  "/hero-1.png",
  "/hero-2.png",
  "/hero-3.png",
  "/hero-4.png"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % scanImages.length);
    }, 4000); // Sincronizado cada 4s (duración de la animación de escaneo)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Animated Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[var(--color-neon-teal)]/10 rounded-full blur-[140px] mix-blend-screen opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content Area */}
        <motion.div
          className="text-left flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm md:text-base font-bold tracking-wide uppercase mb-6 border border-blue-500/20 backdrop-blur-md"
          >
            <Scan className="w-4 h-4" />
            <span>El Futuro del Análisis Visual</span>
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
          >
            Inteligencia visual <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-neon-teal)]">aplicada al riesgo</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl md:text-2xl text-slate-300 max-w-2xl font-light mb-10 leading-relaxed"
          >
            Convertimos cámaras e imágenes en alertas, evidencia y analítica para retail y seguros.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <a href="https://wa.me/51958797691?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20Pixel%20Civik" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 border border-green-500/20 hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Contactar por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="mailto:contacto@pixelcivik.com?subject=Consulta%20sobre%20Pixel%20Civik" className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-semibold backdrop-blur-md transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Escribir por Email
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </motion.div>

        {/* Abstract Floating Visual Element with Scanning Animation */}
        <motion.div
          className="relative w-full h-[400px] lg:h-[500px] hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {/* Contenedor Circular Principal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-white/5 bg-slate-800/30 backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl">

            {/* Imagen en el Círculo Completo (B/N a Color) */}
            <motion.div
              key={currentImageIndex} // Reiniciar ciclo en cada cambio de imagen
              className="absolute inset-0 z-0"
              initial={{ filter: "grayscale(100%)", opacity: 0 }}
              animate={{ filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(0%)"], opacity: 1 }}
              transition={{ duration: 4, times: [0, 0.5, 1], ease: "linear" }}
            >
              {scanImages[currentImageIndex] ? (
                <img
                  src={scanImages[currentImageIndex]}
                  alt="Scanner target placeholder"
                  className="w-full h-full object-cover opacity-60"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 opacity-60"></div>
              )}
            </motion.div>

            {/* Inner abstract geometric shapes (Superpuestas) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-screen z-10 pointer-events-none"></div>

            {/* The scanning line recorriendo TODO el círculo */}
            <motion.div
              key={`line-${currentImageIndex}`}
              className="absolute left-0 right-0 h-1 bg-[var(--color-neon-teal)] shadow-[0_0_20px_#14F1D9,0_0_40px_#14F1D9] z-20 pointer-events-none"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />

            {/* Focus points representing AI detection (Cuadrado central decorativo estático) */}
            <div className="relative w-64 h-64 border border-white/20 border-dashed rounded-lg flex items-center justify-center bg-slate-900/10 z-30 pointer-events-none backdrop-blur-none">

              {/* Recuadros de las esquinas */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-neon-teal)]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-neon-teal)]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-neon-teal)]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-neon-teal)]"></div>

              {/* Animated inner elements */}
              <motion.div
                className="absolute inset-4 rounded flex items-center justify-center z-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <Scan className="w-24 h-24 text-[var(--color-neon-teal)]/30" />
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
