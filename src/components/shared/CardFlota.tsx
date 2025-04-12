interface Prompt {
  title: string;
  paragraph: string;
  spanSize: string;
  textPosition?: string;
  children: React.ReactNode;
}

const CardFlota = ({
  title,
  paragraph,
  spanSize,
  textPosition,
  children,
}: Prompt) => {
  const isVertical = spanSize.includes("col-span-4");
  return (
    <div
      className={`${spanSize} ${textPosition} bg-white/5 backdrop-blur-sm rounded-xl p-4 relative overflow-visible transition-all duration-300 hover:bg-white/10 hover:shadow-lg group`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
      <div
        className={`${
          isVertical ? "md:h-[50%] md:w-full sm:w-[55%] m-sm:w-[55%]" : "max-w-[55%]"
        } flex flex-col text-pretty z-10 relative`}
      >
        <h3 className="text-lg md:text-xl font-bold mb-4">{title}</h3>
        <p className="text-sm md:text-base font-normal leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardFlota;
