const Testimonial1 = () => {
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
            <img
              className="w-[140px] h-14 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/logo2-colordark1.svg"
            />
            <h3 className="m-0 self-stretch h-[68px] relative text-inherit leading-[140%] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[27px]">
              The AI writing products have revolutionized the way I write books.
              It's like having a co-author who never gets tired or runs out of
              ideas.
            </h3>
            <div className="w-[300px] flex flex-col items-center justify-start gap-[16px] text-base">
              <img
                className="w-14 h-14 relative rounded-[50%] object-cover"
                loading="eager"
                alt=""
                src="/avatar-image1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  John Doe
                </div>
                <div className="self-stretch relative leading-[150%]">
                  Author, Best Books Publishing
                </div>
              </div>
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

export default Testimonial1;
