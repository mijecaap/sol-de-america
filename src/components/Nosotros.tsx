import { useScrollAnimation } from "../hooks/useScrollAnimation";
import coelvisac from "../images/marcas/coelvisac.jpeg";
import delcrosa from "../images/marcas/delcrosa.jpeg";
import metalindustrias from "../images/marcas/metalindustrias.jpeg";
import promelsa from "../images/marcas/promelsa.jpeg";
import sanmiguel from "../images/marcas/sanmiguel.jpeg";
import xylem from "../images/marcas/xylem.jpeg";

export const Nosotros = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="nosotros" className="bg-[url(/src/images/background-2.png)] bg-no-repeat bg-cover bg-center flex justify-center min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      <div className="max-w-[1200px] py-16 md:px-12 m-md:px-6 flex justify-end relative z-10">
        <div 
          ref={elementRef}
          className={`xl:max-w-[55%] lg:max-w-[70%] p-10 flex flex-col rounded-3xl gap-6 text-white text-pretty backdrop-blur-sm fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-left pb-6 leading-tight bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Nuestra experiencia en el transporte de carga terrestre
          </h1>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-3">
                Trayectoria y Confianza
              </h3>
              <p className="text-base md:text-lg font-normal leading-relaxed">
                Con más de 19 años de experiencia en el sector del transporte de
                carga terrestre, nos hemos consolidado como líderes en el
                mercado, sirviendo desde pequeñas empresas hasta grandes
                corporaciones.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-3">
                Nuestra Prioridad: Seguridad
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                <li>Conductores altamente capacitados y certificados</li>
                <li>Sistemas avanzados de seguridad y rastreo en tiempo real</li>
                <li>Mantenimiento preventivo riguroso de nuestra flota</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-3">
                Regulaciones y Cumplimiento
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                <li>Registrados y regulados por el MTC</li>
                <li>Cumplimiento estricto de normas de seguridad</li>
                <li>Compromiso con el medio ambiente</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Solicita una cotización
            </button>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Confían en Nosotros</h2>
            <p className="text-center text-gray-300 mb-8">Empresas líderes que respaldan nuestro servicio</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
              <div className="bg-white p-4 rounded-xl hover:scale-110 transition-transform" title="Coelvisac">
                <img 
                  className="w-full max-w-[180px] h-[90px] object-cover justify-self-center" 
                  src={coelvisac} 
                  alt="Logo Coelvisac" 
                />
              </div>
              <div className="bg-white p-4 rounded-xl hover:scale-110 transition-transform" title="Delcrosa">
                <img 
                  className="w-full max-w-[180px] h-[90px] object-cover justify-self-center" 
                  src={delcrosa} 
                  alt="Logo Delcrosa" 
                />
              </div>
              <div className="bg-white p-4 rounded-xl hover:scale-110 transition-transform" title="Metalindustrias">
                <img 
                  className="w-full max-w-[180px] h-[90px] object-cover justify-self-center" 
                  src={metalindustrias} 
                  alt="Logo Metalindustrias" 
                />
              </div>
              <div className="bg-white p-4 rounded-xl hover:scale-110 transition-transform" title="Promelsa">
                <img 
                  className="w-full max-w-[180px] h-[90px] object-cover justify-self-center" 
                  src={promelsa} 
                  alt="Logo Promelsa" 
                />
              </div>
              <div className="bg-white p-4 rounded-xl hover:scale-110 transition-transform" title="San Miguel">
                <img 
                  className="w-full max-w-[180px] h-[90px] object-cover justify-self-center" 
                  src={sanmiguel} 
                  alt="Logo San Miguel" 
                />
              </div>
              <div className="bg-white p-4 rounded-xl hover:scale-110 transition-transform" title="Xylem">
                <img 
                  className="w-full max-w-[180px] h-[90px] object-cover justify-self-center" 
                  src={xylem} 
                  alt="Logo Xylem" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
