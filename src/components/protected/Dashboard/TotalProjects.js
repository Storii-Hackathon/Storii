const TotalProjects = () => {
  return (
    <div className="self-stretch rounded-xl [background:linear-gradient(19.15deg,_#222a2d,_#2c3a34)] shadow-[0px_4px_30px_10px_rgba(0,_0,_0,_0.2),_0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-[5px] px-[25px] pb-[26px] text-left text-lg text-dimgray-100 font-josefin-sans">
      <div className="w-[137px] h-[55px] relative flex items-center shrink-0">
        Total Projects
      </div>
      <div className="w-[141px] h-[95px] relative text-sm">
        <div className="absolute top-[40px] left-[6px] flex items-center w-[137px] h-[55px]">
          total projects
        </div>
        <div className="absolute w-[calc(100%_-_4px)] top-[0px] left-[0px] text-17xl font-medium font-text-small-link text-burlywood flex items-center h-[55px] mq800:text-10xl mq450:text-3xl">
          3
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;
