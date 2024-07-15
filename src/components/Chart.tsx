import { FunctionComponent } from "react";
import ShowPeriodYes from "./ShowPeriodYes";
import ShowYes from "./ShowYes";
import Chartist from "./Chartist";

export type ChartType = {
  className?: string;
};

const Chart: FunctionComponent<ChartType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[686px] left-[51px] w-[325px] h-[252px] flex flex-col items-end justify-between text-left text-base text-gray-2 font-poppins ${className}`}
    >
      <div className="flex-1 rounded bg-white overflow-hidden flex flex-col items-start justify-start pt-4 px-6 pb-6 border-[1px] border-solid border-gray1">
        <ShowPeriodYes
          cHARTTITLE="Your Rating Vs Others"
          showPeriodYesAlignSelf="stretch"
          showPeriodYesPadding="0px 0px 8px"
        />
        <ShowYes prop="98% Liked" showYesOverflow="hidden" />
        <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4">
          <div className="relative">50 Reviews</div>
        </div>
        <Chartist />
      </div>
    </div>
  );
};

export default Chart;
