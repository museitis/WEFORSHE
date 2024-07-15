import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MyntraHomePage2nd: FunctionComponent = () => {
  const navigate = useNavigate();

  const onXTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/my-cart2");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-white h-[800px] overflow-hidden text-left text-xl text-white font-roboto">
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[360px] h-[800px] object-cover"
        alt=""
        src="/screenshot-2024071222163676-2@2x.png"
      />
      <img
        className="absolute top-[747px] left-[0px] rounded-t-none rounded-b-xl w-[360px] h-[53px] object-cover"
        alt=""
        src="/screenshot-2024071222042185-b646f155b0cdad03173576752c921a5a-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[360px] h-[800px]" />
      <div className="absolute top-[520px] left-[176px] leading-[20px]">X</div>
      <div className="absolute top-[689px] left-[296px] w-10 h-10">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro box-border w-10 h-10 border-[2px] border-solid border-white" />
        <div
          className="absolute top-[10px] left-[13px] leading-[20px] cursor-pointer"
          onClick={onXTextClick}
        >
          X
        </div>
      </div>
      <div className="absolute top-[578px] left-[116px] w-[234px] h-[59px]">
        <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[234px] h-[59px]" />
        <img
          className="absolute top-[2px] left-[4px] rounded-xl w-[220px] h-[55px] object-cover"
          alt=""
          src="/screenshot-2024071223153688-b646f155b0cdad03173576752c921a5a-1@2x.png"
        />
      </div>
      <div className="absolute top-[513px] left-[116px] w-[234px] h-[59px] text-xs-5 text-darkslategray-100">
        <div
          className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[234px] h-[59px] cursor-pointer"
          onClick={onRectangleClick}
        />
        <b
          className="absolute top-[12px] left-[61px] text-mini leading-[20px] cursor-pointer"
          onClick={onRectangleClick}
        >
          Fashion LinkUp
        </b>
        <div className="absolute top-[31px] left-[62px] leading-[20px] text-gray-100">
          Connect with your fashion guru
        </div>
        <div className="absolute top-[10px] left-[187px] rounded-xl bg-crimson-100 w-10 h-[19px]" />
        <b className="absolute top-[10px] left-[195px] leading-[20px] text-white">
          New
        </b>
        <img
          className="absolute top-[2px] left-[2px] rounded-[18px] w-[58px] h-14 object-cover"
          alt=""
          src="/image-131@2x.png"
        />
      </div>
      <div className="absolute top-[643px] left-[116px] w-[234px] h-8 text-sm text-darkslategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[234px] h-8" />
        <b className="absolute top-[6px] left-[10px] leading-[20px]">
          Explore more features
        </b>
        <img
          className="absolute top-[10px] left-[215px] w-[10.3px] h-[12.8px] object-contain"
          alt=""
          src="/group-117@2x.png"
        />
      </div>
    </div>
  );
};

export default MyntraHomePage2nd;
