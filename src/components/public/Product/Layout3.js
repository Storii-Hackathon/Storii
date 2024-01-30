import Card from "./Card";

const Layout3 = () => {
  return (
    <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full text-center text-base text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        <div className="relative leading-[150%] font-semibold">
          Revolutionary
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Unlock Your Writing Potential
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Discover the Power of AI Writing
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-21xl mq800:gap-[16px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
          <div className="w-[644px] rounded-sm bg-link-alternate box-border flex flex-col items-start justify-center py-0 pr-0.5 pl-0 max-w-full shrink-0 border-[1px] border-solid border-color-brand-black">
            <div className="self-stretch flex flex-col items-start justify-center p-12 gap-[32px] mq800:gap-[16px] mq800:pl-6 mq800:pr-6 mq800:box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                    Customizable Language Styles
                  </h1>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Tailor Your Writing to Any Tone or Voice with Ease
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-base mq450:flex-wrap">
                <button className="cursor-pointer py-3 px-[21px] bg-button rounded-sm flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-brand-black hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-300">
                  <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                    Learn More
                  </div>
                </button>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative leading-[150%] whitespace-nowrap">
                    Sign Up
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--chevronright-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <Card
            heading="Enhance Your Writing Efficiency"
            column="Streamline Your Writing Process with AI Assistance"
            button="Get Started"
          />
          <Card
            heading="Improve Your Writing Accuracy"
            column="Refine Your Writing Skills with AI Guidance"
            button="Join Now"
          />
        </div>
      </div>
    </section>
  );
};

export default Layout3;
