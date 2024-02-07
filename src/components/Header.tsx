import { useState } from "react";
import logo from "../images/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      id="header-nav"
      className={`w-full h-auto fixed flex justify-center z-10 ${
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
            <img src={logo} alt="" className="size-8" />
            <span className="text-base text-[#DE7E0B] font-bold">
              Sol de America E.I.R.L
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <nav className="m-md:hidden">
              <ul className="flex gap-4 text-white text-xs font-normal">
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
              </ul>
            </nav>
            <div className="m-xs:hidden">
              <button className="flex items-center gap-2 text-white bg-[#DE7E0B] px-3 py-2 rounded-lg">
                <i className="fa-brands fa-whatsapp" />
                <span>996137913</span>
              </button>
            </div>
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`${
                  isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                } text-white text-2xl`}
              />
            </div>
          </div>
        </div>
        <div
          className={`h-auto flex-grow flex justify-center items-center md:hidden ${
            !isOpen && "m-md:hidden"
          }`}
        >
          <nav>
            <ul className="text-white font-bold text-2xl text-center flex flex-col gap-4">
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
