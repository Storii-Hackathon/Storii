const AcountInfo = () => {
  return (
    <div className="h-[421px] w-[291px] rounded-xl bg-papayawhip shadow-[0px_4px_30px_10px_rgba(0,_0,_0,_0.2)] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-7 px-0 pb-[175px] box-border gap-[19px] min-w-[291px] text-left text-17xl text-dimgray-300 font-josefin-sans mq450:pt-5 mq450:pb-[114px] mq450:box-border mq1125:flex-1">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[25px]">
        <h1 className="m-0 h-[55px] flex-1 relative text-inherit font-normal font-inherit flex items-center mq800:text-10xl mq450:text-3xl">
          Account Info
        </h1>
      </div>
      <div className="w-[266px] flex flex-row items-start justify-start py-0 px-0 box-border text-lg">
        <div className="w-[310px] flex flex-row items-start justify-start gap-[36px] mq450:gap-[18px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch h-[55px] relative flex items-center shrink-0">
              Tokens Used
            </div>
            <div className="w-[127px] flex flex-row items-start justify-start py-0 px-0 box-border">
              <div className="h-[55px] w-[137px] relative flex items-center shrink-0">
                Tokens Used
              </div>
            </div>
            <div className="w-[126px] flex flex-row items-start justify-start py-0 px-0 box-border">
              <div className="h-[55px] w-[137px] relative flex items-center shrink-0">
                Tokens Used
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start text-base text-darkolivegreen font-text-small-link">
            <div className="self-stretch h-[55px] relative font-medium flex items-center shrink-0 z-[1]">
              10210
            </div>
            <div className="self-stretch h-[55px] relative font-medium flex items-center shrink-0 mt-[-10px]">
              10210
            </div>
            <div className="self-stretch h-[55px] relative font-medium flex items-center shrink-0 z-[1] mt-[-10px]">
              10210
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcountInfo;
