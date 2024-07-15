import { FunctionComponent } from "react";
import BarChart from "../components/BarChart";
import Chart from "../components/Chart";
import GroupComponent from "../components/GroupComponent";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-whitesmoke h-[800px] overflow-hidden text-center text-lg text-black font-roboto">
      <div className="absolute top-[1px] left-[0px] w-[360px] h-[799px]">
        <div className="absolute top-[93px] left-[-1px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.1)] bg-white w-[364px] h-[27px]" />
        <div className="absolute top-[100px] left-[38px] text-3xs leading-[16px] capitalize text-gray-200 text-left inline-block w-[117px]">
          Contact Us For More Help
        </div>
        <img
          className="absolute top-[97px] left-[322px] w-[14.3px] h-[19.8px] object-contain"
          alt=""
          src="/group-118@2x.png"
        />
        <img
          className="absolute h-[2.25%] w-[4.72%] top-[12.39%] right-[90.83%] bottom-[85.36%] left-[4.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/call.svg"
        />
        <div className="absolute top-[129px] left-[15px] leading-[16px] capitalize inline-block w-[77px] h-4">
          Overview
        </div>
        <div className="absolute top-[155px] left-[16px] w-[150px] h-28 text-xs">
          <div className="absolute top-[20px] left-[106px] leading-[16px] capitalize text-gray-200 text-left inline-block w-5">
            5%
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-indianred-200 w-[150px] h-28" />
          <div className="absolute top-[46px] left-[calc(50%_-_73px)] text-mini inline-block w-[82px] h-3.5">
            Customers
          </div>
          <b className="absolute top-[67px] left-[calc(50%_-_66px)] text-lg inline-block w-[31px] h-3.5">
            500
          </b>
          <img
            className="absolute top-[12px] left-[9px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/users@2x.png"
          />
        </div>
        <div className="absolute top-[277px] left-[16px] w-[150px] h-28 text-mini">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-mediumturquoise w-[150px] h-28" />
          <div className="absolute top-[46px] left-[calc(50%_-_73px)] inline-block w-[104px] h-3.5">
            Total Revenue
          </div>
          <b className="absolute top-[65px] left-[calc(50%_-_70px)] text-lg inline-block w-[49px] h-[18px]">
            ₹15K
          </b>
          <img
            className="absolute top-[12px] left-[9px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/users1@2x.png"
          />
        </div>
        <div className="absolute top-[155px] left-[186px] w-[150px] h-28 text-xs">
          <div className="absolute top-[20px] left-[116px] leading-[16px] capitalize text-gray-200 text-left inline-block w-[25px]">
            12%
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkorange-200 w-[150px] h-28" />
          <b className="absolute top-[67px] left-[calc(50%_-_65px)] text-lg inline-block w-[31px] h-3.5">
            115
          </b>
          <div className="absolute top-[46px] left-[calc(50%_-_65px)] text-mini inline-block w-[82px] h-3.5">
            Impressions
          </div>
          <img
            className="absolute h-[19.64%] w-[14.67%] top-[10.71%] right-[78.67%] bottom-[69.64%] left-[6.67%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-33540@2x.png"
          />
        </div>
        <div className="absolute top-[277px] left-[186px] w-[150px] h-28">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-lightsteelblue w-[150px] h-28" />
          <b className="absolute top-[67px] left-[calc(50%_-_65px)] inline-block w-[54px] h-3.5">
            28 hrs
          </b>
          <div className="absolute top-[46px] left-[calc(50%_-_65px)] text-mini inline-block w-[81px] h-3.5">
            Time Spent
          </div>
          <img
            className="absolute h-[19.64%] w-[14.67%] top-[10.71%] right-[78.67%] bottom-[69.64%] left-[6.67%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-33540@2x.png"
          />
        </div>
      </div>
      <BarChart
        titleData="Customer Queries Answered"
        number="5K"
        prop="10%"
        line4="/line-4.svg"
        line7="/line-7.svg"
        line5="/line-5.svg"
        line6="/line-6.svg"
        rectangle6="/rectangle-6.svg"
        rectangle7="/rectangle-7.svg"
        rectangle61="/rectangle-6.svg"
        rectangle71="/rectangle-7.svg"
        rectangle62="/rectangle-61.svg"
        rectangle72="/rectangle-71.svg"
        rectangle63="/rectangle-61.svg"
        rectangle73="/rectangle-71.svg"
        rectangle64="/rectangle-62.svg"
        rectangle74="/rectangle-72.svg"
        rectangle65="/rectangle-62.svg"
        rectangle75="/rectangle-72.svg"
        rectangle66="/rectangle-63.svg"
        rectangle76="/rectangle-73.svg"
        rectangle67="/rectangle-64.svg"
        rectangle77="/rectangle-74.svg"
        rectangle68="/rectangle-65.svg"
        rectangle78="/rectangle-75.svg"
        showDropdown={false}
        barChartWidth="321px"
        barChartHeight="264px"
        barChartPadding="0px 20px"
        barChartGap="10px"
        barChartPosition="absolute"
        barChartTop="409px"
        barChartLeft="15px"
      />
      <Chart />
      <GroupComponent />
    </div>
  );
};

export default Dashboard;
