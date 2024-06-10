import React from "react";
import { Checkbox, CheckBoxSetterProps } from "./";

export const PasswordGeneratorCheckbox: React.FC<{
  checkboxProps: CheckBoxSetterProps;
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
