import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Scan } from 'lucide-react';

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

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Animated Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[var(--color-neon-teal)]/10 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"></div>

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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[var(--color-neon-teal)] text-sm font-semibold tracking-wide uppercase mb-6 border border-white/10 backdrop-blur-md"
          >
            <Scan className="w-4 h-4" />
            <span>El Futuro del Análisis Visual</span>
          </motion.p>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
          >
            Inteligencia visual <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-neon-teal)]">aplicada al riesgo</span>
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
            <a href="https://wa.me/51958797691?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20Pixel%20Civik" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
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
          <div className="absolute inset-x-8 inset-y-8 rounded-full border border-white/5 bg-slate-800/30 backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl">
            
            {/* Inner abstract geometric shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-screen"></div>
            
            {/* The scanning line */}
            <motion.div 
              className="absolute left-0 right-0 h-1 bg-[var(--color-neon-teal)] shadow-[0_0_20px_#14F1D9,0_0_40px_#14F1D9] z-20"
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Focus points representing AI detection */}
            <div className="relative w-64 h-64 border border-white/20 border-dashed rounded-lg flex items-center justify-center bg-slate-900/40 z-10 backdrop-blur-sm">
               <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-neon-teal)]"></div>
               <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-neon-teal)]"></div>
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-neon-teal)]"></div>
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-neon-teal)]"></div>
               
               {/* Animated inner elements */}
               <motion.div
                 className="absolute inset-4 rounded flex items-center justify-center"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               >
                 <Scan className="w-24 h-24 text-blue-400/30" />
               </motion.div>
               <motion.div
                 className="absolute inset-0 flex items-center justify-center"
                 animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="w-16 h-16 rounded-full bg-blue-500/20 blur-xl"></div>
               </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
