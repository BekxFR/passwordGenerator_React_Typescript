import React, { useEffect, useState } from "react";
import { CopyPasswordButton } from "./CopyPasswordButton";
import { pgParams } from "../../types/PasswordGeneratorType";

interface SettingsAndGeneratorProps {
  stateAndSetters: {
    pwdLength: number;
    setPwdLength: React.Dispatch<React.SetStateAction<number>>;
    pwdValue: string;
    setPwdValue: React.Dispatch<React.SetStateAction<string>>;
    seurLevel: number;
    setSecurLevel: React.Dispatch<React.SetStateAction<number>>;
    upperCase: boolean;
    setUpperCase: React.Dispatch<React.SetStateAction<boolean>>;
    lowerCase: boolean;
    setLowerCase: React.Dispatch<React.SetStateAction<boolean>>;
    numbers: boolean;
    setNumbers: React.Dispatch<React.SetStateAction<boolean>>;
    symbols: boolean;
    setSymbols: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const SettingsAndGenerator: React.FC<SettingsAndGeneratorProps> = ({
  stateAndSetters,
}) => {
  const {
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
  } = stateAndSetters;
  return <></>;
};
