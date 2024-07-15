import { FunctionComponent, useMemo, type CSSProperties } from "react";
import VisibleYes from "./VisibleYes";

export type ShowPeriodYesType = {
  className?: string;
  cHARTTITLE?: string;

  /** Style props */
  showPeriodYesAlignSelf?: CSSProperties["alignSelf"];
  showPeriodYesPadding?: CSSProperties["padding"];
};

const ShowPeriodYes: FunctionComponent<ShowPeriodYesType> = ({
  className = "",
  cHARTTITLE,
  showPeriodYesAlignSelf,
  showPeriodYesPadding,
}) => {
  const showPeriodYesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: showPeriodYesAlignSelf,
      padding: showPeriodYesPadding,
    };
  }, [showPeriodYesAlignSelf, showPeriodYesPadding]);

  return (
    <div
      className={`flex flex-row items-center justify-start text-right text-xs text-black font-poppins ${className}`}
      style={showPeriodYesStyle}
    >
      <div className="w-40 bg-white h-6 flex flex-row items-center justify-start">
        <VisibleYes cHARTTITLE="CHART TITLE" visibleYesPosition="relative" />
      </div>
      <div className="w-40 bg-white overflow-hidden shrink-0 flex flex-row items-center justify-end">
        <div className="flex-1 flex flex-row items-center justify-end">
          <div className="w-[61px] relative h-[18px]">
            <div className="absolute top-[0%] left-[0%] font-medium">
              This Week
            </div>
          </div>
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/dropdown-icon.svg"
        />
      </div>
    </div>
  );
};

export default ShowPeriodYes;
