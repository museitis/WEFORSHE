import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BarChartType = {
  className?: string;
  titleData?: string;
  number?: string;
  prop?: string;
  line4?: string;
  line7?: string;
  line5?: string;
  line6?: string;
  rectangle6?: string;
  rectangle7?: string;
  rectangle61?: string;
  rectangle71?: string;
  rectangle62?: string;
  rectangle72?: string;
  rectangle63?: string;
  rectangle73?: string;
  rectangle64?: string;
  rectangle74?: string;
  rectangle65?: string;
  rectangle75?: string;
  rectangle66?: string;
  rectangle76?: string;
  rectangle67?: string;
  rectangle77?: string;
  rectangle68?: string;
  rectangle78?: string;
  showDropdown?: boolean;

  /** Style props */
  barChartWidth?: CSSProperties["width"];
  barChartHeight?: CSSProperties["height"];
  barChartPadding?: CSSProperties["padding"];
  barChartGap?: CSSProperties["gap"];
  barChartPosition?: CSSProperties["position"];
  barChartTop?: CSSProperties["top"];
  barChartLeft?: CSSProperties["left"];
};

const BarChart: FunctionComponent<BarChartType> = ({
  className = "",
  titleData,
  number,
  prop,
  line4,
  line7,
  line5,
  line6,
  rectangle6,
  rectangle7,
  rectangle61,
  rectangle71,
  rectangle62,
  rectangle72,
  rectangle63,
  rectangle73,
  rectangle64,
  rectangle74,
  rectangle65,
  rectangle75,
  rectangle66,
  rectangle76,
  rectangle67,
  rectangle77,
  rectangle68,
  rectangle78,
  showDropdown,
  barChartWidth,
  barChartHeight,
  barChartPadding,
  barChartGap,
  barChartPosition,
  barChartTop,
  barChartLeft,
}) => {
  const barChartStyle: CSSProperties = useMemo(() => {
    return {
      width: barChartWidth,
      height: barChartHeight,
      padding: barChartPadding,
      gap: barChartGap,
      position: barChartPosition,
      top: barChartTop,
      left: barChartLeft,
    };
  }, [
    barChartWidth,
    barChartHeight,
    barChartPadding,
    barChartGap,
    barChartPosition,
    barChartTop,
    barChartLeft,
  ]);

  return (
    <div
      className={`w-[363px] rounded-lg bg-white max-w-full h-[328px] flex flex-col items-center justify-center pt-[5px] px-5 pb-2.5 box-border gap-[54px] text-left text-base text-navbar font-roboto ${className}`}
      style={barChartStyle}
    >
      <div className="self-stretch h-[50px] flex flex-col items-start justify-between">
        <div className="self-stretch flex flex-row items-center justify-center gap-[134px]">
          <b className="relative tracking-[0.5px] leading-[22px]">
            {titleData}
          </b>
          <div className="flex-1 rounded-[2.52px] overflow-hidden flex flex-row items-center justify-center text-5xs text-medium-gray">
            {showDropdown && (
              <div className="flex flex-row items-center justify-center py-[4.2px] px-[8.4px] gap-[2.5px]">
                <div className="relative tracking-[0.18px] font-medium">
                  View Report
                </div>
                <img
                  className="w-[6.7px] relative h-[6.7px]"
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            )}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[9px] text-xl">
          <b className="relative tracking-[0.5px] leading-[28px]">{number}</b>
          <div className="flex-1 flex flex-row items-start justify-start text-xs text-mediumseagreen">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className="w-[7.1px] relative h-2.5"
                alt=""
                src="/percentage-info.svg"
              />
              <div className="w-[37.2px] relative tracking-[0.5px] leading-[12px] inline-block shrink-0">
                <span className="font-semibold">{prop}</span>
                <span className="font-mulish text-dark-gray whitespace-pre-wrap">{`  `}</span>
              </div>
            </div>
            <div className="w-[94px] relative tracking-[0.5px] leading-[12px] font-semibold text-medium-gray inline-block shrink-0 ml-[-3px]">
              vs Last Week
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[12px] text-center text-5xs-1 text-dark-gray font-poppins">
        <div className="self-stretch relative h-[173px]">
          <img
            className="absolute top-[48.6px] left-[0px] max-h-full w-[322px]"
            alt=""
            src={line4}
          />
          <img
            className="absolute top-[0px] left-[0px] max-h-full w-[322px]"
            alt=""
            src={line7}
          />
          <img
            className="absolute top-[97.2px] left-[0px] max-h-full w-[322px]"
            alt=""
            src={line5}
          />
          <img
            className="absolute top-[145.9px] left-[0px] w-[323px] h-[0.2px] object-contain"
            alt=""
            src={line6}
          />
          <div className="absolute w-[4.27%] top-[calc(50%_-_50px)] right-[94.18%] left-[1.55%] h-[136.6px]">
            <div className="absolute w-[56.52%] top-[calc(50%_+_53.3px)] left-[20.29%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              01
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[5px] h-[109.4px]"
              alt=""
              src={rectangle6}
            />
            <img
              className="absolute top-[48.7px] left-[8.8px] w-[5px] h-[60.8px]"
              alt=""
              src={rectangle7}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_50px)] right-[26.5%] left-[69.23%] h-[136.6px]">
            <div className="absolute w-[63.04%] top-[calc(50%_+_53.3px)] left-[18.12%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              07
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[5px] h-[109.4px]"
              alt=""
              src={rectangle61}
            />
            <img
              className="absolute top-[48.7px] left-[8.8px] w-[5px] h-[60.8px]"
              alt=""
              src={rectangle71}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_50px)] right-[82.88%] left-[12.85%] h-[136.6px]">
            <div className="absolute w-[63.04%] top-[calc(50%_+_53.2px)] left-[18.12%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              02
            </div>
            <img
              className="absolute top-[24.3px] left-[0px] w-[5px] h-[85.1px]"
              alt=""
              src={rectangle62}
            />
            <img
              className="absolute top-[0px] left-[8.7px] w-[5px] h-[109.4px]"
              alt=""
              src={rectangle72}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_50px)] right-[15.23%] left-[80.5%] h-[136.6px]">
            <div className="absolute w-[70.29%] top-[calc(50%_+_53.3px)] left-[11.59%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              08
            </div>
            <img
              className="absolute top-[24.4px] left-[0px] w-[5px] h-[85.1px]"
              alt=""
              src={rectangle63}
            />
            <img
              className="absolute top-[0px] left-[8.8px] w-[5px] h-[109.4px]"
              alt=""
              src={rectangle73}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_37.9px)] right-[71.61%] left-[24.12%] h-[124.4px]">
            <div className="absolute w-[63.04%] top-[calc(50%_+_47.2px)] left-[18.12%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              03
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[5px] h-[97.2px]"
              alt=""
              src={rectangle64}
            />
            <img
              className="absolute top-[48.6px] left-[8.8px] w-[5px] h-[48.6px]"
              alt=""
              src={rectangle74}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_37.9px)] right-[3.96%] left-[91.76%] h-[124.4px]">
            <div className="absolute w-[70.29%] top-[calc(50%_+_47.2px)] left-[11.59%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              09
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[5px] h-[97.2px]"
              alt=""
              src={rectangle65}
            />
            <img
              className="absolute top-[48.6px] left-[8.8px] w-[5px] h-[48.6px]"
              alt=""
              src={rectangle75}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_37.9px)] right-[60.34%] left-[35.39%] h-[124.4px]">
            <div className="absolute w-[70.29%] top-[calc(50%_+_47.2px)] left-[10.87%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              04
            </div>
            <img
              className="absolute top-[24.3px] left-[0px] w-[5px] h-[72.9px]"
              alt=""
              src={rectangle66}
            />
            <img
              className="absolute top-[0px] left-[8.8px] w-[5px] h-[97.2px]"
              alt=""
              src={rectangle76}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_62.2px)] right-[49.07%] left-[46.66%] h-[148.7px]">
            <div className="absolute w-[70.29%] top-[calc(50%_+_59.35px)] left-[11.59%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              05
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[5px] h-[121.5px]"
              alt=""
              src={rectangle67}
            />
            <img
              className="absolute top-[36.5px] left-[8.8px] w-[5px] h-[85.1px]"
              alt=""
              src={rectangle77}
            />
          </div>
          <div className="absolute w-[4.27%] top-[calc(50%_-_74.3px)] right-[37.77%] left-[57.96%] h-[160.9px]">
            <div className="absolute w-[70.29%] top-[calc(50%_+_65.45px)] left-[10.87%] tracking-[0.32px] leading-[7.12px] inline-block h-[15px] opacity-[0.5]">
              06
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[5px] h-[133.7px]"
              alt=""
              src={rectangle68}
            />
            <img
              className="absolute top-[73px] left-[8.7px] w-[5px] h-[60.8px]"
              alt=""
              src={rectangle78}
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[35px] text-left text-xs text-navbar font-roboto">
          <div className="w-[75px] relative h-3">
            <div className="absolute top-[2px] left-[0px] rounded-[50%] bg-blue w-[9px] h-[9px]" />
            <div className="absolute top-[0px] left-[17px] tracking-[0.5px] leading-[12px] opacity-[0.7]">
              This week
            </div>
          </div>
          <div className="w-[77px] relative h-3">
            <div className="absolute top-[2px] left-[0px] rounded-[50%] bg-yellow w-[9px] h-[9px]" />
            <div className="absolute top-[0px] left-[17px] tracking-[0.5px] leading-[12px] opacity-[0.7]">
              Last Week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
