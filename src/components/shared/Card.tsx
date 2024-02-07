interface Props {
  title: string;
  paragraph: string;
  textButton: string;
}

const Card = ({ title, paragraph, textButton }: Props) => {
  return (
    <div className="xl:col-span-3 sm:col-span-6 m-sm:col-span-12 flex flex-col gap-8 p-8 border-2 border-white border-opacity-20 rounded justify-between">
      <div className="flex flex-col gap-4 text-pretty">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm font-normal">{paragraph}</p>
      </div>
      <button className="bg-[#DE7E0B] rounded-2xl text-base font-semibold py-3 px-4">
        {textButton}
      </button>
    </div>
  );
};

export default Card;
