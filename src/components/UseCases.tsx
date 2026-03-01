import { motion } from 'framer-motion';
import { ShieldAlert, CarFront, Scan, MessageCircle, Mail } from 'lucide-react';

const UseCases = () => {
  return (
    <section id="casos" className="py-24 bg-slate-900 border-b border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4 border border-blue-500/20"
          >
            <Scan className="w-4 h-4" />
            Casos de Uso
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Pixel Civik en acción
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Retail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-slate-800 border border-white/10 overflow-hidden cursor-pointer h-[500px]"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 overflow-hidden">

              <motion.img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80"
                alt="Retail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Simulated Bounding Boxes (AI Detection) */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {/* Box 1 (Persona fondo) */}
              <div className="absolute top-[52%] left-[49%] w-[5%] h-[15%] border-[2px] border-[var(--color-neon-teal)] bg-[var(--color-neon-teal)]/10">
                <div className="absolute -top-6 left-[-2px] bg-[var(--color-neon-teal)] text-slate-900 text-xs font-bold px-2 py-1">Persona 98%</div>
              </div>
              {/* Box 2 (Objeto estante der) */}
              <div className="absolute top-[60%] left-[80%] w-[12%] h-[20%] border-[2px] border-blue-400 bg-blue-400/10">
                <div className="absolute -top-6 left-[-2px] bg-blue-400 text-white text-xs font-bold px-2 py-1">Objeto 92%</div>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-neon-teal)]/20 text-[var(--color-neon-teal)] font-medium text-sm backdrop-blur-md mb-4 border border-[var(--color-neon-teal)]/30 w-max">
                <ShieldAlert className="w-4 h-4" />
                Retail / Shoplifting
              </div>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed max-w-sm">
                Detección de conducta sospechosa, alertas en tiempo real y registro automático de eventos.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="https://wa.me/51958797691?text=Hola%2C%20me%20interesa%20Pixel%20Civik%20para%20Retail" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-[var(--color-neon-teal)] font-semibold flex items-center gap-2 border border-white/5 hover:border-[var(--color-neon-teal)]/30 backdrop-blur-md transition-all group/btn text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                </a>
                <a href="mailto:contacto@pixelcivik.com?subject=Consulta%20Retail%20-%20Pixel%20Civik" className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-semibold flex items-center gap-2 border border-white/5 hover:border-white/20 backdrop-blur-md transition-all group/btn text-sm">
                  <Mail className="w-4 h-4" /> Email <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Seguros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl bg-slate-800 border border-white/10 overflow-hidden cursor-pointer h-[500px]"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 overflow-hidden">

              <motion.img
                src="/seguros_auto.jpeg"
                alt="Auto Insurance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ transform: 'scale(1.1)', transformOrigin: '70% 40%' }}
              />
            </div>

            {/* Simulated Bounding Box (AI Detection) */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {/* Siniestro Box */}
              <div className="absolute top-[25%] left-[43%] w-[28%] h-[75%] border-[2px] border-[var(--color-neon-teal)] bg-[var(--color-neon-teal)]/10">
                <div className="absolute -top-6 left-[-2px] bg-[var(--color-neon-teal)] text-slate-900 text-xs font-bold px-2 py-1">Siniestro 98%</div>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 font-semibold text-sm backdrop-blur-md mb-4 border border-blue-500/30 w-max">
                <CarFront className="w-4 h-4" />
                Seguros de Auto
              </div>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed max-w-sm">
                Evaluación automática de daños, clasificación y generación de reportes para acelerar siniestros.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="https://wa.me/51958797691?text=Hola%2C%20me%20interesa%20Pixel%20Civik%20para%20Seguros" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-blue-400 font-semibold flex items-center gap-2 border border-white/5 hover:border-blue-400/30 backdrop-blur-md transition-all group/btn text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                </a>
                <a href="mailto:contacto@pixelcivik.com?subject=Consulta%20Seguros%20-%20Pixel%20Civik" className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-semibold flex items-center gap-2 border border-white/5 hover:border-white/20 backdrop-blur-md transition-all group/btn text-sm">
                  <Mail className="w-4 h-4" /> Email <span className="group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
