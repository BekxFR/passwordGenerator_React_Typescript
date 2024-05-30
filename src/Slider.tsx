import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

export const LengthPart: React.FC = () => {
  const [value, setValue] = useState<number>(10);

  return (
    <div className="characterLengthMain">
      <div className="characterLengthValue">
        <p className="characterText">Character Length</p>
        <p className="characterSize">{value}</p>
      </div>
      <div className="sliderBarOlder">
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
