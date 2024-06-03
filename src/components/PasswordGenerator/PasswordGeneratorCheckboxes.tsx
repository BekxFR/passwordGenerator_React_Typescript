import React from "react";
import { Checkbox } from "./Checkbox";

interface CheckBoxProps {
  upperCase: boolean;
  setUpperCase: React.Dispatch<React.SetStateAction<boolean>>;
  lowerCase: boolean;
  setLowerCase: React.Dispatch<React.SetStateAction<boolean>>;
  numbers: boolean;
  setNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  symbols: boolean;
  setSymbols: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PasswordGeneratorCheckbox: React.FC<{
  checkboxProps: CheckBoxProps;
}> = ({ checkboxProps }) => {
  const {
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
  } = checkboxProps;
  const checkboxOptions = [
    {
      label: "Include Uppercase Letters",
      checkedStatus: upperCase,
      setterBooleanValue: setUpperCase,
    },
    {
      label: "Include Lowercase Letters",
      checkedStatus: lowerCase,
      setterBooleanValue: setLowerCase,
    },
    {
      label: "Include Numbers",
      checkedStatus: numbers,
      setterBooleanValue: setNumbers,
    },
    {
      label: "Include Symbols",
      checkedStatus: symbols,
      setterBooleanValue: setSymbols,
    },
  ];

  return (
    <div className="settings-checkbox">
      {checkboxOptions.map((option, index) => (
        <Checkbox
          key={index}
          label={option.label}
          checkedStatus={option.checkedStatus}
          setterBooleanValue={option.setterBooleanValue}
        />
      ))}
    </div>
  );
};
