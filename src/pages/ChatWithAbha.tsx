import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ChatWithAbha: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/fashion-expert-connect-1st");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-whitesmoke h-[800px] overflow-hidden text-center text-sm text-white font-open-sans">
      <img
        className="absolute top-[0px] left-[0px] w-[360px] h-[134px]"
        alt=""
        src="/rectangle-10942.svg"
      />
      <img
        className="absolute top-[39px] left-[13px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/group-33531@2x.png"
        onClick={onGroupIconClick}
      />
      <div className="absolute top-[96px] left-[121px] font-semibold inline-block w-[123px] h-[21px]">
        Ms. Abha Sharma
      </div>
      <div className="absolute top-[112px] left-[90px] text-2xs inline-block w-[181px] h-[9px]">
        Fashion Stylist and Expert Advisor
      </div>
      <img
        className="absolute top-[20px] left-[144px] w-[73px] h-[73px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <div className="absolute top-[27px] left-[202px] rounded-[50%] bg-forestgreen-100 w-[7px] h-[7px]" />
      <div className="absolute top-[159px] left-[11px] w-[325px] h-[594px] text-left text-smi text-black">
        <div className="absolute top-[166px] left-[59px] w-[266px] h-16">
          <div className="absolute top-[0px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-indianred-200 w-[266px] h-16" />
          <div className="absolute top-[4px] left-[11px] leading-[18px] inline-block w-60 h-[41.3px]">
            {" "}
            It's a traditional Indian wedding. I'm thinking of wearing something
            elegant and comfortable.
          </div>
        </div>
        <div className="absolute top-[302px] left-[59px] w-[266px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-indianred-200 w-[266px] h-[47px]" />
          <div className="absolute top-[2.8px] left-[11px] leading-[18px] inline-block w-[228px] h-[20.4px]">
            {" "}
            I prefer a lehenga. I want something in pastel colors.
          </div>
        </div>
        <div className="absolute top-[436px] left-[59px] w-[266px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-indianred-200 w-[266px] h-[47px]" />
          <div className="absolute top-[2.8px] left-[11px] leading-[18px] inline-block w-[228px] h-[20.4px]">
            That sounds lovely! Should I go for heavy or light embroidery?
          </div>
        </div>
        <div className="absolute top-[568px] left-[59px] w-[266px] h-[25px]">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.25)] rounded-t-3xs rounded-b-none bg-indianred-200 w-[266px] h-[25px]" />
          <div className="absolute top-[1.6px] left-[11px] leading-[18px] whitespace-pre-wrap inline-block w-[247px] h-[19.1px]">{`Got it. What about accessories?  `}</div>
        </div>
        <div className="absolute top-[79px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-[280px] h-[74px]" />
        <div className="absolute top-[244px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-[280px] h-[45px]" />
        <div className="absolute top-[361px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-[280px] h-[63px]" />
        <div className="absolute top-[494px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-[280px] h-[63px]" />
        <div className="absolute top-[129px] left-[228px] text-xs leading-[20px] text-darkgray-200 inline-block w-[43px] h-[22px]">
          6:49pm
        </div>
        <div className="absolute top-[269px] left-[228px] text-xs leading-[20px] text-darkgray-200 inline-block w-[43px] h-[22px]">
          6:49pm
        </div>
        <div className="absolute top-[402px] left-[228px] text-xs leading-[20px] text-darkgray-200 inline-block w-[43px] h-[22px]">
          6:49pm
        </div>
        <div className="absolute top-[535px] left-[228px] text-xs leading-[20px] text-darkgray-200 inline-block w-[43px] h-[22px]">
          6:49pm
        </div>
        <div className="absolute top-[88px] left-[11px] leading-[18px] inline-block w-[266px] h-14">
          Of course! Can you tell me more about the wedding? Is there a specific
          theme or dress code?
        </div>
        <div className="absolute top-[246px] left-[7px] leading-[18px] inline-block w-[266px] h-[38px]">
          Great! Do you prefer a saree, lehenga, or anarkali suit?
        </div>
        <div className="absolute top-[365px] left-[7px] leading-[18px] inline-block w-[266px] h-[54px]">
          Pastel lehengas are a great choice! How about a pastel pink or mint
          green lehenga with intricate embroidery?
        </div>
        <div className="absolute top-[498px] left-[7px] leading-[18px] inline-block w-[266px] h-[54px]">{`For a traditional wedding, a lehenga with medium to heavy embroidery would look stunning. `}</div>
        <div className="absolute top-[0px] left-[54px] w-[271px] h-[66px]">
          <div className="absolute top-[0px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-indianred-200 w-[271px] h-[66px]" />
        </div>
        <div className="absolute top-[5px] left-[65px] leading-[18px] inline-block w-[250px] h-14">
          Hi there! I have a wedding to attend next month. Can you help me
          choose an outfit?
        </div>
        <div className="absolute top-[44px] left-[256px] w-[61.3px] h-[22px] text-xs">
          <div className="absolute top-[0px] left-[0px] w-[61.3px] h-[22px]">
            <img
              className="absolute top-[8px] left-[48.8px] w-[12.5px] h-[6.5px]"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[43px] h-[22px]">
              6:49pm
            </div>
          </div>
        </div>
        <div className="absolute top-[207px] left-[256px] w-[61.3px] h-[22px] text-xs">
          <div className="absolute top-[0px] left-[0px] w-[61.3px] h-[22px]">
            <img
              className="absolute top-[8px] left-[48.8px] w-[12.5px] h-[6.5px]"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[43px] h-[22px]">
              6:49pm
            </div>
          </div>
        </div>
        <div className="absolute top-[327px] left-[256px] w-[61.3px] h-[22px] text-xs">
          <div className="absolute top-[0px] left-[0px] w-[61.3px] h-[22px]">
            <img
              className="absolute top-[8px] left-[48.8px] w-[12.5px] h-[6.5px]"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[43px] h-[22px]">
              6:49pm
            </div>
          </div>
        </div>
        <div className="absolute top-[461px] left-[256px] w-[61.3px] h-[22px] text-xs">
          <div className="absolute top-[0px] left-[0px] w-[61.3px] h-[22px]">
            <img
              className="absolute top-[8px] left-[48.8px] w-[12.5px] h-[6.5px]"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[43px] h-[22px]">
              6:49pm
            </div>
          </div>
        </div>
        <div className="absolute top-[572px] left-[261px] w-[61.3px] h-[22px] text-xs">
          <div className="absolute top-[0px] left-[0px] w-[61.3px] h-[22px]">
            <img
              className="absolute top-[8px] left-[48.8px] w-[12.5px] h-[6.5px]"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0px] left-[0px] leading-[20px] inline-block w-[43px] h-[22px]">
              6:49pm
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[753px] left-[-6px] w-[369px] h-[47px] text-xs text-black">
        <div className="absolute top-[0px] left-[67px] inline-block w-[50px] h-[25px]">
          pply Loans
        </div>
        <div className="absolute top-[0px] left-[0px] w-[369px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-3xs bg-white w-[369px] h-[47px]" />
          <img
            className="absolute h-[34.04%] w-[4.42%] top-[33.4%] right-[4.2%] bottom-[32.55%] left-[91.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div className="absolute top-[15px] left-[54px] text-mini text-gray-700 text-left">
          Message.....
        </div>
        <img
          className="absolute top-[13px] left-[278px] w-[25px] h-[25px] object-cover"
          alt=""
          src="/group-34252@2x.png"
        />
        <div className="absolute h-[51.06%] w-[6.5%] top-[25.53%] right-[90.79%] bottom-[23.4%] left-[2.71%]" />
        <img
          className="absolute h-[51.06%] w-[6.5%] top-[25.53%] right-[88.62%] bottom-[23.4%] left-[4.88%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <img
          className="absolute h-[42.55%] w-[3.79%] top-[27.66%] right-[12.2%] bottom-[29.79%] left-[84.01%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
      </div>
    </div>
  );
};

export default ChatWithAbha;
