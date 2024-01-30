import Column1 from "./Column1";

const Testimonial = () => {
  return (
    <section className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-[80px] max-w-full text-left text-29xl text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border">
      <div className="w-[560px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Author Testimonials
        </h1>
        <div className="self-stretch relative text-lg leading-[150%]">
          Read what our satisfied authors and publishers have to say.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0.5 px-0 box-border gap-[32px] max-w-full text-xl text-link-alternate mq800:gap-[16px]">
        <Column1
          quote="Our experience with the AI writing platform has been incredible."
          nameSurname="John Doe"
          text="Author, XYZ Publishing"
          propHeight="386.9px"
        />
        <Column1
          quote="The AI writing platform has revolutionized our publishing process."
          nameSurname="Jane Smith"
          text="Publisher, ABC Books"
          propHeight="unset"
          propHeight1="unset"
        />
        <Column1
          quote="Using AI to write books has saved us time and resources."
          nameSurname="David Johnson"
          text="Editor, XYZ Publishing"
          propHeight="unset"
          propHeight1="56px"
        />
      </div>
    </section>
  );
};

export default Testimonial;
