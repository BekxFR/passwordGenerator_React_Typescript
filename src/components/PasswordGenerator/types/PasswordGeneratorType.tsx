export interface pgParams {
  pwdLength: number;
  pwdValue: string;
  secureLevel: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export const initialValues: pgParams = {
  pwdLength: 10,
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
