import { useMemo } from "react";

const Column3 = ({ heading, arrowIcon, propHeight }) => {
  const arrowIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="flex-1 rounded-sm box-border flex flex-col items-start justify-center py-4 pr-[41px] pl-[39px] gap-[40px] min-w-[304px] min-h-[292px] max-w-full text-left text-5xl text-link-alternate font-text-small-link border-[1px] border-solid border-link-alternate mq450:gap-[20px]">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
            {heading}
          </h3>
          <div
            className="self-stretch relative text-base leading-[150%]"
            style={arrowIconStyle}
          >
            {arrowIcon}
          </div>
        </div>
      </div>
      <div className="w-[200px] flex flex-row items-center justify-start pt-4 px-0 pb-0 box-border gap-[24px] text-center text-base">
        <button className="cursor-pointer [border:none] py-3 px-[22px] bg-link-alternate rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
          <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-center">
            Learn More
          </div>
        </button>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <div className="relative leading-[150%] whitespace-nowrap">
            Sign Up
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Column3;
