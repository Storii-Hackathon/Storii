import List from "./List";

const Content = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-color-brand-black font-text-small-link">
      <div className="self-stretch box-border flex flex-row items-start justify-start py-5 px-0 max-w-full border-b-[1px] border-solid border-color-brand-black">
        <input
          className="w-full [border:none] [outline:none] inline-block font-text-small-link text-xl bg-[transparent] h-7 flex-1 relative leading-[140%] font-bold text-color-brand-black text-left min-w-[250px] max-w-full mq450:text-base mq450:leading-[22px]"
          placeholder="Feature Category"
          type="text"
        />
      </div>
      <List
        text="Powerful data analytics tools"
        text1="Customizable reporting options"
        text2="Advanced security features"
        text3="24/7 customer support"
        textPlaceholder="Integration with popular tools"
      />
      <div className="self-stretch box-border flex flex-row items-start justify-start py-5 px-0 max-w-full border-b-[1px] border-solid border-color-brand-black">
        <input
          className="w-full [border:none] [outline:none] inline-block font-text-small-link text-xl bg-[transparent] h-7 flex-1 relative leading-[140%] font-bold text-color-brand-black text-left min-w-[250px] max-w-full mq450:text-base mq450:leading-[22px]"
          placeholder="Feature Category"
          type="text"
        />
      </div>
      <List
        text="Real-time performance tracking"
        text1="Customizable dashboards and widgets"
        text2="Advanced data visualization tools"
        text3="Collaboration and sharing features"
        textPlaceholder="Integration with third-party apps"
      />
      <div className="self-stretch box-border flex flex-row items-start justify-start py-5 px-0 max-w-full border-b-[1px] border-solid border-color-brand-black">
        <input
          className="w-full [border:none] [outline:none] inline-block font-text-small-link text-xl bg-[transparent] h-7 flex-1 relative leading-[140%] font-bold text-color-brand-black text-left min-w-[250px] max-w-full mq450:text-base mq450:leading-[22px]"
          placeholder="Feature Category"
          type="text"
        />
      </div>
      <List
        text="Automated data cleansing and enrichment"
        text1="AI-powered predictive analytics"
        text2="Custom data modeling and segmentation"
        text3="Real-time data integration capabilities"
        textPlaceholder="Advanced machine learning algorithms"
      />
    </div>
  );
};

export default Content;
