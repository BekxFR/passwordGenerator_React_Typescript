export interface pgParams {
  pwdLength: number;
  pwdValue: string;
  securLevel: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export const initialValues: pgParams = {
  pwdLength: 10,
  pwdValue: "",
  securLevel: 4,
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
};
