import Column3 from "./Column3";

const Layout4 = () => {
  return (
    <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-5xl text-link-alternate font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px]">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[48px] max-w-full mq800:gap-[24px]">
        <Column3
          heading="AI Book Writing Services"
          arrowIcon="We offer a range of AI book writing services, including fiction, non-fiction, and research-based writing."
        />
        <Column3
          heading="Fiction Writing Services"
          arrowIcon="Our AI-powered fiction writing services create captivating stories that will keep readers engaged."
          propHeight="unset"
        />
        <Column3
          heading="Non-Fiction Writing Services"
          arrowIcon="Our AI-powered non-fiction writing services provide well-researched and informative content."
          propHeight="72px"
        />
      </div>
    </section>
  );
};

export default Layout4;
