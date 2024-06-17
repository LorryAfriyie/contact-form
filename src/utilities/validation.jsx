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

  if (input.current.value.trim() === "" && input.current.name == names[2]) {
    setErrorBorder(input.current, message, label.current);
  }

  if (
    !validateEmail(input.current.value.trim()) &&
    input.current.name == names[3]
  ) {
    setErrorBorder(input.current, message, label.current);
  }
};

// Setting error style for radio button
export const checkRadio = (input, label) => {
  switch (input.current.checked) {
    case true:
      console.log("Checked");
      break;
    case false:
      if (
        input.current.className === "general_enquiry" &&
        input.current.name === "support_request"
      )
        setRadioError(input, label);
      break;
    default:
      break;
  }

  if (!input.current.checked) setRadioError(input, label);
  /* if (input === "" || input === undefined || input === null)
    setRadioError(input, label); */
};

// Setting error style for checkbox
export const validateCheckbox = (input, label) => {
  if (!input.current.checked) setCheckboxError(label);
};
