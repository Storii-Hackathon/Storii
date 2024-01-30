import Content4 from "./Content4";

const Contact1 = () => {
  return (
    <section className="bg-link-alternate overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-13xl text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border">
      <div className="w-[1312px] overflow-x-auto flex flex-row items-center justify-start gap-[48px] max-w-full mq800:gap-[24px]">
        <div className="w-[405.3px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <input
            className="m-0 w-12 h-12 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                Contact
              </h1>
              <div className="self-stretch relative text-base leading-[150%]">
                Feel free to reach out to us for more information or partnership
                opportunities.
              </div>
            </div>
            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%] whitespace-nowrap">
              hello@relume.io
            </div>
          </div>
        </div>
        <Content4
          iconPhone="/icon--phone1.svg"
          heading="Phone"
          text="You can contact us at any time for assistance or inquiries."
          link="+1 (555) 000-0000"
        />
        <Content4
          iconPhone="/icon--map1.svg"
          heading="Office"
          text="Visit our office for a personal consultation or to discuss potential collaborations."
          link="123 Sample St, Sydney NSW 2000 AU"
        />
      </div>
    </section>
  );
};

export default Contact1;
