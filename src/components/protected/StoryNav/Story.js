const Story = () => {
  return (
    <div className="w-[323.8px] shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start pt-3 pb-[53px] pr-[9px] pl-2.5 box-border relative gap-[12px] max-w-full text-left text-xl text-link-alternate font-dm-sans">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[2px] bottom-[0px] left-[0px] rounded-xl bg-darkslategray-200" />
      <div className="w-[162px] flex flex-row items-start justify-start py-0 px-4 box-border">
        <div className="h-[28.8px] flex-1 relative flex items-center z-[1] mq450:text-base">
          Story Name
        </div>
      </div>
      <textarea
        className="[border:none] bg-link-alternate h-[168.5px] w-auto [outline:none] self-stretch relative rounded-3xs z-[1]"
        rows={8}
        cols={15}
      />
    </div>
  );
};

export default Story;
