import { useState } from "react";
import { Toast } from "./shared/Toast";
import { useToast } from "../hooks/useToast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ContactForm = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast, showToast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoServicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  // Validaciones de campos
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{9}$/;
    return re.test(phone);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          error = "Por favor, ingresa un correo electrónico válido";
        }
        break;
      case "telefono":
        if (!validatePhone(value)) {
          error = "El teléfono debe tener 9 dígitos";
        }
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validamos todos los campos antes de enviar
    const emailError = !validateEmail(formData.email);
    const phoneError = !validatePhone(formData.telefono);

    if (emailError || phoneError) {
      setErrors({
        ...errors,
        email: emailError ? "Por favor, ingresa un correo electrónico válido" : "",
        telefono: phoneError ? "El teléfono debe tener 9 dígitos" : "",
      });
      return;
    }

    showToast({
      message: "¡Gracias por tu mensaje! Te contactaremos pronto.",
      type: "success",
    });

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoServicio: "",
      mensaje: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error cuando el usuario empieza a escribir de nuevo
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contacto" className="w-full bg-[#232526] flex justify-center py-24">
      <div className="max-w-[1200px] w-full px-12 m-md:px-6">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Solicita una Cotización
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DE7E0B] to-[#ffa640] rounded-full mt-2"></div>
          <p className="md:max-w-[70%] m-md:max-w-full text-lg font-normal text-pretty mx-auto mt-4 text-white/90 text-center">
            Envíanos los detalles de tu carga y te responderemos con una cotización personalizada en menos de 24 horas.
          </p>
        </div>
        
        <div 
          ref={elementRef}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 auto-rows-auto">
            {/* Mapa */}
            <div className="w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm p-6 h-fit">
              <h3 className="text-2xl font-semibold text-white mb-6">Nuestra Ubicación</h3>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d975.4225162943145!2d-77.024497!3d-12.064833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c897ad7f2699%3A0xf10fb057a559e138!2sEmpresa%20De%20Transportes%20Sol%20De%20America%20E.I.R.L.!5e0!3m2!1ses!2spe!4v1744499450298!5m2!1ses!2spe" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Sol de America E.I.R.L"
                className="rounded-lg shadow-lg"
              />
              <div className="mt-6 text-white/90 space-y-2">
                <p className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-[#DE7E0B]" aria-hidden="true" />
                  Obreros 571, La Victoria
                </p>
                <p className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-[#DE7E0B]" aria-hidden="true" />
                  996 137 913 - 998 195 717
                </p>
                <p className="flex items-center gap-2">
                  <i className="fa-solid fa-at text-[#DE7E0B]" aria-hidden="true" />
                  transp_soldeamerica@yahoo.es
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-fit">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-white mb-2">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      required
                      aria-required="true"
                      placeholder="Ej: Juan Pérez"
                      className="w-full bg-white/10 text-white text-base md:text-lg border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DE7E0B] focus:border-transparent placeholder:text-white/50"
                      onChange={handleChange}
                      value={formData.nombre}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      aria-required="true"
                      placeholder="Ej: juan@empresa.com"
                      className={`w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DE7E0B] focus:border-transparent placeholder:text-white/50 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formData.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-white mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      required
                      aria-required="true"
                      placeholder="Ej: 987654321"
                      className={`w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DE7E0B] focus:border-transparent placeholder:text-white/50 ${
                        errors.telefono ? "border-red-500" : ""
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formData.telefono}
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-red-500 text-sm">{errors.telefono}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="tipoServicio" className="block text-white mb-2">
                      Tipo de servicio <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="tipoServicio"
                      name="tipoServicio"
                      required
                      aria-required="true"
                      className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DE7E0B] focus:border-transparent"
                      onChange={handleChange}
                      value={formData.tipoServicio}
                    >
                      <option value="" disabled>Seleccione un servicio</option>
                      <option value="general">Carga General</option>
                      <option value="especializada">Carga Especializada</option>
                      <option value="tonelaje">Carga de Gran Tonelaje</option>
                      <option value="urgente">Carga Urgente</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-white mb-2">
                      Detalles de la carga <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      aria-required="true"
                      rows={4}
                      placeholder="Describe el tipo de mercancía, volumen aproximado, origen y destino de la carga"
                      className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DE7E0B] focus:border-transparent resize-none placeholder:text-white/50"
                      onChange={handleChange}
                      value={formData.mensaje}
                    />
                  </div>
                </div>

                <p className="text-white/60 text-sm">
                  Los campos marcados con <span className="text-red-500">*</span> son obligatorios
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#DE7E0B] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#c26c0a] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Solicitar Cotización
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => showToast({ message: "", type: "success", duration: 0 })}
        />
      )}
    </section>
  );
};