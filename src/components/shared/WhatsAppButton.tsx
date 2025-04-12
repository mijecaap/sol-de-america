export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51996137913"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white size-12 flex items-center justify-center rounded-full shadow-lg z-50 hover:scale-110 transition-transform duration-300"
    >
      <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true" />
    </a>
  );
};