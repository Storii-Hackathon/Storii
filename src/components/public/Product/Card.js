const Card = ({ heading, column, button }) => {
  return (
    <div className="w-[304px] rounded-sm bg-link-alternate box-border flex flex-col items-start justify-start min-w-[198px] shrink-0 text-left text-5xl text-color-brand-black font-text-small-link border-[1px] border-solid border-color-brand-black">
      <div className="self-stretch h-80 flex flex-col items-start justify-start p-6 box-border gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <h3 className="m-0 self-stretch h-[68px] relative text-inherit leading-[140%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
              {heading}
            </h3>
            <div className="self-stretch h-12 relative text-base leading-[150%] inline-block">
              {column}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start text-base">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[150%] whitespace-nowrap">
              {button}
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/icon--chevronright-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
