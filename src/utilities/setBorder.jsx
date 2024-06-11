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
