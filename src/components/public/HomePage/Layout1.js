import Column2 from "./Column2";

const Layout1 = () => {
  return (
    <section className="self-stretch h-[404px] bg-link-alternate overflow-hidden shrink-0 flex flex-col items-start justify-center py-28 px-16 box-border max-w-full text-left text-13xl text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq1350:h-auto mq450:gap-[20px]">
      <div className="self-stretch flex flex-row items-center justify-start gap-[48px] max-w-full shrink-0 mq800:gap-[24px] mq1350:flex-wrap">
        <Column2
          heading="Powerful Features for Efficient Writing"
          rowContentIcon="Our AI-powered platform offers lightning-fast writing, a wide range of genres, and customizable options."
          showStyleSecondarySmallFalse
          showStyleLinkSmallFalseDark
          propBackgroundColor1="#fff"
        />
        <Column2
          heading="Unleash Your Creativity with AI Assistance"
          rowContentIcon="Our platform provides intelligent suggestions and guidance to enhance your writing process."
          showStyleSecondarySmallFalse={false}
          showStyleLinkSmallFalseDark={false}
          propMinHeight="204px"
          propBackgroundColor="#fff"
          propBackgroundColor1="unset"
        />
        <Column2
          heading="Customize Your Writing Experience"
          rowContentIcon="Tailor the AI's output to match your writing style and preferences."
          showStyleSecondarySmallFalse
          showStyleLinkSmallFalseDark
          propMinHeight="unset"
          propBackgroundColor="#fff"
          propBackgroundColor1="unset"
        />
      </div>
    </section>
  );
};

export default Layout1;
