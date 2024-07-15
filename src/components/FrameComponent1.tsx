import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/fashion-expert-connect-1st");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[154px] left-[12px] rounded-3xs [background:linear-gradient(90deg,_#bb4056,_#be8a94)] w-[329px] h-[97px] overflow-hidden cursor-pointer text-left text-mini text-white font-roboto ${className}`}
      onClick={onFrameContainerClick}
    >
      <img
        className="absolute top-[-5px] left-[0px] w-[125.8px] h-[136.1px] object-contain"
        alt=""
        src="/woman7800771-1280@2x.png"
      />
      <div className="absolute top-[26px] left-[126px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[183px] h-[37px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-maroon box-border w-[183px] h-[37px] border-[1px] border-solid border-gray-1000" />
        <b className="absolute top-[11px] left-[12.2px] leading-[16px] capitalize inline-block w-[118.3px] h-4 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Choose Styling
        </b>
      </div>
      <img
        className="absolute top-[36px] left-[285px] w-[15.7px] h-[17.8px] object-contain"
        alt=""
        src="/group-33532@2x.png"
      />
      <i className="absolute top-[68px] left-[128px] text-3xs leading-[16px] capitalize inline-block w-[156px] h-[15px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Get tips to style stunning outfits
      </i>
    </div>
  );
};

export default FrameComponent1;
