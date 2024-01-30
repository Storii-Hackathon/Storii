import SideBar from "../../components/protected/SideBar";
import Generate from "../../components/protected/GenerateBook/Generate";

const GenerateBook = () => {
  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-row items-start justify-start gap-[55px] tracking-[normal] mq750:gap-[27px] mq1250:flex-wrap">
      <div className="w-[258px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
        <SideBar />
      </div>
      <section className="w-[1002px] flex flex-col items-start justify-start pt-24 px-0 pb-0 box-border max-w-full text-left text-29xl text-link-alternate font-josefin-sans mq750:pt-[62px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="w-[409px] flex flex-row items-start justify-start py-0 px-[37px] box-border max-w-full">
            <h1 className="m-0 h-[18.6px] flex-1 relative text-inherit font-bold font-inherit flex items-center max-w-full mq450:text-10xl mq750:text-19xl">
              Outline
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[89px] max-w-full text-3xl mq750:gap-[22px] mq1100:flex-wrap mq1100:gap-[44px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border min-w-[461px] max-w-full mq450:pt-[45px] mq450:box-border mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 box-border relative gap-[51px] min-h-[354px] max-w-full mq450:gap-[25px]">
                <textarea
                  className="bg-gray-200 h-[279.3px] w-full [outline:none] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-31xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[4px] border-solid border-link-alternate"
                  rows={14}
                  cols={36}
                />
                <b className="w-[350.3px] h-[55.2px] relative flex items-center shrink-0 max-w-full mq450:text-lg">
                  Chapter 1
                </b>
                <div className="w-[398px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-darkgray-100">
                  <b className="h-[55.2px] flex-1 relative flex items-center max-w-full shrink-0 z-[1] mq450:text-lg">
                    Chapter 1
                  </b>
                </div>
              </div>
            </div>
            <Generate />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenerateBook;
