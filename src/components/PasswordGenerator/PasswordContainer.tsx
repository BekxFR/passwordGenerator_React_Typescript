import React, { useEffect, useState } from "react";
import { CopyPasswordButton } from "./CopyPasswordButton";
import { pgParams } from "../../types/PasswordGeneratorType";

interface PasswordContainerProps {
  pwdValue: string;
}

export const PasswordContainer: React.FC<PasswordContainerProps> = ({
  pwdValue,
}) => {
  const [value, setValue] = useState<string>(pwdValue);

  useEffect(() => {
    setValue(pwdValue);
  }, [pwdValue]);

  return (
    <div className="password-container">
      <div className="password-field">{value}</div>
      <CopyPasswordButton pwdValue={value} />
    </div>
  );
};
