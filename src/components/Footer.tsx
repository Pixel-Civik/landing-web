import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    industria: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', empresa: '', email: '', industria: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-6 relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] mix-blend-screen opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-neon-teal)]/5 rounded-full blur-[140px] mix-blend-screen opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-center">

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6 border border-white/10 w-max backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Empieza ahora
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              Acelera tu operación<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-neon-teal)]">con Inteligencia Visual</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md font-light leading-relaxed">
              Estamos listos para transformar la seguridad y eficiencia de tu negocio. Agenda una demostración técnica hoy mismo.
            </p>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-slate-800 group-hover:border-[var(--color-neon-teal)]/50 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(20,241,217,0.2)]">
                  <MessageCircle className="w-6 h-6 text-[var(--color-neon-teal)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">WhatsApp Directo</h4>
                  <span className="text-sm text-slate-400 font-light">Respuesta prioritaria en minutos</span>
                </div>
              </a>

              <a href="mailto:contacto@pixelcivik.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-slate-800 group-hover:border-blue-400/50 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Correo Electrónico</h4>
                  <span className="text-sm text-slate-400 font-light">contacto@pixelcivik.com</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side - Glowing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-[var(--color-neon-teal)] rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4 min-h-[400px]">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-[var(--color-neon-teal)]/10 text-[var(--color-neon-teal)] border border-[var(--color-neon-teal)]/30 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(20,241,217,0.2)]"
                  >
                    <Send className="w-10 h-10 ml-1" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">¡Solicitud recibida!</h3>
                  <p className="text-slate-400 text-lg">Un especialista se pondrá en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Nombre completo</label>
                      <input
                        required
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 shadow-inner"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Empresa</label>
                      <input
                        required
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 shadow-inner"
                        placeholder="Nombre de empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Correo electrónico corporativo</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600 shadow-inner"
                      placeholder="correo@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="industria" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Industria principal</label>
                    <select
                      required
                      id="industria"
                      name="industria"
                      value={formData.industria}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none [&>option]:text-slate-900 shadow-inner"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Retail">Retail</option>
                      <option value="Seguros">Seguros</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-8 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex justify-center items-center gap-3 group border border-blue-400/20 hover:border-blue-400/50"
                  >
                    <span>Solicitar Demo</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <div id="contacto" className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center">
            <img src="/pixel_civik_2.png" alt="Pixel Civik Logo" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-medium text-slate-400">
            <a href="#casos" className="hover:text-white transition-colors">Casos de Uso</a>
            <a href="#capacidades" className="hover:text-white transition-colors">Capacidades</a>
            <a href="#comofunciona" className="hover:text-white transition-colors">Cómo Funciona</a>
          </div>
          <p>© {new Date().getFullYear()} Pixel Civik. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
