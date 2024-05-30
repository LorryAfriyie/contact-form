import { setErrorBorder } from "./setBorder";

export const checkInputs = (input, errorMessage, label) => {
  if (input === "firstName" && input.current.value.trim() === "")
    setErrorBorder(input.current, errorMessage, label);

  if (input === "lastName" && input.current.value.trim() === "")
    setErrorBorder(input.current, errorMessage, label);

  if (input === "message" && input.current.value.trim() === "")
    setErrorBorder(input.current, errorMessage, label);

  if (input === "email" && !validateEmail(input.current.value.trim()))
    setErrorBorder(input.current, errorMessage, label);
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
