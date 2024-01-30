const FAQ1 = () => {
  return (
    <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-center text-29xl text-link-alternate font-text-small-link mq800:pt-[47px] mq800:pb-[47px] mq800:box-border mq450:gap-[20px] mq1125:gap-[40px] mq1125:py-[73px] mq1125:px-8 mq1125:box-border">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Frequently Asked Questions
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Find answers to commonly asked questions about our company's
            history, values, and future goals.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-lg text-color-brand-black">
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row flex-wrap items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="What is the company's history?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row flex-wrap items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="What are our values?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row flex-wrap items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="What are our future goals?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row flex-wrap items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black">
            <input
              className="w-[calc(100%_-_78px)] [border:none] [outline:none] inline-block font-text-small-link text-lg bg-[transparent] h-[27px] flex-1 relative leading-[150%] font-bold text-color-brand-black text-left min-w-[300px] max-w-full"
              placeholder="Can I submit my manuscript?"
              type="text"
            />
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row flex-wrap items-center justify-center py-5 px-[23px] [row-gap:20px] max-w-full border-[1px] border-solid border-color-brand-black">
            <b className="flex-1 relative leading-[150%] inline-block min-w-[148px] max-w-full">
              How can I contact you?
            </b>
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
        <div className="w-[560px] flex flex-col items-center justify-start gap-[24px] max-w-full text-13xl">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
              Still have questions?
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Contact us for further assistance.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-link-alternate rounded-sm flex flex-row items-center justify-center hover:bg-gainsboro-100">
            <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
              Contact
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ1;
