import { setErrorBorder } from "./setBorder";

const names = ["first_name", "last_name", "email", "message"];

export const checkInputs = (input, message, label) => {
  if (input.current.value.trim() === "" && input.current.name == names[0]) {
    input.current.parentElement.className = "form-control error";
    console.log(message);
  }

  if (input.current.value.trim() === "" && input.current.name == names[1]) {
    input.current.parentElement.className = "form-control error";
    console.log(message);
  }

  if (input.current.value.trim() === "" && input.current.name == names[2]) {
    input.current.parentElement.className = "form-control error";
    console.log(message);
  }

  if (
    !validateEmail(input.current.value.trim()) &&
    input.current.name == names[3]
  ) {
    input.current.parentElement.className = "form-control error";
    console.log(message);
  }
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
