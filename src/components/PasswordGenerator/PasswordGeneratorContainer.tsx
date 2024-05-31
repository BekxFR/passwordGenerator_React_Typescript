import React, { useState } from "react";
import { LengthPart, Slider } from "./Slider";
import { Checkbox } from "./Checkbox";
import iconRightArrow from "../../icon-arrow-right.svg";
import { CopyPasswordButton } from "./CopyPasswordButton";
import { LengthValues } from "./LengthValues";
import { pgParams, initialValues } from "../../types/PasswordGeneratorType";
import { PasswordContainer } from "./PasswordContainer";

export const PasswordGeneratorContainer = () => {
  const values: pgParams = initialValues;
  const [pwdLength, setPwdLength] = useState<number>(values.pwdLength);
  const [pwdValue, setPwdValue] = useState<string>(values.pwdValue);
  const [seurLevel, setSecurLevel] = useState<number>(values.securLevel);
  const [upperCase, setUpperCase] = useState<boolean>(values.upperCase);
  const [lowerCase, setLowerCase] = useState<boolean>(values.lowerCase);
  const [numbers, setNumbers] = useState<boolean>(values.numbers);
  const [symbols, setSymbols] = useState<boolean>(values.symbols);

  const stateAndSetters = {
    pwdLength,
    setPwdLength,
    pwdValue,
    setPwdValue,
    seurLevel,
    setSecurLevel,
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
  };

  const updateValue = (pwdValue: string) => {
    setPwdValue(pwdValue);
  };

  return (
    <div className="main-container">
      <PasswordContainer pwdValue={pwdValue} />
      {/* <SettingsAndGenerator /> */}
      <div className="settings-container">
        <div className="settings-box">
          <LengthPart {...values} />
          <div className="settings-checkbox">
            <Checkbox
              label="Include Uppercase Letters"
              checkedStatus={values.upperCase}
            />
            <Checkbox
              label="Include Lowercase Letters"
              checkedStatus={values.lowerCase}
            />
            <Checkbox label="Include Numbers" checkedStatus={values.numbers} />
            <Checkbox label="Include Symbols" checkedStatus={values.symbols} />
          </div>
          <div className="strength-container">
            <p className="strength-text">STRENGTH</p>
            <LengthValues level={0} />
          </div>
          <div
            className="generate-button"
            onClick={() => {
              updateValue("newPwd");
              //   console.log("clic on generate-button");
            }}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <div>GENERATE</div>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
