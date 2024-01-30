import SideBar from "../../components/protected/SideBar";
import Search from "../../components/protected/StoryNav/Search";
import Story from "../../components/protected/StoryNav/Story";

const StoryNav = () => {
  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-row items-start justify-start gap-[52px] tracking-[normal] mq700:gap-[26px] mq900:flex-wrap">
      <SideBar />
      <div className="w-[639px] flex flex-col items-start justify-start pt-[62px] px-0 pb-0 box-border min-w-[639px] max-w-full mq700:pt-10 mq700:box-border mq700:min-w-full mq900:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[155px] max-w-full mq450:gap-[39px] mq700:gap-[77px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full">
            <Search />
          </div>
          <Story />
        </div>
      </div>
    </div>
  );
};

export default StoryNav;
