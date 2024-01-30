import EnterBookSummary from "./EnterBookSummary";
import ChapterAmount from "./ChapterAmount";
import WritingStyle from "./WritingStyle";
import Generate1 from "./Generate1";

const SummaryRectangle = () => {
  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[49px] max-w-full mq750:gap-[24px]">
      <EnterBookSummary />
      <ChapterAmount />
      <div className="self-stretch flex flex-col items-center justify-start gap-[33px] max-w-full mq750:gap-[16px]">
        <WritingStyle />
        <Generate1 />
      </div>
    </form>
  );
};

export default SummaryRectangle;
