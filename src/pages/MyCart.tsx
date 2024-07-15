import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const MyCart: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/fashion-expert-connect-1st");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/my-cart3");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-whitesmoke h-[800px] overflow-hidden text-left text-lg text-gray-200 font-roboto">
      <div className="absolute top-[1px] left-[0px] w-[360px] h-[799px]">
        <div className="absolute top-[1px] left-[0px] bg-white w-[388px] h-[86px] flex flex-row items-center justify-end gap-[10px]">
          <div className="w-[360px] relative h-16 z-[0]" />
          <b className="w-[212px] absolute !m-[0] top-[45px] left-[46px] leading-[20px] inline-block z-[1]">
            Find Fashion Consultant
          </b>
        </div>
        <img
          className="absolute top-[46px] left-[14px] w-5 h-5 object-cover cursor-pointer"
          alt=""
          src="/arrow@2x.png"
          onClick={onGroupIconClick}
        />
        <div className="absolute top-[93px] left-[-1px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.1)] bg-white w-[364px] h-[27px]" />
        <b className="absolute top-[100px] left-[35px] text-3xs leading-[16px] capitalize inline-block w-[216px]">
          Learn how to book your fashion consultant
        </b>
        <img
          className="absolute top-[97px] left-[322px] w-[14.3px] h-[19.8px] object-contain"
          alt=""
          src="/group-118@2x.png"
        />
        <img
          className="absolute top-[99px] left-[16px] w-[15px] h-[15px] object-cover"
          alt=""
          src="/faq-1@2x.png"
        />
        <FrameComponent1 />
        <div
          className="absolute top-[260px] left-[12px] rounded-3xs [background:linear-gradient(90deg,_#db9574_10%,_#fee2cc)] w-[329px] h-[97px] overflow-hidden cursor-pointer text-mini text-white"
          onClick={onFrameContainerClick}
        >
          <div className="absolute top-[26px] left-[126px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[183px] h-[37px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-darksalmon box-border w-[183px] h-[37px] border-[1px] border-solid border-gray-1000" />
            <b className="absolute top-[11px] left-[13.5px] leading-[16px] capitalize inline-block w-[143.7px] h-4 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Choose Matching
            </b>
          </div>
          <img
            className="absolute top-[36px] left-[285px] w-[15.7px] h-[17.8px] object-contain"
            alt=""
            src="/group-33532@2x.png"
          />
          <i className="absolute top-[68px] left-[128px] text-3xs leading-[16px] capitalize inline-block text-saddlebrown-200 w-[168px] h-[15px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Find perfect matches for your outfits
          </i>
          <img
            className="absolute top-[3px] left-[9px] w-[94px] h-[94px] object-cover"
            alt=""
            src="/istockphoto1473940626612x612removebgpreview-1@2x.png"
          />
        </div>
        <div
          className="absolute top-[367px] left-[12px] rounded-3xs [background:linear-gradient(90deg,_#addddd_60%,_#d8fbfb)] w-[329px] h-[97px] overflow-hidden cursor-pointer text-mini text-white"
          onClick={onFrameContainerClick}
        >
          <div className="absolute top-[26px] left-[126px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[183px] h-[37px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cadetblue box-border w-[183px] h-[37px] border-[1px] border-solid border-gray-1000" />
            <b className="absolute top-[11px] left-[14.4px] leading-[16px] capitalize inline-block w-[168.6px] h-4 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Choose Purchasing
            </b>
          </div>
          <img
            className="absolute top-[36px] left-[285px] w-[15.7px] h-[17.8px] object-contain"
            alt=""
            src="/group-33532@2x.png"
          />
          <i className="absolute top-[68px] left-[128px] text-3xs leading-[16px] capitalize inline-block text-darkslategray-200 w-[181px] h-[15px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Get advice to enhance your wardrobe
          </i>
          <img
            className="absolute top-[-1px] left-[-8px] w-[114px] h-[106px] object-cover"
            alt=""
            src="/istockphoto1462233498612x612-1@2x.png"
          />
        </div>
        <FrameComponent />
        <i className="absolute top-[593px] left-[45px] leading-[16px] capitalize inline-block text-red-200 text-center w-[226px] h-[15px]">
          Get first 10 queries free
        </i>
        <img
          className="absolute top-[484px] left-[20px] w-[81px] h-[83px] object-cover"
          alt=""
          src="/istockphoto875314716612x612removebgpreview-1@2x.png"
        />
      </div>
      <div
        className="absolute top-[703px] left-[13px] w-[328px] h-10 cursor-pointer text-center text-xl text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-indianred-100 w-[328px] h-10 overflow-hidden" />
        <div className="absolute top-[13px] left-[57.5px] leading-[20px] font-semibold inline-block w-[213px]">
          BECOME A CONSULTANT
        </div>
      </div>
    </div>
  );
};

export default MyCart;
