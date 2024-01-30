import { useMemo } from "react";

const Column1 = ({ quote, nameSurname, text, propHeight, propHeight1 }) => {
  const columnStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const quoteStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className="h-[386.9px] flex-1 rounded-mid bg-button box-border overflow-hidden flex flex-col items-start justify-center py-[45px] px-[25px] gap-[40px] min-w-[312px] max-w-full text-left text-xl text-link-alternate font-text-small-link border-[1px] border-solid border-link-alternate mq450:gap-[20px] mq450:pt-[29px] mq450:pb-[29px] mq450:box-border"
      style={columnStyle}
    >
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/section-container.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/section-container.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/section-container.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/section-container.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/section-container.svg"
        />
      </div>
      <b
        className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]"
        style={quoteStyle}
      >
        {quote}
      </b>
      <div className="h-48 flex flex-col items-start justify-start gap-[16px] text-base">
        <img
          className="w-14 h-14 relative rounded-[50%] object-cover"
          loading="eager"
          alt=""
          src="/avatar-image@2x.png"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[150%] font-semibold">
            {nameSurname}
          </div>
          <div className="relative leading-[150%]">{text}</div>
        </div>
        <img
          className="w-[140px] flex-1 relative max-h-full overflow-hidden"
          loading="eager"
          alt=""
          src="/logo2-colordark.svg"
        />
      </div>
    </div>
  );
};

export default Column1;
