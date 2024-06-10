export interface PasswordGeneratorParams extends CheckboxProps {
  passwordLength: number;
  pwdValue: string;
  secureLevel: number;
}

export const initialValues: PasswordGeneratorParams = {
  passwordLength: 10,
  pwdValue: "",
  secureLevel: 4,
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
};

export interface CheckboxProps {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface CheckBoxSetterProps extends CheckboxProps {
  setUpperCase: React.Dispatch<React.SetStateAction<boolean>>;
  setLowerCase: React.Dispatch<React.SetStateAction<boolean>>;
  setNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  setSymbols: React.Dispatch<React.SetStateAction<boolean>>;
}
