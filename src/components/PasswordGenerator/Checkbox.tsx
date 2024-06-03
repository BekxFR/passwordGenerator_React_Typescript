import React from "react";

interface CheckboxProps {
  label: string;
  checkedStatus: boolean;
  setterBooleanValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checkedStatus,
  setterBooleanValue,
}) => {
  const handleCheckboxChange = () => {
    setterBooleanValue((prevValue) => !prevValue);
  };

  return (
    <div>
      <span>
        <label>
          <input
            type="checkbox"
            checked={checkedStatus}
            onChange={handleCheckboxChange}
          />
          <span></span>
          {label}
        </label>
      </span>
    </div>
  );
};
