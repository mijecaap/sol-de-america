import BackgroundImage from "../images/background.jpg";

export const Banner = () => {
  const handleCotizarClick = () => {
    const contactForm = document.getElementById('contacto');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="w-full h-[80vh] min-h-[600px] relative flex justify-center">
      <img
        className="w-full h-full absolute object-cover lg:object-center md:object-left sm:object-left m-sm:object-left -z-10"
        src={BackgroundImage}
        alt="Banner de transporte de carga"
        fetchpriority="high"
        decoding="async"
      />
      <div className="w-full max-w-[1200px] h-full flex md:px-12 m-md:px-6">
        <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] m-sm:w-full h-full flex flex-col justify-center py-16 gap-4 animate-fade-in">
          <h2 className="text-base text-[#DE7E0B] font-semibold">
            Conectando su negocio con el mundo
          </h2>
          <h1 className="text-5xl md:text-6xl text-white font-bold leading-tight">
            Transporte de carga confiable y eficiente
          </h1>
          <p className="text-base md:text-lg text-white font-normal max-w-2xl">
            Empresa con 19 años de experiencia y su Gerente General con 37 años
            de experiencia en el mercado, brindando el Servicio de TRANSPORTE DE
            CARGA POR CARRETERA A NIVEL NACIONAL.
          </p>
          <div className="flex flex-wrap grid-rows-2 gap-3 text-white font-normal">
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center backdrop-blur-sm bg-black/20">
              <i className="fa-solid fa-location-dot text-xl mr-2 text-[#DE7E0B]" aria-hidden="true" />
              <span>Obreros 571, La Victoria</span>
            </div>
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center backdrop-blur-sm bg-black/20">
              <i className="fa-solid fa-phone text-xl mr-2 text-[#DE7E0B]" aria-hidden="true" />
              <span>996 137 913</span>
            </div>
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center backdrop-blur-sm bg-black/20">
              <i className="fa-solid fa-at text-xl mr-2 text-[#DE7E0B]" aria-hidden="true" />
              <span>transp_soldeamerica@yahoo.es</span>
            </div>
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center backdrop-blur-sm bg-black/20">
              <i className="fa-solid fa-phone text-xl mr-2 text-[#DE7E0B]" aria-hidden="true" />
              <span>998 195 717</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button 
              onClick={handleCotizarClick}
              className="bg-[#DE7E0B] rounded-xl py-3 px-8 text-white font-semibold text-base hover:bg-[#c26c0a] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Cotizar Ahora
            </button>
            <a 
              href="#servicios"
              className="border-2 border-white/30 backdrop-blur-sm bg-black/20 rounded-xl py-3 px-8 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
