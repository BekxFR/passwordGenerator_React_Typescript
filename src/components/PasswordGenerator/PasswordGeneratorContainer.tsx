import { useState } from "react";
import { PasswordContainer } from "./PasswordContainer";
import { SettingsAndGenerator } from "./SettingsAndGenerator";

export const PasswordGeneratorContainer = () => {
  const [pwdValue, setPwdValue] = useState<string>("");

  return (
    <div className="main-container">
      <PasswordContainer pwdValue={pwdValue} />
      <SettingsAndGenerator setPwdValue={setPwdValue} />
    </div>
  );
};
