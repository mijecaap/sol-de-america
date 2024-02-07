import Card from "./shared/Card";

export const Servicios = () => {
  return (
    <section id="servicios" className="w-full h-auto bg-[#232526] flex justify-center">
      <div className="max-w-[1200px] py-24 md:px-12 m-md:px-6 text-center flex flex-col gap-8 text-white items-center">
        <h2 className="text-4xl font-bold">Nuestros Servicios</h2>
        <p className="md:max-w-[70%] m-md:max-w-full text-base font-norma text-pretty">
          Nuestra empresa ofrece una amplia variedad de servicios de transporte
          de carga terrestre para satisfacer las necesidades de nuestros
          clientes.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <Card
            title="Transporte de Carga General"
            paragraph="Servicio general para cualquier tipo de mercancía, desde
                productos manufacturados hasta productos frescos, con una flota
                de vehiculos de carga de última generación, equipados con los
                mejores sistemas de seguridad y rastreo para garantizar un
                transporte seguro y eficiente."
            textButton="Cotizar"
          />
          <Card
            title="Transporte de Carga Especializada"
            paragraph="Servicio para el transporte de cargas especiales, como
                    maquinaría pesada, equipos industriales, y materiales peligros,
                    junto con un equipo de profesionales altamaente capacitados para
                    manejar estas cargas con precaución y seguridad."
            textButton="Cotizar"
          />
          <Card
            title="Transporte de Carga de Gran Tonelaje"
            paragraph="Servicio para el transporte de cargas de gran tonelaje para
                    aquellos clientes que quieren movilizar grandes volúmenes de
                    mercancía, con una flota de vehiculos de gran capacidad y un
                    equipo especializado para manejar estas cargas de forma segura y
                    eficiente."
            textButton="Cotizar"
          />
          <Card
            title="Transporte de Carga Urgente"
            paragraph="Servicio centrado en el transporte urgente de mercancías, de
                    manera rápida y eficiente, con una flota de vehiculos de carga
                    modernos para garantizar un tranporte rápido y seguro."
            textButton="Cotizar"
          />
        </div>
      </div>
    </section>
  );
};
