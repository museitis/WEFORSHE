import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GarmentsType = {
  className?: string;
  garments?: string;

  /** Style props */
  garmentsPosition?: CSSProperties["position"];
  garmentsTop?: CSSProperties["top"];
  garmentsLeft?: CSSProperties["left"];
};

const Garments: FunctionComponent<GarmentsType> = ({
  className = "",
  garments,
  garmentsPosition,
  garmentsTop,
  garmentsLeft,
}) => {
  const garmentsStyle: CSSProperties = useMemo(() => {
    return {
      position: garmentsPosition,
      top: garmentsTop,
      left: garmentsLeft,
    };
  }, [garmentsPosition, garmentsTop, garmentsLeft]);

  return (
    <div
      className={`w-[84px] h-[25px] text-left text-lg text-white font-open-sans ${className}`}
      style={garmentsStyle}
    >
      <div className="absolute top-[0%] left-[0%]">{garments}</div>
    </div>
  );
};

export default Garments;
