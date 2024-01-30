import { useMemo } from "react";

const Accordion = ({
  question,
  question1,
  question2,
  question3,
  question4,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
}) => {
  const questionStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const question1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const question2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const question3Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const question4Style = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  return (
    <div className="w-[1312px] overflow-x-auto flex flex-col items-start justify-start max-w-full text-left text-lg text-color-brand-black font-text-small-link">
      <div className="w-[1312px] flex flex-col items-start justify-start">
        <div className="self-stretch h-px relative bg-color-brand-black box-border border-[1px] border-solid border-color-brand-black" />
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px] max-w-full">
          <b
            className="flex-1 relative leading-[150%] inline-block min-w-[117px] max-w-full"
            style={questionStyle}
          >
            {question}
          </b>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="w-[1312px] flex flex-col items-start justify-start">
        <div className="self-stretch h-px relative bg-color-brand-black box-border border-[1px] border-solid border-color-brand-black" />
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px] max-w-full">
          <b
            className="flex-1 relative leading-[150%] inline-block min-w-[145px] max-w-full"
            style={question1Style}
          >
            {question1}
          </b>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="w-[1312px] flex flex-col items-start justify-start">
        <div className="self-stretch h-px relative bg-color-brand-black box-border border-[1px] border-solid border-color-brand-black" />
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px] max-w-full">
          <b
            className="flex-1 relative leading-[150%] inline-block min-w-[106px] max-w-full"
            style={question2Style}
          >
            {question2}
          </b>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="w-[1312px] flex flex-col items-start justify-start">
        <div className="self-stretch h-px relative bg-color-brand-black box-border border-[1px] border-solid border-color-brand-black" />
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px] max-w-full">
          <b
            className="flex-1 relative leading-[150%] inline-block min-w-[229px] max-w-full"
            style={question3Style}
          >
            {question3}
          </b>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="w-[1312px] flex flex-col items-start justify-start">
        <div className="self-stretch h-px relative bg-color-brand-black box-border border-[1px] border-solid border-color-brand-black" />
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px] max-w-full">
          <b
            className="flex-1 relative leading-[150%] inline-block min-w-[197px] max-w-full"
            style={question4Style}
          >
            {question4}
          </b>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <div className="w-[1312px] h-px relative bg-color-brand-black box-border border-[1px] border-solid border-color-brand-black" />
    </div>
  );
};

export default Accordion;
