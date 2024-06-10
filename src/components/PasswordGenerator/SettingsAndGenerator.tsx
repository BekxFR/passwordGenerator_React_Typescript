import React, { useContext, useEffect } from "react";
import {
  PasswordLengthContainer,
  StrengthContainer,
  GeneratePasswordButton,
  PasswordGeneratorCheckbox,
  useCountTrueCheckboxes,
  updateStrengthAndPassword,
  PasswordGeneratorContext,
  CheckBoxSetterProps,
} from "./";

export const SettingsAndGenerator: React.FC = () => {
  const {
    setPwdValue,
    passwordLength,
    setPwdLength,
    secureLevel,
    setSecureLevel,
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
  } = useContext(PasswordGeneratorContext);

  const checkboxProps: CheckBoxSetterProps = {
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
  };

  const trueValues = useCountTrueCheckboxes(checkboxProps);

  useEffect(() => {
    updateStrengthAndPassword({
      setPwdValue,
      setSecureLevel,
      passwordLength,
      checkboxProps,
      trueValues,
    });
    // eslint-disable-next-line
  }, [passwordLength, lowerCase, numbers, symbols, upperCase]);
  return (
    <>
      <div className="settings-container">
        <div className="settings-box">
          <PasswordLengthContainer
            passwordLength={passwordLength}
            setPwdLength={setPwdLength}
          />
          <PasswordGeneratorCheckbox checkboxProps={checkboxProps} />
          <div className="strength-and-generate-button-container">
            <div className="strength-container">
              <p className="strength-text">STRENGTH</p>
              <StrengthContainer level={secureLevel} />
            </div>
            <GeneratePasswordButton
              updateStrengthAndPassword={() =>
                updateStrengthAndPassword({
                  setPwdValue,
                  setSecureLevel,
                  passwordLength,
                  checkboxProps,
                  trueValues,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
