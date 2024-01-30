import Navbar from "../../components/public/Navbar";
import Header1 from "../../components/public/HomePage/Header1";
import Layout1 from "../../components/public/HomePage/Layout1";
import Layout from "../../components/public/HomePage/Layout";
import Testimonial from "../../components/public/HomePage/Testimonial";
import FAQ from "../../components/public/HomePage/FAQ";
import Contact from "../../components/public/Contact";
import Footer from "../../components/public/Footer";

const HomePage = () => {
  return (
    // <div className="w-full relative flex flex-row items-start justify-center pt-0 px-0 box-border tracking-[normal]">
    //   <main className="flex-1 bg-link-alternate flex flex-col items-start justify-start max-w-full">
    <>

      <Header1 />
      <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border min-h-[904px] max-w-full text-center text-base text-link-alternate font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq800:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[150%] font-semibold">
                  Revolutionary
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
                  <h1 className="m-0 self-stretch h-[116px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                    Generate E-books in under 20 Minutes
                  </h1>
                  <div className="self-stretch relative text-lg leading-[150%]">
                    Our cutting-edge AI technology is revolutionizing the way
                    books are written. With our advanced algorithms, we can
                    create captivating narratives that captivate readers and
                    push the boundaries of storytelling.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[24px] text-left text-xl mq800:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px]">
                  <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                    Innovative Approach
                  </b>
                  <div className="self-stretch h-[72px] relative text-base leading-[150%] inline-block">
                    We combine the brilliance of artificial intelligence with
                    the creativity of human authors.
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px]">
                  <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                    Unmatched Quality
                  </b>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Our AI-generated books are of the highest quality,
                    delivering immersive and engaging reading experiences.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px] text-left">
              <button className="cursor-pointer [border:none] py-3 px-[22px] bg-link-alternate rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
                <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                  Learn More
                </div>
              </button>
              <div className="h-6 hidden flex-row items-center justify-center gap-[8px]">
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
            loading="eager"
            alt=""
            src="/placeholder-image1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch h-[360px] bg-link-alternate overflow-hidden shrink-0 flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-left text-21xl text-link-alternate font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq1350:h-auto mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border">
        <div className="self-stretch rounded-[15px] [background:linear-gradient(19.15deg,_#222a2d,_#2c3a34)] shadow-[-9px_11px_4px_#767676] box-border flex flex-row flex-wrap items-center justify-start py-12 pr-[49px] pl-[47px] gap-[80px] max-w-full shrink-0 border-[1px] border-solid border-color-brand-black mq800:gap-[40px] mq1350:pl-[23px] mq1350:pr-6 mq1350:box-border mq450:gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[577px] max-w-full mq1125:min-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
              Discover the Power of AI
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Unlock the Potential of AI in Writing
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-3 px-[22px] bg-link-alternate rounded-sm flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-color-brand-black text-left">
                Learn More
              </div>
            </button>
            <button className="cursor-pointer py-3 px-[21px] bg-[transparent] w-[105px] rounded-sm box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-link-alternate hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left">
                Sign Up
              </div>
            </button>
          </div>
        </div>
      </section>
      <Layout1 />
      <Layout />
      <Testimonial />
      <FAQ />
      <Contact
        subheading="Inquiries"
        text="Have questions or need more information? Fill out the form below and we'll get back to you."
        link="info@storrii.gen"
        placeholderImage="/placeholder-image@2x.png"
        propGap="91px"
        propMinHeight="520px"
        propAlignSelf="unset"
      />
      <Footer />
      {/* //   </main>
    // </div> */}
    </>
  );
};

export default HomePage;
