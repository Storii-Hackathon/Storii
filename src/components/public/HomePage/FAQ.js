const FAQ = () => {
  return (
    <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-29xl text-link-alternate font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px]">
      <div className="self-stretch flex flex-row items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq1350:flex-wrap mq450:gap-[20px]">
        <div className="w-[500px] flex flex-col items-start justify-center py-5 px-0 box-border gap-[31px] min-w-[500px] max-w-full mq800:gap-[15px] mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch h-[116px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Frequently Asked Questions
            </h1>
            <div className="self-stretch h-[54px] relative text-lg leading-[150%] inline-block">
              Learn more about the AI book writing process and the services we
              offer.
            </div>
          </div>
          <div className="w-[104px] rounded-sm bg-link-alternate hidden flex-row items-center justify-center py-3 px-6 box-border text-base text-color-brand-black">
            <div className="flex-1 relative leading-[150%]">Contact</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[476px] max-w-full text-lg text-color-brand-black mq800:min-w-full">
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black mq800:flex-wrap">
            <b className="flex-1 relative leading-[150%] inline-block min-w-[117px] max-w-full">
              How does it work?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black mq800:flex-wrap">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="What genres do you cover?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black mq800:flex-wrap">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="Can I provide input?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black mq800:flex-wrap">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="What is the turnaround time?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black mq800:flex-wrap">
            <b className="flex-1 relative leading-[150%] inline-block min-w-[153px] max-w-full">
              How much does it cost?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
