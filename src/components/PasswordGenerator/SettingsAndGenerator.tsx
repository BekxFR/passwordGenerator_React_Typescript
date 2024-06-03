import React, { useEffect, useState } from "react";
import { PasswordLengthContainer } from "./LengthAndSlider";
import { StrengthContainer } from "./StrengthContainer";
import { GeneratePasswordButton } from "./GeneratePasswordButton";
import { PasswordGeneratorCheckbox } from "./PasswordGeneratorCheckboxes";
import { pgParams, initialValues } from "./types/PasswordGeneratorType";
import { useCountTrueCheckboxes } from "./hooks/useCountTrueCheckboxes";
import { updateStrengthAndPassword } from "./updateStrengthAndPassword";

interface pwdSetter {
  setPwdValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SettingsAndGenerator: React.FC<pwdSetter> = (props) => {
  const { setPwdValue } = props;

  const values: pgParams = initialValues;
  const [pwdLength, setPwdLength] = useState<number>(values.pwdLength);
  const [secureLevel, setSecureLevel] = useState<number>(values.secureLevel);
  const [upperCase, setUpperCase] = useState<boolean>(values.upperCase);
  const [lowerCase, setLowerCase] = useState<boolean>(values.lowerCase);
  const [numbers, setNumbers] = useState<boolean>(values.numbers);
  const [symbols, setSymbols] = useState<boolean>(values.symbols);

  const checkboxProps = {
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
      pwdLength,
      checkboxProps,
      trueValues,
    });
    // eslint-disable-next-line
  }, [
    pwdLength,
    checkboxProps.lowerCase,
    checkboxProps.numbers,
    checkboxProps.symbols,
    checkboxProps.upperCase,
  ]);
  return (
    <>
      <div className="settings-container">
        <div className="settings-box">
          <PasswordLengthContainer
            pwdLength={pwdLength}
            setPwdLength={setPwdLength}
          />
          <PasswordGeneratorCheckbox checkboxProps={checkboxProps} />
          <div className="strength-container">
            <p className="strength-text">STRENGTH</p>
            <StrengthContainer level={secureLevel} />
          </div>
          <GeneratePasswordButton
            updateStrengthAndPassword={() =>
              updateStrengthAndPassword({
                setPwdValue,
                setSecureLevel,
                pwdLength,
                checkboxProps,
                trueValues,
              })
            }
          />
        </div>
      </div>
    </>
  );
};
