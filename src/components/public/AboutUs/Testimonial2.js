const Testimonial2 = () => {
  return (
    <section className="self-stretch bg-link-alternate overflow-hidden flex flex-row items-center justify-center py-28 px-16 box-border max-w-full text-center text-5xl text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px]">
      <div className="flex-1 flex flex-col items-center justify-start gap-[48px] max-w-full mq800:gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq1125:flex-wrap">
          <button className="cursor-pointer py-3 px-[11px] bg-[transparent] h-12 w-12 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-brand-black">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </button>
          <div className="w-[768px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
            </div>
            <h3 className="m-0 self-stretch h-[102px] relative text-inherit leading-[140%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
              Our company's technology has revolutionized the way books are
              written. With the power of artificial intelligence, we are able to
              create compelling narratives that captivate readers.
            </h3>
            <div className="w-[394px] flex flex-row items-center justify-center py-0 pr-px pl-0 box-border gap-[18px] max-w-full text-left text-base mq450:flex-wrap">
              <img
                className="h-14 w-14 relative rounded-[50%] object-cover"
                loading="eager"
                alt=""
                src="/avatar-image2@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[92px]">
                <div className="relative leading-[150%] font-semibold">
                  John Doe
                </div>
                <div className="relative leading-[150%]">CEO, XYZ Company</div>
              </div>
              <div className="h-[62px] w-px relative box-border border-r-[1px] border-solid border-color-brand-black mq450:w-[100px] mq450:h-px mq450:box-border mq450:border-t-[1px] mq450:border-solid mq450:border-color-brand-black" />
              <img
                className="h-14 flex-1 relative max-w-full overflow-hidden min-w-[91px]"
                loading="eager"
                alt=""
                src="/logo2-colordark2.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer py-3 px-[11px] bg-[transparent] h-12 w-12 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-brand-black">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-1.svg"
            />
          </button>
        </div>
        <div className="flex flex-row items-start justify-start p-2.5 gap-[9px]">
          <div className="h-2 w-2 relative rounded-[50%] bg-color-brand-black" />
          <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
          <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
          <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
          <div className="h-2 w-2 relative rounded-[50%] bg-color-neutral-neutral-lighter" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;
