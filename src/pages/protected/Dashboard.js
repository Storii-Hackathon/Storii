import SideBar from "../../components/protected/SideBar";
import AcountInfo from "../../components/protected/Dashboard/AcountInfo";
import TokensUsed from "../../components/protected/Dashboard/TokensUsed";
import WordsGenerated from "../../components/protected/Dashboard/WordsGenerated";
import TotalProjects from "../../components/protected/Dashboard/TotalProjects";

const Dashboard = () => {
  return (
    <div className="w-full relative [background:linear-gradient(59.76deg,_#181818,_#1e1e1e_94.58%)] overflow-hidden flex flex-row items-start justify-start gap-[61px] tracking-[normal] mq800:gap-[30px] mq450:gap-[15px] mq1300:flex-wrap">
      <SideBar
        storiiiMinWidth="unset"
        generateStoryColor="#969998"
        fillFillColor="#969998"
        templatesColor="#969998"
        groupDivColor="#969998"
        fill951IconColor="#969998"
        propColor="#969998"
      />
      <main className="w-[1049px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border max-w-full mq800:pt-[23px] mq800:box-border mq1125:pt-9 mq1125:box-border">
        <section className="self-stretch flex flex-col items-center justify-start gap-[116px] max-w-full mq800:gap-[29px] mq1125:gap-[58px]">
          <div className="self-stretch h-[402px] relative rounded-t-none rounded-br-[80px] rounded-bl-none shrink-0 flex items-center justify-center">
            <img
              className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[4px] w-full [transform:scale(1.05)]"
              loading="eager"
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <div className="w-[1007px] flex flex-row items-start justify-start py-0 pr-10 pl-5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[53px] max-w-full mq800:gap-[26px] mq1125:flex-wrap">
              <AcountInfo />
              <div className="flex-1 flex flex-col items-end justify-start gap-[63px] min-w-[392px] max-w-full mq800:gap-[31px] mq800:min-w-full mq450:gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[45px] mq800:flex-wrap mq800:gap-[22px]">
                  <TokensUsed />
                  <WordsGenerated />
                </div>
                <TotalProjects />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
