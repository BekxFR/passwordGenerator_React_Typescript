import { useMemo } from "react";
import { CheckboxProps } from "../types/PasswordGeneratorType";

export const useCountTrueCheckboxes = (checkboxProps: CheckboxProps) => {
  return useMemo(() => {
    const checkboxValues = Object.values(checkboxProps);
    const trueCheckboxes = checkboxValues.filter(
      (value) => typeof value === "boolean" && value,
    );
    return trueCheckboxes.length;
  }, [checkboxProps]);
};
