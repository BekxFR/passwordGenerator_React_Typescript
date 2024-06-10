import React, { useState } from "react";
import {
  initialValues,
  PasswordGeneratorContextParams,
} from "../types/PasswordGeneratorType";

const PasswordGeneratorContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [passwordLength, setPwdLength] = useState<number>(
    initialValues.passwordLength,
  );
  const [pwdValue, setPwdValue] = useState<string>(initialValues.pwdValue);
  const [secureLevel, setSecureLevel] = useState<number>(
    initialValues.secureLevel,
  );
  const [upperCase, setUpperCase] = useState<boolean>(initialValues.upperCase);
  const [lowerCase, setLowerCase] = useState<boolean>(initialValues.lowerCase);
  const [numbers, setNumbers] = useState<boolean>(initialValues.numbers);
  const [symbols, setSymbols] = useState<boolean>(initialValues.symbols);

  const contextValue: PasswordGeneratorContextParams = {
    passwordLength,
    pwdValue,
    secureLevel,
    setPwdLength,
    setPwdValue,
    setSecureLevel,
    upperCase,
    lowerCase,
    numbers,
    symbols,
    setUpperCase,
    setLowerCase,
    setNumbers,
    setSymbols,
  };

  return (
    <PasswordGeneratorContext.Provider value={contextValue}>
      {children}
    </PasswordGeneratorContext.Provider>
  );
};

export const PasswordGeneratorContext = React.createContext<
  PasswordGeneratorContextParams
>({
  passwordLength: initialValues.passwordLength,
  pwdValue: initialValues.pwdValue,
  secureLevel: initialValues.secureLevel,
  upperCase: initialValues.upperCase,
  lowerCase: initialValues.lowerCase,
  numbers: initialValues.numbers,
  symbols: initialValues.symbols,
  setPwdLength: () => {},
  setPwdValue: () => {},
  setSecureLevel: () => {},
  setUpperCase: () => {},
  setLowerCase: () => {},
  setNumbers: () => {},
  setSymbols: () => {},
});

export default PasswordGeneratorContextProvider;
