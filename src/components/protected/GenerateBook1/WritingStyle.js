const WritingStyle = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-14 px-[47px] box-border relative max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[5px] border-solid border-link-alternate" />
      <input
        className="w-[570.2px] [border:none] [outline:none] flex font-josefin-sans text-5xl bg-[transparent] h-[11.8px] relative font-bold text-darkgray-200 text-left items-center max-w-full z-[1] mq450:text-lgi"
        placeholder="Writing Style"
        type="text"
      />
    </div>
  );
};

export default WritingStyle;
