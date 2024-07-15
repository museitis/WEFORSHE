import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/fashion-expert-connect-1st");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[476px] left-[12px] rounded-3xs [background:linear-gradient(90deg,_#f99900,_#ffe6bc)] w-[329px] h-[97px] overflow-hidden cursor-pointer text-left text-mini text-white font-roboto ${className}`}
      onClick={onFrameContainerClick}
    >
      <div className="absolute top-[26px] left-[126px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[183px] h-[37px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-darkorange-100 box-border w-[183px] h-[37px] border-[1px] border-solid border-gray-1000" />
        <b className="absolute top-[11px] left-[14.4px] leading-[16px] capitalize inline-block w-[168.6px] h-4 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Experts Advice
        </b>
      </div>
      <img
        className="absolute top-[36px] left-[285px] w-[15.7px] h-[17.8px] object-contain"
        alt=""
        src="/group-33532@2x.png"
      />
      <i className="absolute top-[68px] left-[128px] text-3xs leading-[16px] capitalize inline-block text-saddlebrown-100 w-[181px] h-[15px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Get personalized fashion tips
      </i>
    </div>
  );
};

export default FrameComponent;
