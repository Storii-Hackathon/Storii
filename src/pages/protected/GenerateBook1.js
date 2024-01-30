import SideBar from "../../components/protected/SideBar";
import SummaryRectangle from "../../components/protected/GenerateBook1/SummaryRectangle";

const GenerateBook1 = () => {
  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-row items-start justify-start gap-[72px] tracking-[normal] mq450:gap-[18px] mq750:gap-[36px] mq1275:flex-wrap">
      <SideBar />
      <main className="w-[1010px] flex flex-col items-start justify-start pt-[123px] px-0 pb-0 box-border max-w-full mq750:pt-[52px] mq750:box-border mq1100:pt-20 mq1100:box-border">
        <section className="self-stretch flex flex-col items-center justify-start gap-[90px] max-w-full text-left text-[64px] text-whitesmoke font-josefin-sans mq750:gap-[22px] mq1100:gap-[45px]">
          <div className="w-[812px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
            <h1 className="m-0 h-20 w-[730px] relative text-inherit font-bold font-inherit flex items-center shrink-0 max-w-full mq450:text-19xl mq750:text-[51px]">
              Enter Book Summary
            </h1>
          </div>
          <SummaryRectangle />
        </section>
      </main>
    </div>
  );
};

export default GenerateBook1;
