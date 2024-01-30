const Content4 = ({ iconPhone, heading, text, link }) => {
  return (
    <div className="w-[405.3px] flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-13xl text-color-brand-black font-text-small-link">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="eager"
        alt=""
        src={iconPhone}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
            {heading}
          </h1>
          <div className="self-stretch relative text-base leading-[150%]">
            {text}
          </div>
        </div>
        <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Content4;
