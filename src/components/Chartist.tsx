import { FunctionComponent } from "react";
import Property1DefaultShowYes from "./Property1DefaultShowYes";

export type ChartistType = {
  className?: string;
};

const Chartist: FunctionComponent<ChartistType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[326px] relative bg-white h-[168px] mix-blend-normal text-left text-xs text-black font-poppins ${className}`}
    >
      <div className="absolute h-[71.43%] w-full top-[14.29%] right-[0%] bottom-[14.29%] left-[0%] bg-gray-400 overflow-hidden">
        <div className="absolute h-[164.25%] w-[56.44%] top-[182.17%] right-[-20.25%] bottom-[-246.42%] left-[63.8%] rounded-[50%] bg-data-1b [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <div className="absolute h-[164.25%] w-[56.44%] top-[182.17%] right-[-20.25%] bottom-[-246.42%] left-[63.8%] rounded-[50%] bg-data-3b [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <div className="absolute h-[164.25%] w-[56.44%] top-[182.17%] right-[-20.25%] bottom-[-246.42%] left-[63.8%] rounded-[50%] bg-data-2b [transform:_rotate(-180deg)] [transform-origin:0_0] hidden" />
        <div className="absolute h-[60.75%] w-[19.94%] top-[12.5%] right-[8.9%] bottom-[26.75%] left-[71.17%] flex flex-col items-start justify-start gap-[4px]">
          <div className="bg-gray-400 overflow-hidden hidden flex-row items-center justify-start py-px px-0">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/intetity-color-circle.svg"
            />
            <div className="flex flex-row items-center justify-start">
              <div className="relative font-medium">Content</div>
            </div>
          </div>
          <Property1DefaultShowYes
            intetityColorCircle="/intetity-color-circle2.svg"
            content="Others"
          />
          <Property1DefaultShowYes
            intetityColorCircle="/intetity-color-circle1.svg"
            content="Your"
          />
        </div>
      </div>
    </div>
  );
};

export default Chartist;
