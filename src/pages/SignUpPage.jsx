import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GroupComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      if (response.status === 200) {
        // Handle success (e.g., redirect to login page)
        navigate("/login");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[74px] max-w-full text-left text-21xl text-black font-poppins mq900:gap-[37px] mq450:gap-[18px]">
      <div className="flex flex-row items-center justify-center pt-0 pb-[5px] pr-5 pl-0 box-border max-w-full">
        <h1 className="m-0 h-[60px] relative text-inherit font-medium font-inherit inline-block mq900:text-13xl mq450:text-5xl">
          Get Started Now
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="m-0 self-stretch h-[393px] flex flex-col items-start justify-start gap-[37px] max-w-full mq900:gap-[18px]"
      >
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[25px]">
          {/* <SplitFrame /> */}

          <div className="flex-1 flex flex-col items-start justify-start text-left text-mid-5 text-black font-poppins">
            <div className="flex flex-row items-start justify-start py-2">
              Username
            </div>
            <div className="self-stretch h-10 rounded-[15px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.500000953674316px] border-[1.3px] border-solid border-muted">
              <input
                className="flex-grow font-poppins outline-none font-medium text-smi-5"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex flex-row items-start justify-start pt-8 pb-2">
              Password
            </div>
            <div className="self-stretch h-10 w-[500px] outline-none rounded-[15px] box-border overflow-hidden flex flex-row items-start justify-start py-[10px] pl-[12.500000953674316px] border-[1.3px] border-solid border-muted">
              <input
                className="flex-grow  font-poppins font-medium outline-none ext-smi-5 "
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[8px]">
            <input
              className="m-0 h-[12.3px] w-[11.3px] relative rounded-10xs-5 box-border border-[1.3px] border-solid border-black"
              type="checkbox"
            />
            <div className="relative text-xs-3 font-medium font-poppins text-black text-left">
              {`I agree to the `}
              <span className="[text-decoration:underline]">{`terms & policy`}</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer border-none p-0 rounded-lg bg-darkolivegreen self-stretch h-11 relative max-w-full flex items-center justify-center"
        >
          <span className="absolute top-2 left-58 text-base font-poppins text-white text-left z-10  px-2 py-1">
            Signup
          </span>
        </button>
      </form>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-1 box-border max-w-full text-xs-3">
        <div className="h-[19.2px] flex-1 relative max-w-full">
          <div className="absolute top-[11.5px] left-[-0.2px] box-border w-[502.5px] h-[2.5px] border-t-[2.5px] border-solid border-whitesmoke" />
          <div className="absolute top-[0.3px] left-[237.3px] bg-white w-[25px] overflow-hidden flex flex-row items-center justify-center z-[1]">
            <div className="relative font-medium">Or</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[28px] text-mid-5">
        <div className="self-stretch flex flex-row items-start justify-start gap-[29px] mq900:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[155px]">
            <button className="cursor-pointer p-[5px] bg-[transparent] self-stretch rounded-smi-5 overflow-hidden flex flex-row items-center justify-center border-[1.3px] border-solid border-muted">
              <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[19px] pl-[18px] gap-[13px]">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons8google-1.svg"
                />
                <div className="relative text-mini font-medium font-poppins text-black text-left">
                  Sign in with Google
                </div>
              </div>
            </button>
          </div>
          <button className="cursor-pointer py-[5px] pr-[27px] pl-[29px] bg-[transparent] rounded-smi-5 overflow-hidden flex flex-row items-center justify-center border-[1.3px] border-solid border-muted">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className="relative text-mini font-medium font-poppins text-black text-left">
                Sign in with Apple
              </div>
            </div>
          </button>
        </div>
        <div className="h-[29px] flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border">
          <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-0.5">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-medium whitespace-pre-wrap">
                <span>{`Have an account?  `}</span>
                <span className="text-mediumblue">Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
