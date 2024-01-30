import Content3 from "./Content3";

const Content1 = () => {
  return (
    <div className="flex-1 rounded-sm [background:linear-gradient(19.15deg,_#222a2d,_#2c3a34)] box-border flex flex-col items-center justify-start py-8 px-[31px] gap-[32px] max-w-full text-center text-xl text-link-alternate font-text-small-link border-[1px] border-solid border-link-alternate mq800:gap-[16px] mq800:pt-[21px] mq800:pb-[21px] mq800:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <b className="relative leading-[140%] mq450:text-base mq450:leading-[22px]">
          Business Plan
        </b>
        <div className="relative text-base leading-[150%]">
          Ideal for small businesses and teams
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-link-alternate" />
      <Content3 price="$29/mo" />
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-link-alternate" />
      <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 box-border gap-[16px] max-w-full shrink-0 text-left text-base">
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/check.svg"
          />
          <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
            Advanced writing features included
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            type="checkbox"
          />
          <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
            Collaborate with team members
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            type="checkbox"
          />
          <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
            Priority customer support
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            type="checkbox"
          />
          <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
            Customizable writing templates
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            type="checkbox"
          />
          <div className="flex-1 relative leading-[150%] inline-block max-w-[calc(100%_-_40px)]">
            Enhanced security and privacy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
