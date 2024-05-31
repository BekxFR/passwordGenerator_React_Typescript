import React, { useEffect, useState } from "react";
import { pgParams } from "../../types/PasswordGeneratorType";

interface SliderProps {
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

export const LengthPart: React.FC<pgParams> = (props) => {
  const [value, setValue] = useState<number>(props.pwdLength);

  useEffect(() => {
    setValue(props.pwdLength);
  }, [props.pwdLength]);
  // setValue(passwordLength);
  return (
    <div className="length-container">
      <div className="length-value">
        <p className="length-text">Character Length</p>
        <p className="length-size">{value}</p>
      </div>
      <div className="slider-container">
        <Slider min={0} max={20} defaultValue={value} onChange={setValue} />
      </div>
    </div>
  );
};

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  defaultValue,
  onChange,
}) => {
  const MAX = 20;
  const [value, setValue] = useState<number>(defaultValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
    setValue(newValue);
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX}% 100%` };
  };

  return (
    <div>
      <input
        className="slider"
        type="range"
        min={min}
        max={max}
        value={defaultValue}
        onChange={handleChange}
        style={getBackgroundSize()}
      />
    </div>
  );
};
