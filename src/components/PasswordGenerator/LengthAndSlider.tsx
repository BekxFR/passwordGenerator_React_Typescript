import React, { useEffect } from "react";

interface SliderProps {
  min: number;
  max: number;
  lengthValue: number;
  onChange: (value: number) => void;
}

interface LengthPartProps {
  passwordLength: number;
  setPwdLength: React.Dispatch<React.SetStateAction<number>>;
}

export const PasswordLengthContainer: React.FC<LengthPartProps> = React.memo(
  (props) => {
    const MIN = 0;
    const MAX = 20;
    const { passwordLength, setPwdLength } = props;

    useEffect(() => {
      setPwdLength(passwordLength);
      // eslint-disable-next-line
    }, [passwordLength]);

    return (
      <div className="length-container">
        <div className="length-value">
          <p className="length-text">Character Length</p>
          <p className="length-size">{passwordLength}</p>
        </div>
        <div className="slider-container">
          <Slider
            min={MIN}
            max={MAX}
            lengthValue={passwordLength}
            onChange={setPwdLength}
          />
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(lengthValue * 100) / max}% 100%` };
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
