import { useMemo } from "react";

const Column = ({ heading, price, text, propHeight, propDisplay }) => {
  const stylePrimaryStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className="w-[297.3px] rounded-sm box-border flex flex-col items-center justify-start py-8 px-[25px] gap-[32px] min-w-[193px] text-left text-xl text-color-brand-black font-text-small-link border-[1px] border-solid border-color-brand-black mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
          {heading}
        </b>
        <div className="self-stretch flex flex-col items-start justify-start text-37xl">
          <b className="self-stretch relative leading-[120%] whitespace-nowrap mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            {price}
          </b>
          <b className="self-stretch relative text-base leading-[150%]">
            Per month
          </b>
        </div>
        <div
          className="self-stretch h-12 relative text-base leading-[150%] inline-block"
          style={stylePrimaryStyle}
        >
          {text}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-button self-stretch rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-200">
        <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
          Get started
        </div>
      </button>
    </div>
  );
};

export default Column;
