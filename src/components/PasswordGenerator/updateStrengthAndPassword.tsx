import { complexGeneratePassword, CheckboxProps } from "./";

const TOOWEAK = 0;
const WEAK = 1;
const MEDIUM = 2;
const STRONG = 3;
const DEFAULT = 4;

interface UpdateStrengthLevelProps {
  setPwdValue: React.Dispatch<React.SetStateAction<string>>;
  setSecureLevel: React.Dispatch<React.SetStateAction<number>>;
  passwordLength: number;
  checkboxProps: CheckboxProps;
  trueValues: number;
}

export const updateStrengthAndPassword = (props: UpdateStrengthLevelProps) => {
  const {
    setPwdValue,
    setSecureLevel,
    passwordLength,
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
        passwordLength < 14
          ? TOOWEAK
          : passwordLength < 16
          ? WEAK
          : passwordLength < 18
          ? MEDIUM
          : STRONG;
    } else {
      level =
        passwordLength < 12
          ? TOOWEAK
          : passwordLength < 14
          ? WEAK
          : passwordLength < 16
          ? MEDIUM
          : STRONG;
    }
  } else if (trueValues === 2) {
    level =
      passwordLength < 10
        ? TOOWEAK
        : passwordLength < 12
        ? WEAK
        : passwordLength < 14
        ? MEDIUM
        : STRONG;
  } else if (trueValues === 3) {
    level =
      passwordLength < 9
        ? TOOWEAK
        : passwordLength < 11
        ? WEAK
        : passwordLength < 13
        ? MEDIUM
        : STRONG;
  } else if (trueValues === 4) {
    level =
      passwordLength < 7
        ? TOOWEAK
        : passwordLength < 9
        ? WEAK
        : passwordLength < 12
        ? MEDIUM
        : STRONG;
  }
  setSecureLevel(level);
  complexGeneratePassword({ passwordLength, setPwdValue, checkboxProps });
};
