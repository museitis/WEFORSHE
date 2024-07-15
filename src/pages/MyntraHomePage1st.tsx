import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MyntraHomePage1st: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage124IconClick = useCallback(() => {
    navigate("/myntra-home-page-2nd");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-white h-[800px] overflow-hidden text-left text-2xs text-white font-montserrat">
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
      <div className="absolute top-[711px] left-[268px] w-[84px] h-[27px]">
        <div className="absolute top-[0px] left-[0px] rounded-[70px] bg-darkslategray-100 box-border w-[83px] h-[27px] border-[1.5px] border-solid border-white" />
        <img
          className="absolute top-[6px] left-[7px] w-[18px] h-3.5 object-contain cursor-pointer"
          alt=""
          src="/image-124@2x.png"
          onClick={onImage124IconClick}
        />
        <b className="absolute top-[3px] left-[295px] leading-[20px] inline-block w-[57px] h-[22px]">
          XPLORE
        </b>
        <div className="absolute top-[0px] left-[73.2px] rounded-[50%] bg-red-100 w-[6.8px] h-[6.5px] [transform:_rotate(1.6deg)] [transform-origin:0_0]" />
      </div>
    </div>
  );
};

export default MyntraHomePage1st;
