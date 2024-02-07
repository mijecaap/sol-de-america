import coelvisac from "../images/coelvisac.png";

export const Nosotros = () => {
  return (
    <section id="nosotros" className="bg-[url(/src/images/background-2.png)] bg-no-repeat bg-cover bg-right flex justify-center">
      <div className="max-w-[1200px] py-12 md:px-12 m-md:px-6 flex justify-end">
        <div className="xl:max-w-[50%] lg:max-w-[65%] p-8 flex flex-col rounded-2xl gap-4 text-white text-pretty bg-[#D9D9D9] bg-opacity-20">
          <h2 className="font-bold text-4xl text-center mb-4">
            Nuestra experiencia en el transporte de carga terrestre
          </h2>
          <p className="text-sm font-normal">
            Con más de 19 años de experiencia en el sector del transporte de
            carga terrestre, nuestra empresa se ha consolidado como líder en el
            mercado. Durante todos estos años hemos trabajado con una gran
            variedad de clientes, desde pequeñas empresas hasta grandes
            corporaciones.
          </p>
          <p className="text-sm font-normal">
            En nuestra empresa, la seguridad es nuestra prioridad núermo uno.
            Por eso, todos nuestros conductores están altamente capacitados y
            cumplen con todas las normas de seguridad en el camino. Además,
            todos nuestros vehículos están equipados con los mejores sistemas de
            seguridad y rastreo para garantizar un transporte seguro y
            eficiente.
          </p>
          <p className="text-sm font-normal">
            En cuanto al cumplimiento, nos aseguramos de cumplir con todas las
            regulaciones y leyes relacionadas con el transporte de carga
            terrestre. Estamos registrados y regulados por el MTC y cumplimos
            con todas las normas de seguridad y medio ambiente.
          </p>
          <p className="text-sm font-normal">
            Nos enorgullecemos de ofrecer un servicio de transporte de carga
            terrestre de alta calidad y estamos comprometidos a seguir brindando
            un servicio excepcional a nuestros clientes en el futuro.
          </p>
          <h2 className="font-bold text-2xl text-center mt-12 ">Nuestros Clientes</h2>
          <div className="grid grid-cols-12">
            <img className="col-span-2 justify-self-center" src={coelvisac} alt="" />
            <img className="col-span-2 justify-self-center" src={coelvisac} alt="" />
            <img className="col-span-2 justify-self-center" src={coelvisac} alt="" />
            <img className="col-span-2 justify-self-center" src={coelvisac} alt="" />
            <img className="col-span-2 justify-self-center" src={coelvisac} alt="" />
            <img className="col-span-2 justify-self-center" src={coelvisac} alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};
