import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, BrainCircuit, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: <Camera className="w-8 h-8 text-[var(--color-neon-teal)]" />,
      title: "Conexión",
      desc: "Conectamos con tus cámaras existentes o recibimos feeds de imágenes en tiempo real. Configuración sin fricción en minutos, no requiere hardware adicional.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
      title: "Procesamiento IA",
      desc: "Nuestros modelos de visión computacional, entrenados con millones de parámetros, analizan cada frame para detectar anomalías, objetos o conductas.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: "Alertas & Analítica",
      desc: "Recibe alertas críticas instantáneas en tus dispositivos, junto con paneles de analítica forense y tendencias operativas a largo plazo.",
    }
  ];

  return (
    <section id="comofunciona" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-neon-teal)] uppercase mb-3">
            Simplicidad Técnica
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cómo funciona
          </h3>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Tres pasos esenciales para transformar infraestructura visual pasiva en inteligencia activa.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">

          {/* Background Line */}
          <div className="absolute left-[38px] md:left-1/2 md:-ml-[2px] top-[40px] bottom-[40px] w-1 bg-white/5 z-0"></div>

          {/* Animated Scroll Line */}
          <motion.div
            className="absolute left-[38px] md:left-1/2 md:-ml-[2px] top-[40px] w-1 bg-gradient-to-b from-[var(--color-neon-teal)] via-blue-500 to-indigo-500 z-10 origin-top"
            style={{ height: lineHeight, maxHeight: 'calc(100% - 80px)' }}
          ></motion.div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0; // reverse for visual flair on desktop
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content */}
                  <div className={`flex-1 w-full md:w-1/2 md:text-left pl-24 md:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-colors shadow-2xl relative`}
                    >
                      <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-3 md:flex-row">
                        <span className="text-[var(--color-neon-teal)] font-mono text-sm opacity-50">0{idx + 1}</span>
                        {step.title}
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node (Icon) */}
                  <div className="absolute left-0 md:relative md:w-20 md:flex flex-col flex-none items-center justify-center shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center relative z-20 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1 w-1/2"></div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
