import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ShowYesType = {
  className?: string;
  prop?: string;

  /** Style props */
  showYesOverflow?: CSSProperties["overflow"];
};

const ShowYes: FunctionComponent<ShowYesType> = ({
  className = "",
  prop,
  showYesOverflow,
}) => {
  const showYesStyle: CSSProperties = useMemo(() => {
    return {
      overflow: showYesOverflow,
    };
  }, [showYesOverflow]);

  return (
    <div
      className={`max-w-full h-12 flex flex-row items-center justify-start text-left text-13xl text-data-2a font-poppins self-stretch ${className}`}
      style={showYesStyle}
    >
      <div className="relative tracking-[-0.04em]">{prop}</div>
    </div>
  );
};

export default ShowYes;
