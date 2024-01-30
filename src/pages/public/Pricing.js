import Navbar from "../../components/public/Navbar";
import Header from "../../components/public/Pricing/Header";
import Content2 from "../../components/public/Pricing/Content2";
import Content1 from "../../components/public/Pricing/Content1";
import TableHeader from "../../components/public/Pricing/TableHeader";
import Content from "../../components/public/Pricing/Content";
import Accordion from "../../components/public/Accordion";
import Footer from "../../components/public/Footer";

const Pricing = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      {/* <Navbar /> */}
      <Header />
      <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-center justify-start py-28 px-5 box-border gap-[48px] max-w-full text-center text-base text-link-alternate font-text-small-link mq800:gap-[24px] mq800:pt-[47px] mq800:pb-[47px] mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border">
        <div className="w-[768px] flex flex-col items-center justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Affordable
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full text-29xl">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Pricing Options
              </h1>
              <div className="relative text-lg leading-[150%] inline-block max-w-full">
                Choose the plan that suits your needs and budget
              </div>
            </div>
          </div>
          <div className="w-[198px] flex flex-row items-center justify-center gap-[1px]">
            <button className="cursor-pointer py-3 px-[27px] bg-link-alternate rounded-sm flex flex-row items-center justify-center border-[1px] border-solid border-link-alternate hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                Monthly
              </div>
            </button>
            <button className="cursor-pointer py-3 px-[23px] bg-[transparent] w-[92px] rounded-sm box-border flex flex-row items-center justify-center border-[1px] border-solid border-link-alternate hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                Yearly
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1024px] flex flex-row items-start justify-start gap-[32px] max-w-full mq800:gap-[16px] mq1125:flex-wrap">
          <Content2 />
          <Content1 />
        </div>
      </section>
      <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full text-center text-base text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[31px] mq450:pb-[31px] mq450:box-border mq1125:pt-[47px] mq1125:pb-[47px] mq1125:box-border mq1350:pt-[73px] mq1350:pb-[73px] mq1350:box-border">
        <div className="w-[768px] flex flex-col items-center justify-start gap-[16px] max-w-full">
          <div className="self-stretch relative leading-[150%] font-semibold">
            Simplified
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Pricing Plans
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Compare features and benefits to find the right plan.
            </div>
          </div>
        </div>
        <form className="m-0 self-stretch flex flex-col items-start justify-start max-w-full">
          <TableHeader />
          <Content />
        </form>
      </section>
      <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full text-left text-29xl text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[47px] mq800:px-8 mq800:box-border mq450:gap-[20px] mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Pricing FAQs
            </h1>
            <div className="self-stretch h-[54px] relative text-lg leading-[150%] inline-block">
              Find answers to common questions about our pricing, subscription
              models, and available free trials or demos.
            </div>
          </div>
        </div>
        <Accordion
          question="How much does it cost?"
          question1="Do you offer free trials?"
          question2="What are your subscription models?"
          question3="How can I cancel my subscription?"
          question4="Are there any discounts available?"
          propMinWidth="153px"
          propMinWidth1="151px"
          propMinWidth2="232px"
          propMinWidth3="223px"
          propMinWidth4="221px"
        />
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-13xl">
          <div className="w-[560px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] shrink-0">
              <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                Still have questions?
              </h1>
              <div className="self-stretch relative text-lg leading-[150%]">
                Contact us for further assistance.
              </div>
            </div>
            <button className="cursor-pointer p-3 bg-[transparent] w-[106px] h-[50px] rounded-sm box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-brand-black hover:bg-darkslategray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-300">
              <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                Contact
              </div>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
