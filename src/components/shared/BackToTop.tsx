import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-20 right-4 bg-[#DE7E0B] text-white size-12 flex items-center justify-center rounded-full shadow-lg z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <i className="fa-solid fa-arrow-up text-xl" aria-hidden="true" />
    </button>
  );
};