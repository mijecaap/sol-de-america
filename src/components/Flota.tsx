import CardFlota from "./shared/CardFlota";

// assets
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import grua from "../images/grua.png";
import camabaja from "../images/camabaja.png";
import t2s3 from "../images/t2s3.png";
import t3s3 from "../images/t3s3.png";

export const Flota = () => {
  return (
    <section id="flota" className="w-full h-auto bg-[#232526] flex justify-center">
      <div className="max-w-[1200px] py-24 px-12 text-center flex flex-col gap-8 text-white items-center">
        <h2 className="text-4xl font-bold">Nuestros Flota</h2>
        <div className="grid grid-cols-12 grid-rows-12 gap-4 md:h-[800px] sm:h-auto m-sm:h-auto xl:max-w-[70%] lg:max-w-[60%] md:max-w-[80%] sm:max-w-[80%] m-sm:max-w-[100%]">
          <CardFlota
            title="Camión Grúa"
            paragraph="Diferentes dimensiones."
            spanSize="md:col-span-4 md:row-span-6 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
          >
            <img
              className="absolute w-auto xl:h-[220px] lg:h-[200px] md:h-[190px] sm:h-[150px] m-sm:h-[100px] max-w-none max-h-none right-0 bottom-0"
              src={grua}
              alt=""
            />
          </CardFlota>
          <CardFlota
            title="Camión C2"
            paragraph="Presenta una longitud máxima de 12,30m y posee una capacidad de
                peso máximo bruto de 18tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[80px] max-w-none max-h-none left-[60%] bottom-0"
              src={c2}
              alt=""
            />
          </CardFlota>
          <CardFlota
            title="Camión C3"
            paragraph="Presenta una longitud máxima de 13,20m y posee una capacidad de
                    peso máximo bruto de 25tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[80px] max-w-none max-h-none left-[60%] bottom-0"
              src={c3}
              alt=""
            />
          </CardFlota>
          <CardFlota
            title="Camión T2S3"
            paragraph="Presenta una longitud máxima de 20,50m y posee una capacidad de
                        peso máximo bruto de 43tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
            textPosition="flex flex-col items-end"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[80px] max-w-none max-h-none right-[60%] bottom-0"
              src={t2s3}
              alt=""
            />
          </CardFlota>
          <CardFlota
            title="Cama Baja"
            paragraph="Presenta una longitud que varia entre los 11,6 hasta los 15,90
                        metros y con una capacidad que oscila entre las 10 y hasta las 200
                        toneladas."
            spanSize="md:col-span-4 md:row-span-6 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
            textPosition="m-md:flex m-md:flex-col m-md:items-end"
          >
            <img
              className="absolute w-auto xl:h-[220px] lg:h-[200px] md:h-[190px] sm:h-[150px] m-sm:h-[100px] max-w-none max-h-none left-0 bottom-0"
              src={camabaja}
              alt=""
            />
          </CardFlota>
          <CardFlota
            title="Camión T3S3"
            paragraph="Presenta una longitud máxima de 20,50m y posee una capacidad de
                        peso máximo bruto de 48tn."
            spanSize="md:col-span-8 md:row-span-3 sm:col-span-12 sm:row-span-3 m-sm:col-span-12 m-sm:row-span-3"
            textPosition="flex flex-col items-end"
          >
            <img
              className="absolute w-auto xl:h-[180px] lg:h-[160px] md:h-[140px] sm:h-[100px] m-sm:h-[100px] max-w-none max-h-none right-[60%] bottom-0"
              src={t3s3}
              alt=""
            />
          </CardFlota>
        </div>
      </div>
    </section>
  );
};
