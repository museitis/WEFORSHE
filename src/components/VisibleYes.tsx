import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type VisibleYesType = {
  className?: string;
  cHARTTITLE?: string;

  /** Style props */
  visibleYesPosition?: CSSProperties["position"];
};

const VisibleYes: FunctionComponent<VisibleYesType> = ({
  className = "",
  cHARTTITLE,
  visibleYesPosition,
}) => {
  const visibleYesStyle: CSSProperties = useMemo(() => {
    return {
      position: visibleYesPosition,
    };
  }, [visibleYesPosition]);

  return (
    <div
      className={`w-24 h-6 text-left text-base text-black font-poppins ${className}`}
      style={visibleYesStyle}
    >
      <div className="absolute top-[0%] left-[0%] font-medium">
        {cHARTTITLE}
      </div>
    </div>
  );
};

export default VisibleYes;
