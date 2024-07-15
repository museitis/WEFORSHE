import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[360px] h-[88px] text-left text-lg text-white font-roboto ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none bg-indianred-100 w-[360px] h-[88px] flex flex-row items-center justify-end">
        <b className="w-[159px] absolute !m-[0] top-[34px] left-[104px] leading-[20px] inline-block z-[0]">
          Abha’s Dashboard
        </b>
      </div>
      <img
        className="absolute top-[32px] left-[305px] w-8 h-8"
        alt=""
        src="/group-34263.svg"
      />
      <div className="absolute top-[52px] left-[100px] text-2xs font-open-sans text-gray-300 text-center inline-block w-[181px] h-[9px]">
        Fashion Stylist and Expert Advisor
      </div>
      <img
        className="absolute top-[21px] left-[44px] w-[46.5px] h-[46.5px] object-cover"
        alt=""
        src="/mask-group10@2x.png"
      />
      <img
        className="absolute top-[34px] left-[13px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/group-33531@2x.png"
        onClick={onGroupIconClick}
      />
      <div className="absolute top-[34px] left-[331px] rounded-[50%] bg-springgreen w-[5.3px] h-1.5" />
    </div>
  );
};

export default GroupComponent;
