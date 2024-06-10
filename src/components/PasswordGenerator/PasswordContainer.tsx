import React, { useContext, useEffect } from "react";
import { CopyPasswordButton, PasswordGeneratorContext } from "./";

export const PasswordContainer: React.FC = () => {
  const { pwdValue, setPwdValue } = useContext(PasswordGeneratorContext);

  useEffect(() => {
    setPwdValue(pwdValue);
    // eslint-disable-next-line
  }, [pwdValue]);

  return (
    <div className="password-container">
      <div className="password-field">{pwdValue}</div>
      <CopyPasswordButton {...{ pwdValue }} />
    </div>
  );
};
