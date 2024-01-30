const Search = () => {
  return (
    <div className="flex-1 flex flex-row items-center justify-start pt-5 px-10 pb-[19px] box-border relative max-w-full text-left text-xl text-gainsboro-100 font-dm-sans">
      <img
        className="h-full w-full absolute my-0 mx-[!important] top-[-0.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-11xl max-w-full overflow-hidden max-h-full"
        loading="eager"
        alt=""
        src="/rectangle-14.svg"
      />
      <div className="h-7 relative flex items-center z-[1] mq450:text-base">
        Search
      </div>
    </div>
  );
};

export default Search;
