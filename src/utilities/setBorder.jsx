import { validateEmail } from "./emailRegex";

export const setErrorBorder = (input, message, label) => {
  input.parentElement.className = "form-control error";
  label.style.color = "hsl(0, 66%, 56%)";
  label.innerText = message;
};

export const removeErrorBorder = (input, label) => {
  if (
    input.current.parentElement.className === "form-control error" &&
    input.current.name != "email"
  ) {
    input.current.addEventListener("input", () => {
      input.current.parentElement.className = "form-control";
      label.current.innerText = "";
    });
  }

  if (
    input.current.name === "email" &&
    input.current.parentElement.className === "form-control error"
  ) {
    input.current.addEventListener("input", () => {
      if (validateEmail(input.current.value)) {
        input.current.parentElement.className = "form-control";
        label.current.innerText = "";
      }
    });
  }
};

/* Radio button error styling */
export const setRadioError = (label, radioArr) => {
  label.current.style.color = "hsl(0, 66%, 56%)";
  label.current.innerText = "Please select a query type";

  radioArr.map((x) => {
    return (x.item.current.parentElement.className = "form-control error");
  });
};

export const removeRadioError = (input, label, radioArr) => {
  if (input) {
    label.current.innerText = "";

    radioArr.map((x) => {
      return (x.item.current.parentElement.className = "form-control");
    });
  }
};

/* Checkbox error styling */
export const setCheckboxError = (label) => {
  label.current.style.color = "hsl(0, 66%, 56%)";
  label.current.innerText =
    "To submit this form, please consent to being contacted";
};

export const removeCheckboxError = (input, label) => {
  if (input) label.current.innerText = "";
};
