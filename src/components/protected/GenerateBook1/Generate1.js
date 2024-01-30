const Generate1 = () => {
  return (
    <button className="cursor-pointer [border:none] pt-4 px-[15px] pb-[17px] bg-[transparent] w-[229px] flex flex-row items-center justify-end box-border relative opacity-[0.8] mq450:w-[calc(100%_-_40px)]">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-mediumaquamarine shadow-[2px_4px_4px_rgba(0,_0,_0,_0.5)]" />
      <b className="h-[43px] w-[178px] relative text-5xl flex font-josefin-sans text-link-alternate text-left items-center shrink-0 pl-5 z-[1] mq450:text-lgi">
        Generate
      </b>
    </button>
  );
};

export default Generate1;
