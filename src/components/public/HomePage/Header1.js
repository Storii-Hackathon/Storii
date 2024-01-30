const Header1 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start py-28 px-16 box-border gap-[80px] bg-[url('/public/header--15@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[613px] max-w-full text-left text-37xl text-link-alternate font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border">
      <div className="self-stretch rounded-3xs flex flex-row flex-wrap items-center justify-center p-[25px] box-border gap-[55px] max-w-full mq800:gap-[27px]">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[392px] max-w-full mq800:min-w-full">
          <h1 className="m-0 self-stretch h-[134px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            Unleash the Power of AI Book Writing
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[392px] max-w-full text-lg mq800:min-w-full">
          <div className="relative leading-[150%]">
            Experience the future of literature with our AI-powered book writing
            service.
          </div>
          <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
            <button className="cursor-pointer [border:none] py-3 px-[22px] bg-link-alternate rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                Sign Up
              </div>
            </button>
            <button className="cursor-pointer py-3 px-[21px] bg-[transparent] rounded-sm flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-link-alternate hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/placeholder-image@2x.png"
      />
    </section>
  );
};

export default Header1;
