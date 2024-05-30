import React, { useEffect, useState } from "react";

interface levelColor {
  fillValue: string;
  color: string;
}

type LengthValuesProps = {
  level: number;
};

const RectangleLevelSvg: React.FC<levelColor> = ({ fillValue, color }) => {
  return (
    <div className="levelContainer">
      <svg
        width="10"
        height="28"
        viewBox="0 0 10 28"
        fill={fillValue}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="8"
          height="26"
          stroke={color}
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export const LengthValues: React.FC<LengthValuesProps> = ({ level }) => {
  const strengthLevel: string[] = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  const strengthColor: string[] = ["#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(strengthLevel[level]);
  }, [level]);

  const printStrengthLevel = (level: number) => {
    for (let i = 0; i < 4; i++) {
      return Array(4)
        .fill(null)
        .map((_, i) =>
          i <= level && level < 4 ? (
            <RectangleLevelSvg
              key={i}
              fillValue={strengthColor[level]}
              color={strengthColor[level]}
            />
          ) : (
            <RectangleLevelSvg key={i} fillValue={"none"} color={"#E6E5EA"} />
          ),
        );
    }
  };

  return (
    <div className="strengthValue">
      <p style={{ marginRight: "8px" }}>{value}</p>
      {printStrengthLevel(level)}
    </div>
  );
};
