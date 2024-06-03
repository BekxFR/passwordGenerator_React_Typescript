import { complexGeneratePassword } from "./passwordGenerators";

const TOOWEAK = 0;
const WEAK = 1;
const MEDIUM = 2;
const STRONG = 3;
const DEFAULT = 4;

interface CheckboxProps {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}

interface UpdateStrengthLevelProps {
  setPwdValue: React.Dispatch<React.SetStateAction<string>>;
  setSecureLevel: React.Dispatch<React.SetStateAction<number>>;
  pwdLength: number;
  checkboxProps: CheckboxProps;
  trueValues: number;
}

export const updateStrengthAndPassword = (props: UpdateStrengthLevelProps) => {
  const {
    setPwdValue,
    setSecureLevel,
    pwdLength,
    checkboxProps,
    trueValues,
  } = props;
  if (trueValues === 0) {
    setPwdValue("");
    setSecureLevel(DEFAULT);
    return;
  }
  let level = DEFAULT;
  if (trueValues === 1) {
    if (checkboxProps.numbers) {
      level =
        pwdLength < 14
          ? TOOWEAK
          : pwdLength < 16
          ? WEAK
          : pwdLength < 18
          ? MEDIUM
          : STRONG;
    } else {
      level =
        pwdLength < 12
          ? TOOWEAK
          : pwdLength < 14
          ? WEAK
          : pwdLength < 16
          ? MEDIUM
          : STRONG;
    }
  } else if (trueValues === 2) {
    level =
      pwdLength < 10
        ? TOOWEAK
        : pwdLength < 12
        ? WEAK
        : pwdLength < 14
        ? MEDIUM
        : STRONG;
  } else if (trueValues === 3) {
    level =
      pwdLength < 9
        ? TOOWEAK
        : pwdLength < 11
        ? WEAK
        : pwdLength < 13
        ? MEDIUM
        : STRONG;
  } else if (trueValues === 4) {
    level =
      pwdLength < 7
        ? TOOWEAK
        : pwdLength < 9
        ? WEAK
        : pwdLength < 12
        ? MEDIUM
        : STRONG;
  }
  setSecureLevel(level);
  complexGeneratePassword({ pwdLength, setPwdValue, checkboxProps });
};
