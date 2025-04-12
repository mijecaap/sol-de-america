import BackgroundImage from "../images/background.jpg";

export const Banner = () => {
  return (
    <section id="inicio" className="w-full h-[80vh] min-h-[600px] relative flex justify-center">
      <img
        className="w-full h-full absolute object-cover lg:object-center md:object-left sm:object-left m-sm:object-left -z-10"
        src={BackgroundImage}
        alt=""
      />
      <div className="w-full max-w-[1200px] h-full flex md:px-12 m-md:px-6">
        <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] m-sm:w-full h-full flex flex-col justify-center py-16 gap-4">
          <h2 className="text-base text-[#DE7E0B] font-semibold">
            Conectando su negocio con el mundo
          </h2>
          <h1 className="text-4xl text-white font-bold">
            Transporte de carga confiable y eficiente
          </h1>
          <p className="text-sm text-white font-normal">
            Empresa con 19 años de experiencia y su Gerente General con 37 años
            de experiencia en el mercado, brindando el Servicio de TRANSPORTE DE
            CARGA POR CARRETERA A NIVEL NACIONAL.
          </p>
          <div className="flex flex-wrap grid-rows-2 gap-3 text-white font-normal">
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center">
              <i className="fa-solid fa-location-dot text-xl mr-2 text-[#DE7E0B]" />
              Obreros 571, La Victoria
            </div>
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center">
              <i className="fa-solid fa-phone text-xl mr-2 text-[#DE7E0B]" />
              996 137 913
            </div>
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center">
              <i className="fa-solid fa-at text-xl mr-2 text-[#DE7E0B]" />
              transp_soldeamerica@yahoo.es
            </div>
            <div className="border-[1px] border-[#DE7E0B] px-3 py-2 rounded-2xl text-center">
              <i className="fa-solid fa-phone text-xl mr-2 text-[#DE7E0B]" />
              998 195 717
            </div>
          </div>
          <div>
            <button className="bg-[#DE7E0B] rounded-xl py-3 px-8 text-white font-semibold text-base">
              Cotizar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
