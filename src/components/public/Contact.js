import { useMemo } from "react";

const Contact = ({
  subheading,
  text,
  link,
  placeholderImage,
  propGap,
  propMinHeight,
  propAlignSelf,
}) => {
  const contact15Style = useMemo(() => {
    return {
      gap: propGap,
      minHeight: propMinHeight,
    };
  }, [propGap, propMinHeight]);

  const textStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <section
      className="self-stretch bg-link-alternate overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full text-center text-base text-color-brand-black font-text-small-link mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px]"
      style={contact15Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[476px] max-w-full mq800:min-w-full">
          <div className="relative leading-[150%] font-semibold">
            {subheading}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Get in Touch
            </h1>
            <div
              className="self-stretch relative text-lg leading-[150%]"
              style={textStyle}
            >
              {text}
            </div>
          </div>
        </div>
        <div className="w-[500px] overflow-x-auto shrink-0 flex flex-col items-start justify-start py-2 px-0 box-border gap-[24px] min-w-[500px] max-w-full text-left text-xl mq800:min-w-full mq1350:flex-1">
          <div className="w-[500px] flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/icon--envelope.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                Email
              </b>
              <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%] whitespace-nowrap">
                {link}
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/icon--phone.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                Phone
              </b>
              <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
                +1 (555) 000-0000
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/icon--map.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                Office
              </b>
              <div className="self-stretch relative text-base leading-[150%]">
                123 Sample St, Sydney NSW 2000 AU
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src={placeholderImage}
      />
    </section>
  );
};

export default Contact;
