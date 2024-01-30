import Navbar from "../../components/public/Navbar";
import Layout4 from "../../components/public/Product/Layout4";
import Layout3 from "../../components/public/Product/Layout3";
import Layout2 from "../../components/public/Product/Layout2";
import Testimonial1 from "../../components/public/Product/Testimonial1";
import Accordion from "../../components/public/Accordion";
import Contact from "../../components/public/Contact";
import Footer from "../../components/public/Footer";

const Products = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal]">
      {/* <Navbar
        button="Menu"
        frametwettBorderBottom="1px solid #000"
        stylePrimarySmallTrueDarPadding="20px 0px"
        stylePrimarySmallTrueDarBackgroundColor="unset"
        buttonBackgroundColor="#000"
      /> */}
      <section className="self-stretch bg-link-alternate overflow-hidden flex flex-row items-center justify-center p-28 box-border max-w-full text-center text-37xl text-color-brand-black font-text-small-link mq800:gap-[20px] mq800:pl-7 mq800:pr-7 mq800:box-border mq1125:gap-[40px] mq1125:pl-14 mq1125:pr-14 mq1125:box-border">
        <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            Discover AI Books
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Explore our wide range of AI book writing products and experience
            the future of literature.
          </div>
        </div>
      </section>
      <Layout4 />
      <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq800:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[150%] font-semibold">
                  Revolutionary
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
                  <h1 className="m-0 self-stretch h-[116px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                    Unleash the Power of AI in Writing
                  </h1>
                  <div className="self-stretch relative text-lg leading-[150%]">
                    Our standout product utilizes cutting-edge AI technology to
                    create compelling and engaging content. With its unique
                    features and benefits, it revolutionizes the way books are
                    written.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-sm bg-link-alternate box-border flex flex-row items-center justify-start py-3 pr-[13px] pl-[11px] gap-[25px] min-h-[132px] text-left text-xl border-[1px] border-solid border-color-brand-black mq800:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[184px]">
                  <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                    Enhanced Writing
                  </b>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Experience the future of writing with our AI-powered book
                    creation platform.
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[184px]">
                  <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                    Efficient Process
                  </b>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Streamline your writing process and produce high-quality
                    books in less time.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px] text-left">
              <button className="cursor-pointer py-3 px-[21px] bg-[transparent] rounded-sm [background:linear-gradient(19.15deg,_#222a2d,_#2c3a34)] flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-brand-black hover:bg-darkslategray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-300">
                <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                  Learn More
                </div>
              </button>
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative leading-[150%] whitespace-nowrap">
                  Sign Up
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icon--chevronright-1.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
            loading="eager"
            alt=""
            src="/placeholder-image2@2x.png"
          />
        </div>
      </section>
      <Layout3 />
      <Layout2 />
      <Testimonial1 />
      <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-center text-29xl text-link-alternate font-text-small-link mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1125:gap-[40px] mq1125:pl-8 mq1125:pr-8 mq1125:box-border">
        <div className="w-[768px] flex flex-col items-center justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Discover Our AI Writing Products
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Unlock the Power of AI to Create Compelling and Engaging Content
            </div>
          </div>
          <div className="w-[248px] flex flex-row items-start justify-start pt-4 px-0 pb-0 box-border gap-[16px]">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-link-alternate rounded-sm flex flex-row items-center justify-center hover:bg-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                Purchase
              </div>
            </button>
            <button className="cursor-pointer py-3 px-[21px] bg-[transparent] flex-1 rounded-sm flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-link-alternate hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                Try Demo
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full text-left text-29xl text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[47px] mq800:px-8 mq800:box-border mq450:gap-[20px] mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Frequently Asked Questions
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Find answers to commonly asked questions about our products, their
              capabilities, and user requirements.
            </div>
          </div>
        </div>
        <Accordion
          question="How does it work?"
          question1="What are the benefits?"
          question2="Is it easy to use?"
          question3="What are the system requirements?"
          question4="Is customer support available?"
          propMinWidth="117px"
          propMinWidth1="145px"
          propMinWidth2="106px"
          propMinWidth3="229px"
          propMinWidth4="197px"
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
      <Contact
        subheading="Inquiry"
        text="Have any questions or need support regarding our products? We're here to help!"
        link="hello@relume.io"
        placeholderImage="/placeholder-image@2x.png"
        propGap="80px"
        propAlignSelf="stretch"
      />
      <Footer />
    </div>
  );
};

export default Products;
