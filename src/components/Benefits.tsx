import { TrendingDown, Zap, ShieldCheck, FileCheck2 } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      text: "Menos pérdidas en retail."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Procesos de siniestros más rápidos."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "Mayor control operativo."
    },
    {
      icon: <FileCheck2 className="w-6 h-6" />,
      text: "Evidencia para auditoría."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-wide text-teal uppercase mb-2">Valor Añadido</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Beneficios de automatizar con IA</h3>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Integra tecnología de última generación para optimizar tus procesos, prevenir incidentes y agilizar la respuesta con datos concretos visuales.
            </p>
            
            <a
              href="https://wa.me/51958797691?text=Hola%2C%20me%20interesa%20agendar%20una%20demostraci%C3%B3n%20de%20Pixel%20Civik.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex px-8 py-3 rounded-xl bg-tech-blue border-2 border-tech-blue text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-colors items-center gap-2 group no-underline"
            >
              Agenda tu demostración hoy
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-tech-blue/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-colors duration-300">
                  <div className="text-tech-blue group-hover:text-white group-hover:scale-110 transition-all">
                    {benefit.icon}
                  </div>
                </div>
                <p className="text-lg font-medium text-white">{benefit.text}</p>
              </div>
            ))}
          </div>
          
          <a
            href="https://wa.me/51958797691?text=Hola%2C%20me%20interesa%20agendar%20una%20demostraci%C3%B3n%20de%20Pixel%20Civik.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden w-full px-8 py-4 rounded-xl bg-tech-blue border-2 border-tech-blue text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-colors flex justify-center items-center no-underline"
          >
            Agenda tu demostración hoy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
