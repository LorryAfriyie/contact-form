import { setErrorBorder, setRadioError, setCheckboxError } from "./setBorder";
import { validateEmail } from "./emailRegex";

const names = ["first_name", "last_name", "email", "message"];

// Setting error styles for input text boxes
export const checkInputs = (input, message, label) => {
  if (input.current.value.trim() === "" && input.current.name == names[0]) {
    setErrorBorder(input.current, message, label.current);
  }

  if (input.current.value.trim() === "" && input.current.name == names[1]) {
    setErrorBorder(input.current, message, label.current);
  }

  if (input.current.value.trim() === "" && input.current.name == names[3]) {
    setErrorBorder(input.current, message, label.current);
  }

  if (
    !validateEmail(input.current.value.trim()) &&
    input.current.name == names[2]
  ) {
    setErrorBorder(input.current, message, label.current);
  }
};

// Setting error style for radio button
export const checkRadio = (input, label, radioArr) => {
  if (input === "" || input === undefined || input === null)
    setRadioError(label, radioArr);
};

// Setting error style for checkbox
export const validateCheckbox = (input, label) => {
  if (!input) setCheckboxError(label);
};

export const checkErrors = (form) => {
  let isValid = true;

  form.current.querySelectorAll(".form-control").forEach((control) => {
    if (control.classList.contains("error")) isValid = false;
  });

  return isValid;
};
