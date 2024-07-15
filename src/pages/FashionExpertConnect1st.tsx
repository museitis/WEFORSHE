import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FashionExpertConnect1st: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/fashion-expert-connect");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-xl bg-whitesmoke h-[800px] overflow-hidden text-center text-2xs text-black font-open-sans">
      <img
        className="absolute top-[0px] left-[0px] w-[360px] h-[113px]"
        alt=""
        src="/rectangle-1094.svg"
      />
      <div className="absolute top-[34px] left-[41px] text-xl font-semibold text-white text-left inline-block w-[301px] h-4">
        Connect With Fashion Experts
      </div>
      <img
        className="absolute top-[39px] left-[13px] w-5 h-5 object-cover"
        alt=""
        src="/group-33531@2x.png"
      />
      <img
        className="absolute top-[69px] left-[16px] rounded-3xs w-80 h-[31px]"
        alt=""
        src="/rectangle-10941.svg"
      />
      <img
        className="absolute h-[2%] w-[4.17%] top-[9.63%] right-[88.06%] bottom-[88.38%] left-[7.78%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[calc(50%_-_323px)] left-[calc(50%_-_124px)] text-xs text-gray-1100 inline-block w-[98px] h-3.5">
        Search by name
      </div>
      <img
        className="absolute top-[76.6px] left-[311px] w-[17px] h-[16.4px] object-contain"
        alt=""
        src="/group-335311@2x.png"
      />
      <img
        className="absolute top-[82px] left-[294px] w-[9px] h-[9px] object-cover"
        alt=""
        src="/group-335312@2x.png"
      />
      <div
        className="absolute top-[131px] left-[6px] shadow-[0px_2px_8px_4px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white w-[347px] h-[135px] cursor-pointer"
        onClick={onRectangleClick}
      />
      <div className="absolute top-[274px] left-[6px] shadow-[0px_2px_8px_4px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white w-[347px] h-[135px]" />
      <div className="absolute top-[417px] left-[6px] shadow-[0px_2px_8px_4px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white w-[347px] h-[135px]" />
      <div className="absolute top-[560px] left-[6px] shadow-[0px_2px_8px_4px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white w-[347px] h-[135px]" />
      <div className="absolute top-[703px] left-[6px] shadow-[0px_2px_8px_4px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white w-[347px] h-[135px]" />
      <div className="absolute top-[152px] left-[104px] text-sm font-semibold inline-block w-[123px] h-[21px]">
        Ms. Abha Sharma
      </div>
      <div className="absolute top-[295px] left-[104px] text-sm font-semibold inline-block w-[109px] h-[21px]">
        Ms. Kylie Adani
      </div>
      <div className="absolute top-[438px] left-[104px] text-sm font-semibold inline-block w-[123px] h-[21px]">
        Ms. Kriti Karmani
      </div>
      <div className="absolute top-[581px] left-[104px] text-sm font-semibold inline-block w-[123px] h-[21px]">
        Ms. Radhika Singh
      </div>
      <div className="absolute top-[724px] left-[104px] text-sm font-semibold inline-block w-[117px] h-[21px]">
        Ms. Mallika Khan
      </div>
      <div className="absolute top-[172px] left-[104px] inline-block w-[181px] h-[9px]">
        Fashion Stylist and Expert Advisor
      </div>
      <div className="absolute top-[315px] left-[104px] inline-block w-[155px] h-[9px]">
        {" "}
        Matching and Expert Advisor
      </div>
      <div className="absolute top-[458px] left-[104px] inline-block w-[162px] h-[9px]">
        Purchasing and Expert Advisor
      </div>
      <div className="absolute top-[601px] left-[104px] inline-block w-[181px] h-[9px]">
        Fashion Styllist and Expert Advisor
      </div>
      <div className="absolute top-[744px] left-[104px] inline-block w-[181px] h-[9px]">
        Fashion Styllist and Expert Advisor
      </div>
      <div className="absolute top-[210px] left-[124px] text-red-200 text-left inline-block w-10 h-[11px]">
        Kolkata
      </div>
      <div className="absolute top-[353px] left-[124px] text-red-200 text-left inline-block w-14 h-[11px]">
        Bangalore
      </div>
      <div className="absolute top-[496px] left-[124px] text-red-200 text-left inline-block w-[97px] h-[11px]">
        Delhi
      </div>
      <div className="absolute top-[639px] left-[124px] text-red-200 text-left inline-block w-[97px] h-[11px]">
        Mumbai
      </div>
      <div className="absolute top-[782px] left-[124px] text-red-200 text-left inline-block w-[97px] h-[11px]">
        Mumbai
      </div>
      <div className="absolute top-[191px] left-[124px] text-forestgreen-100 text-left inline-block w-[117px] h-[11px]">
        98% like (115 Reviews)
      </div>
      <div className="absolute top-[334px] left-[124px] text-forestgreen-100 text-left inline-block w-[117px] h-[11px]">
        90% like (150 Reviews)
      </div>
      <div className="absolute top-[477px] left-[124px] text-forestgreen-100 text-left inline-block w-[117px] h-[11px]">
        96% like (105 Reviews)
      </div>
      <div className="absolute top-[620px] left-[124px] text-forestgreen-100 text-left inline-block w-[117px] h-[11px]">
        90% like (87 Reviews)
      </div>
      <div className="absolute top-[763px] left-[124px] text-forestgreen-100 text-left inline-block w-[117px] h-[11px]">
        92% like (250 Reviews)
      </div>
      <img
        className="absolute top-[212px] left-[108px] w-[11px] h-3 object-cover"
        alt=""
        src="/group-33527@2x.png"
      />
      <img
        className="absolute top-[355px] left-[108px] w-[11px] h-3 object-cover"
        alt=""
        src="/group-33527@2x.png"
      />
      <img
        className="absolute top-[498px] left-[108px] w-[11px] h-3 object-cover"
        alt=""
        src="/group-33527@2x.png"
      />
      <img
        className="absolute top-[641px] left-[108px] w-[11px] h-3 object-cover"
        alt=""
        src="/group-33527@2x.png"
      />
      <img
        className="absolute top-[784px] left-[108px] w-[11px] h-3 object-cover"
        alt=""
        src="/group-33527@2x.png"
      />
      <img
        className="absolute top-[193px] left-[106px] w-[13px] h-[13px] object-cover"
        alt=""
        src="/group-33528@2x.png"
      />
      <img
        className="absolute top-[336px] left-[106px] w-[13px] h-[13px] object-cover"
        alt=""
        src="/group-33528@2x.png"
      />
      <img
        className="absolute top-[479px] left-[106px] w-[13px] h-[13px] object-cover"
        alt=""
        src="/group-33528@2x.png"
      />
      <img
        className="absolute top-[622px] left-[106px] w-[13px] h-[13px] object-cover"
        alt=""
        src="/group-33528@2x.png"
      />
      <img
        className="absolute top-[765px] left-[106px] w-[13px] h-[13px] object-cover"
        alt=""
        src="/group-33528@2x.png"
      />
      <div className="absolute top-[235.5px] left-[22.5px] box-border w-[312px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[378.5px] left-[22.5px] box-border w-[312px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[521.5px] left-[22.5px] box-border w-[312px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[664.5px] left-[22.5px] box-border w-[312px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[807.5px] left-[22.5px] box-border w-[312px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute bottom-[541px] left-[28px] rounded-8xs bg-forestgreen-100 box-border w-[62px] h-4 border-[1px] border-solid border-forestgreen-200" />
      <div className="absolute bottom-[398px] left-[28px] rounded-8xs bg-red-200 box-border w-[100px] h-4 border-[1px] border-solid border-crimson-200" />
      <div className="absolute bottom-[255px] left-[28px] rounded-8xs bg-goldenrod-100 box-border w-[62px] h-4 border-[1px] border-solid border-goldenrod-200" />
      <div className="absolute bottom-[112px] left-[28px] rounded-8xs bg-forestgreen-100 box-border w-[62px] h-4 border-[1px] border-solid border-forestgreen-200" />
      <div className="absolute bottom-[-31px] left-[28px] rounded-8xs bg-forestgreen-100 box-border w-[62px] h-4 border-[1px] border-solid border-forestgreen-200" />
      <div className="absolute bottom-[542px] left-[34px] text-3xs text-white inline-block w-[50px] h-3.5">
        Active
      </div>
      <div className="absolute bottom-[399px] left-[34px] text-3xs text-white inline-block w-[90px] h-3.5">
        Last seen 1 hr ago
      </div>
      <div className="absolute bottom-[256px] left-[34px] text-3xs text-white inline-block w-[50px] h-3.5">
        Engaged
      </div>
      <div className="absolute bottom-[113px] left-[34px] text-3xs text-white inline-block w-[50px] h-3.5">
        Active
      </div>
      <div className="absolute bottom-[-30px] left-[34px] text-3xs text-white inline-block w-[50px] h-3.5">
        Active
      </div>
      <div className="absolute bottom-[543px] left-[286px] text-3xs text-royalblue inline-block w-[50px] h-3.5">
        See Profile
      </div>
      <div className="absolute bottom-[400px] left-[286px] text-3xs text-royalblue inline-block w-[50px] h-3.5">
        See Profile
      </div>
      <div className="absolute bottom-[257px] left-[286px] text-3xs text-royalblue inline-block w-[50px] h-3.5">
        See Profile
      </div>
      <div className="absolute bottom-[114px] left-[286px] text-3xs text-royalblue inline-block w-[50px] h-3.5">
        See Profile
      </div>
      <div className="absolute bottom-[-29px] left-[286px] text-3xs text-royalblue inline-block w-[50px] h-3.5">
        See Profile
      </div>
      <img
        className="absolute top-[148px] left-[19px] w-[73px] h-[73px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <img
        className="absolute top-[434px] left-[19px] w-[73px] h-[73px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <img
        className="absolute top-[577px] left-[19px] w-[73px] h-[73px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <img
        className="absolute top-[720px] left-[19px] w-[73px] h-[73px] object-cover"
        alt=""
        src="/mask-group2@2x.png"
      />
      <div className="absolute top-[159px] left-[80px] rounded-[50%] bg-forestgreen-100 w-[7px] h-[7px]" />
      <img
        className="absolute top-[292px] left-[19px] w-[73px] h-[73px] object-contain"
        alt=""
        src="/mask-group3@2x.png"
      />
      <div className="absolute top-[302px] left-[80px] rounded-[50%] bg-red-200 w-[7px] h-[7px]" />
      <img
        className="absolute top-[434px] left-[19px] w-[73px] h-[73px] object-contain"
        alt=""
        src="/mask-group4@2x.png"
      />
      <div className="absolute top-[445px] left-[80px] rounded-[50%] bg-goldenrod-100 w-[7px] h-[7px]" />
      <img
        className="absolute top-[577px] left-[19px] w-[73px] h-[73px] object-contain"
        alt=""
        src="/mask-group5@2x.png"
      />
      <div className="absolute top-[588px] left-[80px] rounded-[50%] bg-forestgreen-100 w-[7px] h-[7px]" />
      <img
        className="absolute top-[720px] left-[19px] w-[73px] h-[73px] object-contain"
        alt=""
        src="/mask-group6@2x.png"
      />
      <div className="absolute top-[731px] left-[80px] rounded-[50%] bg-forestgreen-100 w-[7px] h-[7px]" />
      <div className="absolute top-[718px] left-[104px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[151px] h-10 text-xl text-white font-roboto">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-indianred-100 box-border w-[151px] h-10 overflow-hidden border-[1px] border-solid border-red-200" />
        <div className="absolute top-[13px] left-[17px] leading-[20px] font-semibold inline-block w-[116px]">
          Contact us
        </div>
      </div>
    </div>
  );
};

export default FashionExpertConnect1st;
