import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  const handleClick = () => {
    const contactForm = document.getElementById('contacto');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Extraer solo el tipo de carga del título para el botón
  const buttonText = title.replace('Transporte de ', '');

  return (
    <div className="xl:col-span-6 sm:col-span-6 m-sm:col-span-12 group">
      <div className="h-full p-8 flex flex-col gap-8 rounded-2xl border-2 border-white/20 backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white/15 hover:shadow-lg relative overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex items-start gap-6">
          <div className="size-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#DE7E0B]/30 backdrop-blur-sm border border-[#DE7E0B]/40 group-hover:bg-[#DE7E0B]/40 transition-all duration-300">
            <i className={`${icon} text-2xl text-[#DE7E0B] group-hover:text-[#ffa640] transition-colors duration-300`} aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-3 text-pretty">
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              {title}
            </h3>
            
            <p className="text-base md:text-lg font-normal leading-relaxed text-white/90">
              {description}
            </p>
          </div>
        </div>

        <ul className="list-none space-y-2 z-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-white/80">
              <i className="fa-solid fa-check text-[#DE7E0B] text-sm" aria-hidden="true" />
              <span className="text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 z-10">
          <button 
            onClick={handleClick}
            className="w-full bg-[#DE7E0B] rounded-xl py-4 px-6 text-base md:text-lg font-semibold hover:bg-[#c26c0a] transition-all duration-300 transform hover:scale-105 active:scale-95 group/button shadow-lg"
          >
            Cotizar {buttonText}
            <i className="fa-solid fa-arrow-right ml-2 group-hover/button:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          <p className="text-xs text-center text-white/60 italic">
            <i className="fa-regular fa-clock mr-1" aria-hidden="true" />
            Respuesta garantizada en menos de 24 horas
          </p>
        </div>
      </div>
    </div>
  );
};

export const Servicios = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const services: ServiceCardProps[] = [
    {
      title: "Transporte de Carga General",
      description: "Servicio general para cualquier tipo de mercancía, desde productos manufacturados hasta productos frescos, con una flota de vehículos de carga de última generación, equipados con los mejores sistemas de seguridad y rastreo.",
      icon: "fa-solid fa-truck",
      features: [
        "Flota moderna con sistemas GPS",
        "Monitoreo en tiempo real",
        "Para todo tipo de mercancías"
      ]
    },
    {
      title: "Transporte de Carga Especializada",
      description: "Servicio para el transporte de cargas especiales, como maquinaría pesada, equipos industriales, y materiales peligrosos, junto con un equipo de profesionales altamente capacitados.",
      icon: "fa-solid fa-truck-ramp-box",
      features: [
        "Personal certificado",
        "Manejo de cargas especiales",
        "Materiales peligrosos"
      ]
    },
    {
      title: "Transporte de Carga de Gran Tonelaje",
      description: "Servicio para el transporte de cargas de gran tonelaje para aquellos clientes que necesitan movilizar grandes volúmenes de mercancía, con una flota de vehículos de gran capacidad.",
      icon: "fa-solid fa-weight-hanging",
      features: [
        "Capacidad de carga de hasta 48 toneladas",
        "Camiones T3S3"
      ]
    },
    {
      title: "Transporte de Carga Urgente",
      description: "Servicio centrado en el transporte urgente de mercancías, de manera rápida y eficiente, con una flota de vehículos de carga modernos para garantizar un transporte rápido y seguro.",
      icon: "fa-solid fa-truck-fast",
      features: [
        "Servicio express 24/7",
        "Tiempos de respuesta optimizados"
      ]
    }
  ];

  return (
    <section id="servicios" className="w-full h-auto bg-[#232526] flex justify-center">
      <div 
        ref={elementRef}
        className={`max-w-[1200px] py-24 md:px-12 m-md:px-6 text-center flex flex-col gap-16 text-white items-center fade-in-section ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DE7E0B] to-[#ffa640] rounded-full mt-2"></div>
          <p className="md:max-w-[70%] m-md:max-w-full text-lg font-normal text-pretty mx-auto mt-4 text-white/90">
            Nuestra empresa ofrece una amplia variedad de servicios de transporte
            de carga terrestre para satisfacer las necesidades específicas de 
            cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
