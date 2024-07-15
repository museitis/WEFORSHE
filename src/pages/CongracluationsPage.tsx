import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CongracluationsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onArrowIconClick = useCallback(() => {
    navigate("/signup-connsult");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-white h-[800px] overflow-hidden text-center text-xl text-gray-1100 font-montserrat">
      <img
        className="absolute top-[60.1px] left-[126px] w-[107.5px] h-[83.8px] object-contain"
        alt=""
        src="/image-1251@2x.png"
      />
      <div className="absolute top-[389px] left-[28px] text-sm leading-[20px] font-roboto inline-block w-[304px] h-[22px]">
        You’ve sucessfully submitted your request for fashion consultant. We’ll
        let you know about the confirmation.
      </div>
      <div
        className="absolute top-[507px] left-[calc(50%_-_80px)] w-[159px] h-[39px] cursor-pointer text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[calc(50%_-_79.5px)] rounded-2xl bg-indianred-100 w-[159px] h-[39px]" />
        <div className="absolute top-[6px] left-[calc(50%_-_40.5px)] font-semibold inline-block w-[81px] h-3.5">
          Home
        </div>
      </div>
      <div className="absolute top-[360px] left-[calc(50%_-_98px)] font-semibold text-black inline-block w-[195px] h-3.5">
        Congratulations!
      </div>
      <img
        className="absolute top-[284px] left-[146px] w-[67px] h-[67px] object-contain"
        alt=""
        src="/mask-group8@2x.png"
      />
      <img
        className="absolute top-[38px] left-[18px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/arrow@2x.png"
        onClick={onArrowIconClick}
      />
    </div>
  );
};

export default CongracluationsPage;
