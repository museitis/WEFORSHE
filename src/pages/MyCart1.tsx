import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MyCart1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/my-cart");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-whitesmoke h-[800px] overflow-hidden text-left text-xs text-white font-roboto">
      <div className="absolute top-[1px] left-[0px] [background:linear-gradient(180deg,_#bdabfa_60%,_#fff)] w-[360px] h-[799px]">
        <div className="absolute top-[-7px] left-[-1px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.1)] bg-white w-[364px] h-[806px]" />
        <div className="absolute top-[542px] left-[157px] leading-[16px] capitalize text-gray-800 inline-block w-[45px] h-[27px]">
          STEP 1
        </div>
        <div className="absolute top-[609px] left-[16px] leading-[16px] text-gray-900 text-center inline-block w-80 h-[41px]">
          Fill in your details and select the specialization that best suits
          your expertise
        </div>
        <div className="absolute top-[577px] left-[81px] text-mini leading-[16px] capitalize text-gray-200 inline-block w-[207px] h-[21px]">
          Create Your Consultant Profile
        </div>
        <div
          className="absolute top-[699px] left-[16px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-80 h-10 cursor-pointer text-xl"
          onClick={onGroupContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-indianred-100 box-border w-80 h-10 border-[1px] border-solid border-gray-1000" />
          <b className="absolute top-[10px] left-[137px] leading-[16px] capitalize inline-block w-12 h-[5px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Next
          </b>
        </div>
        <div className="absolute top-[501px] left-[163px] rounded-[50%] bg-crimson-200 w-[5.3px] h-1.5" />
        <div className="absolute top-[501px] left-[177.9px] rounded-[50%] bg-peachpuff w-[5.3px] h-1.5" />
        <div className="absolute top-[501px] left-[191.9px] rounded-[50%] bg-peachpuff w-[5.3px] h-1.5" />
        <div
          className="absolute top-[29px] left-[280px] rounded-8xs bg-crimson-300 w-[57px] h-[19px] cursor-pointer"
          onClick={onGroupContainerClick}
        />
        <b className="absolute top-[29px] left-[296px] text-xs-5 leading-[20px]">
          Skip
        </b>
        <img
          className="absolute top-[49px] left-[-2px] w-[323px] h-[494px] object-cover"
          alt=""
          src="/untitled-designremovebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MyCart1;
