import logo from "../../images/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#232526] text-white">
      <div className="max-w-[1200px] mx-auto px-12 py-16 m-md:px-6">
        <div className="grid grid-cols-12 gap-8 border-b border-white/10 pb-12">
          {/* Información de la empresa */}
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo Sol de America" className="size-10" />
              <span className="text-lg text-[#DE7E0B] font-bold">
                Sol de America E.I.R.L
              </span>
            </div>
            <p className="text-white/70 mb-6 text-pretty">
              Con más de 19 años de experiencia, somos líderes en el transporte de carga
              por carretera a nivel nacional, brindando soluciones logísticas eficientes
              y seguras.
            </p>
            <div className="space-y-3">
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
          <div className="lg:col-span-2 md:col-span-6 sm:col-span-6 m-sm:col-span-12">
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-white/70">
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
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 m-sm:col-span-12">
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3 text-white/70">
              <li>Transporte de Carga General</li>
              <li>Transporte de Carga Especializada</li>
              <li>Transporte de Carga de Gran Tonelaje</li>
              <li>Transporte de Carga Urgente</li>
            </ul>
          </div>

          {/* Certificaciones */}
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
            <h3 className="text-lg font-semibold mb-6">Certificaciones</h3>
            <ul className="space-y-3 text-white/70">
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
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Sol de America E.I.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};