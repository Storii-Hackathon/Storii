import Navbar from "../../components/public/Navbar";
import Header2 from "../../components/public/AboutUs/Header2";
import Testimonial2 from "../../components/public/AboutUs/Testimonial2";
import FAQ1 from "../../components/public/AboutUs/FAQ1";
import Contact1 from "../../components/public/AboutUs/Contact1";
import Footer from "../../components/public/Footer";

const AboutUs = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal]">
      {/* <Navbar
        button="Menu"
        frametwettBorderBottom="1px solid #000"
        stylePrimarySmallTrueDarPadding="20px 0px"
        buttonBackgroundColor="#000"
      /> */}
      <Header2 />
      <section className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-21xl text-link-alternate font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border min-w-[400px] max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <h1 className="m-0 self-stretch h-36 relative text-inherit leading-[120%] font-bold font-inherit inline-block mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                Unlocking the power of AI to revolutionize the world of
                literature.
              </h1>
              <div className="self-stretch relative text-lg leading-[150%]">
                Our startup was born out of a passion for both technology and
                storytelling. We saw an opportunity to harness the potential of
                artificial intelligence to create compelling narratives and push
                the boundaries of what is possible in the world of literature.
                Our journey has been one of innovation, exploration, and a
                relentless pursuit of excellence.
              </div>
            </div>
          </div>
          <img
            className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
            loading="eager"
            alt=""
            src="/placeholder-image3@2x.png"
          />
        </div>
      </section>
      <Testimonial2 />
      <FAQ1 />
      <Contact1 />
      <Footer />
    </div>
  );
};

export default AboutUs;
