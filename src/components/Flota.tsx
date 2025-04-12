import { useScrollAnimation } from "../hooks/useScrollAnimation";
import CardFlota from "./shared/CardFlota";

// assets
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import grua from "../images/grua.png";
import camabaja from "../images/camabaja.png";
import t2s3 from "../images/t2s3.png";
import t3s3 from "../images/t3s3.png";

export const Flota = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="flota" className="w-full h-auto bg-[#232526] flex justify-center overflow-hidden">
      <div className="max-w-[1200px] py-24 px-12 text-center flex flex-col gap-16 text-white items-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Nuestra Flota
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DE7E0B] to-[#ffa640] rounded-full mt-2"></div>
          <p className="md:max-w-[70%] m-md:max-w-full text-lg font-normal text-pretty mx-auto mt-4 text-white/90">
            Contamos con una moderna flota de vehículos equipados con la mejor
            tecnología para garantizar un servicio de transporte seguro y eficiente.
          </p>
        </div>
        
        <div 
          ref={elementRef}
          className={`grid grid-cols-12 grid-rows-12 gap-6 md:h-[800px] sm:h-auto m-sm:h-auto xl:max-w-[70%] lg:max-w-[60%] md:max-w-[80%] sm:max-w-[80%] m-sm:max-w-[100%] fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <CardFlota
            title="Camión Grúa"
            paragraph="Diferentes dimensiones."
            spanSize="md:col-span-4 md:row-span-6 sm:col-span-12 sm:row-span-4 m-sm:col-span-12 m-sm:row-span-4"
          >
            <img
              className="absolute w-auto xl:h-[220px] lg:h-[200px] md:h-[190px] sm:h-[180px] m-sm:h-[150px] max-w-none max-h-none right-0 bottom-0 transform hover:scale-105 transition-transform"
              src={grua}
              alt="Camión Grúa"
              loading="lazy"
            />
          </CardFlota>
          <CardFlota
            title="Camión C2"
            paragraph="Presenta una longitud máxima de 12,30m y posee una capacidad de peso máximo bruto de 18tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[80px] max-w-none max-h-none left-[60%] bottom-0 transform hover:scale-105 transition-transform"
              src={c2}
              alt="Camión C2"
              loading="lazy"
            />
          </CardFlota>
          <CardFlota
            title="Camión C3"
            paragraph="Presenta una longitud máxima de 13,20m y posee una capacidad de peso máximo bruto de 25tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[80px] max-w-none max-h-none left-[60%] bottom-0 transform hover:scale-105 transition-transform"
              src={c3}
              alt="Camión C3"
              loading="lazy"
            />
          </CardFlota>
          <CardFlota
            title="Camión T2S3"
            paragraph="Presenta una longitud máxima de 20,50m y posee una capacidad de peso máximo bruto de 43tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
            textPosition="flex flex-col items-end"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[80px] max-w-none max-h-none right-[60%] bottom-0 transform hover:scale-105 transition-transform"
              src={t2s3}
              alt="Camión T2S3"
              loading="lazy"
            />
          </CardFlota>
          <CardFlota
            title="Cama Baja"
            paragraph="Presenta una longitud que varia entre los 11,6 hasta los 15,90 metros y con una capacidad máxima de 200 toneladas."
            spanSize="md:col-span-4 md:row-span-6 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
            textPosition="m-md:flex m-md:flex-col m-md:items-end"
          >
            <img
              className="absolute w-auto xl:h-[220px] lg:h-[200px] md:h-[190px] sm:h-[150px] m-sm:h-[100px] max-w-none max-h-none left-0 bottom-0 transform hover:scale-105 transition-transform"
              src={camabaja}
              alt="Cama Baja"
              loading="lazy"
            />
          </CardFlota>
          <CardFlota
            title="Camión T3S3"
            paragraph="Presenta una longitud máxima de 20,50m y posee una capacidad de peso máximo bruto de 48tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
            textPosition="flex flex-col items-end"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[100px] max-w-none max-h-none right-[60%] bottom-0 transform hover:scale-105 transition-transform"
              src={t3s3}
              alt="Camión T3S3"
              loading="lazy"
            />
          </CardFlota>
        </div>
      </div>
    </section>
  );
};
