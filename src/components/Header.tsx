import { useState } from "react";
import logo from "../images/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      id="header-nav"
      role="banner"
      className={`w-full h-auto fixed flex justify-center z-50 ${
        isOpen && "header-nav-mobile"
      }`}
    >
      <div
        className={`w-full max-w-[1200px] ${
          isOpen && "m-md:h-[100vh]"
        } py-3 md:px-12 m-md:px-6 flex flex-col justify-between`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Logo Sol de America" className="size-8" />
            <span className="text-base md:text-lg text-[#DE7E0B] font-bold">
              Sol de America E.I.R.L
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <nav className="m-md:hidden" role="navigation" aria-label="Menú principal">
              <ul className="flex gap-4 text-white text-sm md:text-base font-normal">
                <li className="hover:underline hover:cursor-pointer">
                  <a href="#inicio">Inicio</a>
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  <a href="#servicios">Servicios</a>
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  <a href="#nosotros">Nosotros</a>
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  <a href="#flota">Flota</a>
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </nav>
            <div className="m-xs:hidden">
              <a 
                href="#contacto"
                className="flex items-center gap-2 text-white bg-[#DE7E0B] px-3 py-2 rounded-lg hover:bg-[#c26c0a] transition-colors"
              >
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span className="text-sm md:text-base">996137913</span>
              </a>
            </div>
            <button 
              className="md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <i
                className={`${
                  isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                } text-white text-2xl`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div
          className={`h-auto flex-grow flex justify-center items-center md:hidden ${
            !isOpen && "m-md:hidden"
          }`}
          role="navigation"
          aria-label="Menú móvil"
        >
          <nav>
            <ul className="text-white font-bold text-xl md:text-2xl text-center flex flex-col gap-4">
              <li onClick={() => setIsOpen(false)}>
                <a href="#inicio">Inicio</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#servicios">Servicios</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#flota">Flota</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
