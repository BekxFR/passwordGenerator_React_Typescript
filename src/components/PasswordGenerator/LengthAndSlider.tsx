import React, { useEffect, useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  lengthValue: number;
  onChange: (value: number) => void;
}

interface LengthPartProps {
  pwdLength: number;
  setPwdLength: React.Dispatch<React.SetStateAction<number>>;
}

export const PasswordLengthContainer: React.FC<LengthPartProps> = React.memo(
  (props) => {
    const { pwdLength, setPwdLength } = props;
    const [value, setValue] = useState<number>(pwdLength);

    useEffect(() => {
      setPwdLength(value);
      // eslint-disable-next-line
    }, [value]);

    return (
      <div className="length-container">
        <div className="length-value">
          <p className="length-text">Character Length</p>
          <p className="length-size">{value}</p>
        </div>
        <div className="slider-container">
          <Slider min={0} max={20} lengthValue={value} onChange={setValue} />
        </div>
      </div>
    );
  },
);

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  lengthValue,
  onChange,
}) => {
  const MAX = 20;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(lengthValue * 100) / MAX}% 100%` };
  };

  return (
    <div>
      <input
        className="slider"
        type="range"
        min={min}
        max={max}
        value={lengthValue}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
    </div>
  );
};
