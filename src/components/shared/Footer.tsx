import logo from "../../images/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#232526] text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-white/10 pb-8 sm:pb-12">
          {/* Información de la empresa */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src={logo} alt="Logo Sol de America" className="w-8 h-8 sm:size-10" />
              <span className="text-base sm:text-lg text-[#DE7E0B] font-bold">
                Sol de America E.I.R.L
              </span>
            </div>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base text-pretty">
              Con más de 19 años de experiencia, somos líderes en el transporte de carga
              por carretera a nivel nacional, brindando soluciones logísticas eficientes
              y seguras.
            </p>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <p className="flex items-center gap-2 text-white/70">
                <i className="fa-solid fa-location-dot text-[#DE7E0B]" aria-hidden="true" />
                Obreros 571, La Victoria
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <i className="fa-solid fa-phone text-[#DE7E0B]" aria-hidden="true" />
                996 137 913 - 998 195 717
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <i className="fa-solid fa-at text-[#DE7E0B]" aria-hidden="true" />
                transp_soldeamerica@yahoo.es
              </p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">
              <li>
                <a href="#inicio" className="hover:text-[#DE7E0B] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#DE7E0B] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#DE7E0B] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#flota" className="hover:text-[#DE7E0B] transition-colors">
                  Flota
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#DE7E0B] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Servicios</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">
              <li>Transporte de Carga General</li>
              <li>Transporte de Carga Especializada</li>
              <li>Transporte de Carga de Gran Tonelaje</li>
              <li>Transporte de Carga Urgente</li>
            </ul>
          </div>

          {/* Certificaciones */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Certificaciones</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-certificate text-[#DE7E0B]" aria-hidden="true" />
                Registrados en el MTC
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-shield text-[#DE7E0B]" aria-hidden="true" />
                Licencia de Funcionamiento
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-award text-[#DE7E0B]" aria-hidden="true" />
                ISO 9001:2015
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-6 sm:mt-8 text-center text-white/60 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Sol de America E.I.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};