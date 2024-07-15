import { FunctionComponent } from "react";

export type Property1DefaultShowYesType = {
  className?: string;
  intetityColorCircle?: string;
  content?: string;
};

const Property1DefaultShowYes: FunctionComponent<
  Property1DefaultShowYesType
> = ({ className = "", intetityColorCircle, content }) => {
  return (
    <div
      className={`bg-gray-400 overflow-hidden flex flex-row items-center justify-start py-px px-0 text-left text-xs text-black font-poppins ${className}`}
    >
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src={intetityColorCircle}
      />
      <div className="flex flex-row items-center justify-start">
        <div className="relative font-medium">{content}</div>
      </div>
    </div>
  );
};

export default Property1DefaultShowYes;
