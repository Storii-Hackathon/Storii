import React, { useState } from 'react';

import GroupComponent from "./SignUpPage";

const Register = () => {
  
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-between pl-[257px] box-border gap-[20px] tracking-[normal] mq900:pl-16 mq900:box-border mq1275:pl-32 mq1275:box-border mq1600:flex-wrap">
    <div className="w-[505px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border min-w-[505px] max-w-full mq900:pt-[60px] mq900:box-border mq900:min-w-full mq1275:pt-[92px] mq1275:box-border mq1600:flex-1">
      <div className="self-stretch flex flex-row items-center justify-center max-w-full">
        <GroupComponent />
      </div>
    </div>
    <img
      className="h-screen w-[811px] relative rounded-tl-[56.25px] rounded-tr-none rounded-br-none rounded-bl-[56.25px] object-cover max-w-full"
      loading="eager"
      alt=""
      src="/chrislee70l1tdai6rmunsplash-1@2x.png"
    />
  </div>
  );
};

export default Register;
