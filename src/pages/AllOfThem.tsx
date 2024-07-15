import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Garments from "../components/Garments";

const AllOfThem: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowIconClick = useCallback(() => {
    navigate("/purchasing");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/congracluations-page");
  }, [navigate]);

  const onArrowIconClick1 = useCallback(() => {
    navigate("/signup-connsult");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-white h-[800px] overflow-hidden text-left text-base text-black font-open-sans">
      <img
        className="absolute top-[60.1px] left-[126px] w-[107.5px] h-[83.8px] object-contain"
        alt=""
        src="/image-1251@2x.png"
      />
      <div className="absolute top-[182px] left-[28px] text-lgi leading-[20px] font-roboto text-gray-1100 inline-block w-[304px] h-[22px]">
        Choose your specialization/portfolio
      </div>
      <img
        className="absolute top-[46px] left-[20px] w-[15px] h-0 hidden cursor-pointer"
        alt=""
        src="/arrow-1.svg"
        onClick={onArrowIconClick}
      />
      <div className="absolute top-[246px] left-[calc(50%_-_145px)] w-72 h-[52px]">
        <div className="absolute top-[0px] left-[calc(50%_-_144px)] rounded-8xs bg-pink w-72 h-[52px]" />
        <div className="absolute top-[13px] left-[66px]">Styling</div>
      </div>
      <div className="absolute top-[317px] left-[calc(50%_-_145px)] w-72 h-[52px]">
        <div className="absolute top-[0px] left-[calc(50%_-_144px)] rounded-8xs bg-indianred-300 w-72 h-[52px]" />
        <Garments
          garments="Matching"
          garmentsPosition="absolute"
          garmentsTop="12px"
          garmentsLeft="66px"
        />
      </div>
      <div className="absolute top-[388px] left-[calc(50%_-_145px)] w-72 h-[52px]">
        <div className="absolute top-[0px] left-[calc(50%_-_144px)] rounded-8xs bg-pink w-72 h-[52px]" />
        <div className="absolute top-[14px] left-[67px]">Purchasing</div>
      </div>
      <div className="absolute top-[459px] left-[calc(50%_-_145px)] w-72 h-[52px] text-white">
        <div className="absolute top-[0px] left-[calc(50%_-_144px)] rounded-8xs bg-indianred-100 w-72 h-[52px]" />
        <img
          className="absolute h-[57.69%] w-[10.42%] top-[21.15%] right-[84.03%] bottom-[21.15%] left-[5.56%] max-w-full overflow-hidden max-h-full"
          alt=""
        />
        <div className="absolute top-[13px] left-[92px]">All of the above</div>
      </div>
      <div className="absolute top-[530px] left-[calc(50%_-_145px)] w-72 h-[52px]">
        <div className="absolute top-[0px] left-[calc(50%_-_144px)] rounded-8xs bg-indianred-300 w-72 h-[52px]" />
        <div className="absolute top-[12px] left-[115px]">Others</div>
      </div>
      <div
        className="absolute top-[616px] left-[calc(50%_-_75px)] w-[159px] h-[39px] cursor-pointer text-center text-xl text-white font-montserrat"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[calc(50%_-_79.5px)] rounded-2xl bg-indianred-100 w-[159px] h-[39px]" />
        <div className="absolute top-[6px] left-[calc(50%_-_28.5px)] font-semibold inline-block w-[57px] h-3.5">
          Next
        </div>
      </div>
      <img
        className="absolute top-[324px] left-[44px] w-[43px] h-[43px] object-cover"
        alt=""
        src="/df-1@2x.png"
      />
      <div className="absolute top-[255px] left-[47px] w-[34px] h-[173px]">
        <img
          className="absolute top-[0px] left-[0px] w-[34px] h-[34px] object-cover"
          alt=""
          src="/mask-group1@2x.png"
        />
        <img
          className="absolute top-[142px] left-[3px] w-[31px] h-[31px] object-contain"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <img
        className="absolute top-[38px] left-[19px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/arrow@2x.png"
        onClick={onArrowIconClick1}
      />
    </div>
  );
};

export default AllOfThem;
