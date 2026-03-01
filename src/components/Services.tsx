import { motion } from 'framer-motion';
import { Video, Bell, FileSearch, LayoutDashboard, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const Services = () => {
  const servicesList = [
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: "Detecta",
      desc: "Análisis continuo de streams de video e imágenes usando modelos avanzados de visión computacional para identificar anomalías y riesgos en milisegundos.",
      className: "bg-gradient-to-br from-slate-800/80 to-slate-900 border-white/10",
    },
    {
      icon: <Bell className="w-8 h-8 text-[var(--color-neon-teal)]" />,
      title: "Alerta",
      desc: "Genera notificaciones y alertas operativas en tiempo real directamente a tus sistemas actuales.",
      className: "bg-gradient-to-br from-blue-900/20 to-slate-900 border-blue-500/20",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-indigo-400" />,
      title: "Evidencia",
      desc: "Crea respaldos visuales estructurados y auditables, garantizando trazabilidad total para reclamaciones.",
      className: "bg-gradient-to-br from-indigo-900/20 to-slate-900 border-indigo-500/20",
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-emerald-400" />,
      title: "Consolida",
      desc: "Centraliza eventos, analíticas de riesgo y reportes de desempeño en un único panel de control intuitivo y personalizable.",
      className: "bg-gradient-to-bl from-slate-800/80 to-slate-900 border-white/10",
    }
  ];

  return (
    <section id="capacidades" className="py-32 bg-slate-950 relative overflow-hidden text-left">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-semibold tracking-wide uppercase mb-4 border border-white/5"
          >
            <Sparkles className="w-4 h-4 text-[var(--color-neon-teal)]" />
            Capacidades Core
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Plataforma Integral
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl"
          >
            Todo lo que necesitas para transformar tu infraestructura visual pasiva en un sistema activo de inteligencia corporativa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className={cn(
                "group relative p-10 rounded-[2.5rem] border backdrop-blur-md overflow-hidden transition-colors h-full flex flex-col",
                svc.className
              )}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full items-start">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  {svc.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">{svc.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed mt-auto">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
