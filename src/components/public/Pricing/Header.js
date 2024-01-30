const Header = () => {
  return (
    <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[400px] max-w-full mq800:min-w-full">
          <div className="relative leading-[150%] font-semibold">Discover</div>
          <h1 className="m-0 self-stretch relative text-37xl leading-[120%] font-bold font-inherit text-left mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            Flexible Pricing Plans
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[400px] max-w-full text-left text-lg mq800:min-w-full">
          <div className="self-stretch relative leading-[150%]">
            Choose the perfect pricing plan that fits your needs and budget. Our
            plans offer exceptional value with a range of features and benefits.
          </div>
          <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
            <button className="cursor-pointer [border:none] py-3 px-[22px] bg-button rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-200">
              <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                Get Started
              </div>
            </button>
            <button className="cursor-pointer py-3 px-[21px] bg-[transparent] rounded-sm flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-brand-black hover:bg-darkslategray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-300">
              <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
