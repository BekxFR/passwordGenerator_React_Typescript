import { CheckboxProps } from "./types/PasswordGeneratorType";

interface PasswordGeneratorProps {
  pwdLength: number;
  setPwdValue: React.Dispatch<React.SetStateAction<string>>;
  checkboxProps: CheckboxProps;
}

export const simpleGeneratePassword = (props: PasswordGeneratorProps) => {
  const { pwdLength, setPwdValue, checkboxProps } = props;
  const { upperCase, lowerCase, numbers, symbols } = checkboxProps;
  const characters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };
  const passwordCharacters = `${upperCase ? characters.upperCase : ""}${
    lowerCase ? characters.lowerCase : ""
  }${numbers ? characters.numbers : ""}${symbols ? characters.symbols : ""}`;
  const password = Array(pwdLength)
    .fill(passwordCharacters)
    .map((x) => x[Math.floor(Math.random() * x.length)])
    .join("");
  setPwdValue(password);
};

export const complexGeneratePassword = (props: PasswordGeneratorProps) => {
  const { pwdLength, setPwdValue, checkboxProps } = props;
  const { upperCase, lowerCase, numbers, symbols } = checkboxProps;
  const passwordLength = pwdLength;
  const characterSet: { [key: string]: string } = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };
  let selectedSets: string[] = [];
  if (symbols) selectedSets.push("symbols");
  if (upperCase) selectedSets.push("upperCase");
  if (lowerCase) selectedSets.push("lowerCase");
  if (numbers) selectedSets.push("numbers");

  let tmpPassword = "";
  let password = "";
  const finalPassword = Array(passwordLength)
    .fill(null)
    .map(() => {
      selectedSets.forEach((set) => {
        if (tmpPassword.length < passwordLength - password.length) {
          const randomChar =
            characterSet[set][
              Math.floor(Math.random() * characterSet[set].length)
            ];
          tmpPassword += randomChar;
        }
      });
      const selectedCharIndex = Math.floor(Math.random() * tmpPassword.length);
      const selectedChar = tmpPassword[selectedCharIndex];
      password += selectedChar;
      tmpPassword =
        tmpPassword.slice(0, selectedCharIndex) +
        tmpPassword.slice(selectedCharIndex + 1);
      return selectedChar;
    })
    .join("");
  setPwdValue(finalPassword);
};
