import { useState } from "react";

interface Props {
  title: string;
  paragraph: string;
  textButton: string;
}

const Card = ({ title, paragraph, textButton }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Navegar al formulario de contacto
    const contactForm = document.getElementById('contacto');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
    // Reset animation state
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <div 
      className={`xl:col-span-3 sm:col-span-6 m-sm:col-span-12 flex flex-col gap-8 p-8 border-2 border-white border-opacity-20 rounded justify-between service-card backdrop-blur-sm bg-white/5 ${
        isClicked ? 'animate-pulse' : ''
      }`}
    >
      <div className="flex flex-col gap-4 text-pretty">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-base md:text-lg font-normal">{paragraph}</p>
      </div>
      <button 
        onClick={handleClick}
        className="bg-[#DE7E0B] rounded-2xl text-base md:text-lg font-semibold py-3 px-4 hover:bg-[#c26c0a] transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {textButton}
      </button>
    </div>
  );
};

export default Card;
