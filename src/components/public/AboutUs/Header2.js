const Header2 = () => {
  return (
    <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-color-brand-black font-text-small-link mq800:pt-[73px] mq800:pb-[73px] mq800:box-border mq450:gap-[20px] mq1125:gap-[40px] mq1125:pl-8 mq1125:pr-8 mq1125:box-border">
      <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[150%] font-semibold">
            Revolutionary
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-37xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
              Transforming the Future
            </h1>
            <div className="self-stretch h-[54px] relative text-lg leading-[150%] inline-block">
              We are a startup that leverages the power of artificial
              intelligence to create groundbreaking books.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
          <button className="cursor-pointer [border:none] py-3 px-[22px] bg-button rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-200">
            <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
              Learn More
            </div>
          </button>
          <button className="cursor-pointer py-3 px-[21px] bg-[transparent] w-[105px] rounded-sm box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-brand-black hover:bg-darkslategray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-300">
            <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
              Sign Up
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header2;
