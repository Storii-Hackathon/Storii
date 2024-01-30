import { useMemo } from "react";

const Column2 = ({
  heading,
  rowContentIcon,
  showStyleSecondarySmallFalse,
  showStyleLinkSmallFalseDark,
  propMinHeight,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const sectionTitleStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const actionsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const styleSecondarySmallFalseStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="flex-1 flex flex-col items-center justify-between min-w-[304px] min-h-[292px] max-w-full text-left text-13xl text-color-brand-black font-text-small-link mq1350:min-h-[auto]">
      <div
        className="self-stretch flex flex-col items-start justify-start"
        style={sectionTitleStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch h-[84px] relative text-inherit leading-[130%] font-bold font-inherit inline-block mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
            {heading}
          </h1>
          <div className="self-stretch relative text-base leading-[150%]">
            {rowContentIcon}
          </div>
        </div>
      </div>
      <div
        className="w-[200px] h-16 hidden flex-row items-center justify-start pt-4 px-0 pb-0 box-border gap-[24px] text-base"
        style={actionsStyle}
      >
        {showStyleSecondarySmallFalse && (
          <div
            className="h-[50px] rounded-sm bg-link-alternate box-border flex flex-row items-center justify-center py-3 px-6 whitespace-nowrap border-[1px] border-solid border-color-brand-black"
            style={styleSecondarySmallFalseStyle}
          >
            <div className="relative leading-[150%]">Learn More</div>
          </div>
        )}
        {showStyleLinkSmallFalseDark && (
          <div className="h-6 flex flex-row items-center justify-center gap-[8px]">
            <div className="self-stretch relative leading-[150%] whitespace-nowrap">
              Sign Up
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/icon--chevronright-1.svg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Column2;
