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
      className={`${spanSize} ${textPosition} bg-white bg-opacity-10 rounded-xl p-4 relative overflow-visible`}
    >
      {children}
      <div
        className={`${
          isVertical ? "md:h-[50%] md:w-full sm:w-[55%] m-sm:w-[55%]" : "max-w-[55%]"
        } flex flex-col text-pretty`}
      >
        <h3 className="text-base font-bold mb-4">{title}</h3>
        <p className="text-sm font-normal">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardFlota;
