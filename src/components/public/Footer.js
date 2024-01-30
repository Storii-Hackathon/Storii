const Footer = () => {
  return (
    <footer className="self-stretch [background:linear-gradient(237.03deg,_#0d8065,_#192021)] overflow-hidden flex flex-col items-center justify-start py-20 px-16 box-border gap-[80px] max-w-full text-left text-base text-link-alternate font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
      <div className="flex flex-row items-start justify-start py-[45px] pr-0 pl-[435px] box-border gap-[32px] max-w-full mq800:gap-[16px] mq800:pl-[108px] mq800:box-border mq450:pl-5 mq450:box-border mq1350:flex-wrap mq1350:pl-[217px] mq1350:box-border">
        <div className="h-[114px] flex-1 overflow-hidden hidden max-w-full" />
        <div className="w-[441px] flex flex-row items-start justify-between py-0 pr-1 pl-0 box-border gap-[20px] max-w-full mq800:flex-wrap">
          <div className="relative leading-[150%] font-semibold">About Us</div>
          <div className="relative leading-[150%] font-semibold">
            Contact Us
          </div>
          <div className="relative leading-[150%] font-semibold">FAQs</div>
          <div className="w-[97px] relative leading-[150%] font-semibold inline-block shrink-0">
            Support
          </div>
          <div className="relative leading-[150%] font-semibold">Blog</div>
        </div>
        <div className="flex flex-row items-start justify-center py-0 pr-px pl-[236px] box-border gap-[12px] max-w-full mq800:flex-wrap mq450:pl-5 mq450:box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--facebook.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--instagram.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--x.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--linkedin.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="eager"
            alt=""
            src="/icon--youtube.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full text-sm mq800:gap-[16px]">
        <div className="self-stretch h-px relative bg-link-alternate box-border border-[1px] border-solid border-link-alternate" />
        <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq800:flex-wrap">
          <div className="relative leading-[150%]">
            © 2023 Relume. All rights reserved.
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <div className="relative [text-decoration:underline] leading-[150%]">
              Privacy Policy
            </div>
            <div className="relative [text-decoration:underline] leading-[150%]">
              Terms and Conditions
            </div>
            <div className="relative [text-decoration:underline] leading-[150%]">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
