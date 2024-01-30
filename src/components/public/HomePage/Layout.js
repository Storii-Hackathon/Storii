const Layout = () => {
  return (
    <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-link-alternate font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq800:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[150%] font-semibold">
                Innovative
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                  Discover 100+ Templates
                </h1>
                <div className="self-stretch relative text-lg leading-[150%]">
                  Discover the cost-effective and creative power of AI book
                  writing. Our startup utilizes artificial intelligence to
                  revolutionize the way books are written, providing authors
                  with innovative solutions and endless possibilities.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[24px] text-left text-xl mq800:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px]">
                <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                  Cost-Effective
                </b>
                <div className="self-stretch h-[72px] relative text-base leading-[150%] inline-block">
                  Save time and money by leveraging AI technology to generate
                  high-quality book content.
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px]">
                <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                  Creative Freedom
                </b>
                <div className="self-stretch relative text-base leading-[150%]">
                  Unleash your imagination and explore new storytelling
                  possibilities with AI-assisted writing.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[200px] hidden flex-row items-center justify-start pt-4 px-0 pb-0 box-border gap-[24px] text-left text-color-brand-black">
            <div className="h-12 rounded-sm bg-link-alternate flex flex-row items-center justify-center py-3 px-6 box-border whitespace-nowrap">
              <div className="self-stretch relative leading-[150%]">
                Learn More
              </div>
            </div>
            <div className="h-6 flex flex-row items-center justify-center gap-[8px] text-link-alternate">
              <div className="self-stretch relative leading-[150%] whitespace-nowrap">
                Sign Up
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="h-[640px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
          alt=""
          src="/placeholder-image-1@2x.png"
        />
      </div>
    </section>
  );
};

export default Layout;
