import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  checkedStatus: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checkedStatus }) => {
  const [isChecked, setIsChecked] = useState(checkedStatus);

  return (
    <div>
      <span>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
              checkedStatus = !checkedStatus;
            }}
          />
          <span></span>
          {label}
        </label>
      </span>
    </div>
  );
};
