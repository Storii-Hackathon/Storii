const Content3 = ({ price }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-center text-37xl text-link-alternate font-text-small-link mq450:gap-[16px]">
      <div className="flex flex-row items-end justify-start">
        <b className="relative leading-[120%] mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
          {price}
        </b>
        <b className="h-[42px] w-0 relative text-13xl leading-[130%] inline-block mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]" />
      </div>
      <button className="cursor-pointer [border:none] p-3 bg-link-alternate self-stretch rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
        <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
          Get started
        </div>
      </button>
    </div>
  );
};

export default Content3;
