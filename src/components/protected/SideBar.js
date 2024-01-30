import { useMemo } from "react";

const SideBar4 = ({
  storiiiMinWidth,
  generateStoryColor,
  fillFillColor,
  templatesColor,
  groupDivColor,
  fill951IconColor,
  propColor,
}) => {
  const sideBarStyle = useMemo(() => {
    return {
      minWidth: storiiiMinWidth,
    };
  }, [storiiiMinWidth]);

  const profileStyle = useMemo(() => {
    return {
      color: generateStoryColor,
    };
  }, [generateStoryColor]);

  const generateStoryStyle = useMemo(() => {
    return {
      color: fillFillColor,
    };
  }, [fillFillColor]);

  const storiesStyle = useMemo(() => {
    return {
      color: templatesColor,
    };
  }, [templatesColor]);

  const templatesStyle = useMemo(() => {
    return {
      color: groupDivColor,
    };
  }, [groupDivColor]);

  const settingsStyle = useMemo(() => {
    return {
      color: fill951IconColor,
    };
  }, [fill951IconColor]);

  const fAQStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="w-[266px] [background:linear-gradient(19.15deg,_#222a2d,_#2c3a34)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[37px] px-7 pb-11 box-border gap-[558px] text-left text-3xl text-seagreen font-josefin-sans mq450:gap-[279px] mq450:pt-5 mq450:pb-5 mq450:box-border mq1125:pt-6 mq1125:pb-[29px] mq1125:box-border"
      style={sideBarStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px gap-[68px]">
        <div className="w-[135px] h-[18px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
          <b className="flex-1 relative shrink-0 mq450:text-lg">Storiii</b>
        </div>
        <div className="self-stretch h-[43px] flex flex-row items-start justify-start pt-0 px-0 pb-[43px] box-border">
          <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-gray-400" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[44px] text-lg text-darkgray-300">
          <div className="h-[60px] flex flex-col items-start justify-start gap-[23px]">
            <div className="w-[164px] flex-1 flex flex-row items-start justify-start gap-[27px]">
              <img
                className="h-[17.4px] w-[17.3px] relative"
                loading="eager"
                alt=""
                src="/fill-1004.svg"
              />
              <div
                className="flex-1 relative font-medium shrink-0"
                style={profileStyle}
              >
                Profile
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[27px]">
              <img
                className="h-[17.4px] w-[17.1px] relative"
                loading="eager"
                alt=""
                src="/fill-997.svg"
              />
              <div className="relative font-medium" style={generateStoryStyle}>
                Generate Story
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-400" />
            <div className="w-[158px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
                <div className="self-stretch h-[17px] flex flex-row items-center justify-between gap-[20px]">
                  <img
                    className="h-[15px] w-[18px] relative"
                    loading="eager"
                    alt=""
                    src="/fill-1007.svg"
                  />
                  <div
                    className="w-[92.5px] relative font-medium flex items-center shrink-0"
                    style={storiesStyle}
                  >
                    Stories
                  </div>
                </div>
                <div className="w-[140px] h-[17px] flex flex-row items-end justify-between gap-[20px]">
                  <img
                    className="h-[15.9px] w-[18px] relative"
                    loading="eager"
                    alt=""
                    src="/fill-1161.svg"
                  />
                  <div
                    className="relative font-medium shrink-0"
                    style={templatesStyle}
                  >
                    Templates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[9px] text-lg text-darkgray-300">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[19px]">
          <div className="w-[127px] flex flex-row items-start justify-start gap-[21px]">
            <div className="h-[18px] w-[17px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <img
                className="w-[16.6px] h-[18px] relative"
                loading="eager"
                alt=""
                src="/fill-1157.svg"
              />
            </div>
            <div
              className="flex-1 relative font-medium shrink-0"
              style={settingsStyle}
            >
              Settings
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
            <div className="w-[126px] flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-[17.4px] w-[18.4px] relative min-h-[17px]"
                loading="eager"
                alt=""
                src="/fill-951.svg"
              />
              <div
                className="flex-1 relative font-medium shrink-0"
                style={fAQStyle}
              >
                FAQ
              </div>
            </div>
            <img
              className="h-[18px] w-[17px] relative object-contain min-h-[18px]"
              loading="eager"
              alt=""
              src="/logout.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar4;
