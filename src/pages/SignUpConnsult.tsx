import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUpConnsult: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowIconClick = useCallback(() => {
    navigate("/my-cart2");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-white h-[800px] overflow-hidden text-left text-base text-black font-roboto">
      <img
        className="absolute top-[60.1px] left-[126px] w-[107.5px] h-[83.8px] object-contain"
        alt=""
        src="/image-125@2x.png"
      />
      <div className="absolute top-[144px] left-[56px] text-lgi leading-[20px] text-gray-1100 inline-block w-[248px] h-7">
        Become a fashion consultant
      </div>
      <div className="absolute top-[237px] left-[calc(50%_-_160px)] rounded-xl bg-lavender box-border w-[293px] h-11 border-[1px] border-solid border-black" />
      <div className="absolute top-[237px] left-[calc(50%_-_160px)] rounded-8xs bg-white box-border w-[319px] h-11 border-[1px] border-solid border-gray-1100" />
      <div className="absolute top-[320px] left-[calc(50%_-_160px)] rounded-8xs bg-gray-600 box-border w-[319px] h-11 border-[1px] border-solid border-gray-1100" />
      <div className="absolute top-[211px] left-[20px] text-lg">Full Name</div>
      <div className="absolute top-[248px] left-[30px] text-darkgray-100">
        Enter your name here
      </div>
      <div className="absolute top-[331px] left-[30px] text-darkgray-100">
        Choose a location
      </div>
      <div className="absolute top-[295px] left-[20px] text-mid">Location</div>
      <div className="absolute top-[403px] left-[calc(50%_-_160px)] rounded-8xs bg-gray-600 box-border w-[319px] h-11 border-[1px] border-solid border-gray-1100" />
      <div className="absolute top-[378px] left-[20px] text-mid">Age</div>
      <div className="absolute top-[485px] left-[calc(50%_-_160px)] rounded-8xs bg-gray-600 box-border w-[319px] h-11 border-[1px] border-solid border-gray-1100" />
      <div className="absolute top-[460px] left-[20px] text-mid">Contact</div>
      <div className="absolute top-[569px] left-[calc(50%_-_160px)] rounded-8xs bg-gray-600 box-border w-[319px] h-11 border-[1px] border-solid border-gray-1100" />
      <div className="absolute top-[544px] left-[20px] text-mid">Email</div>
      <div className="absolute top-[414px] left-[30px] text-darkgray-100">
        Enter your age here
      </div>
      <div className="absolute top-[496px] left-[30px] text-darkgray-100">
        +91 XXXXXXXXXX
      </div>
      <div className="absolute top-[580px] left-[30px] text-darkgray-100">
        abc@gmail.com
      </div>
      <div className="absolute top-[651px] left-[calc(50%_-_160px)] rounded-8xs bg-gray-600 box-border w-[319px] h-11 border-[1px] border-solid border-gray-1100" />
      <div className="absolute top-[626px] left-[20px] text-mid">
        Social media link
      </div>
      <div className="absolute top-[662px] left-[30px] text-darkgray-100">
        Instagram/youtube/blog/others
      </div>
      <img
        className="absolute top-[46px] left-[20px] w-[15px] h-0 hidden cursor-pointer"
        alt=""
        src="/arrow-1.svg"
        onClick={onArrowIconClick}
      />
      <div
        className="absolute top-[723px] left-[calc(50%_-_80px)] w-[159px] h-[39px] cursor-pointer text-center text-xl text-white font-montserrat"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[calc(50%_-_79.5px)] rounded-2xl bg-indianred-100 w-[159px] h-[39px]" />
        <div className="absolute top-[6px] left-[calc(50%_-_28.5px)] font-semibold inline-block w-[57px] h-3.5">
          Next
        </div>
      </div>
      <img
        className="absolute top-[38px] left-[18px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/arrow@2x.png"
        onClick={onArrowIconClick}
      />
    </div>
  );
};

export default SignUpConnsult;
