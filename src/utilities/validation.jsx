import { setErrorBorder } from "./setBorder";

export const checkInputs = (
  firstName,
  lastName,
  email,
  message,
  errMessage,
) => {
  if (firstName.current.value.trim() === "") {
    console.log(errMessage);
  }

  if (lastName.current.value.trim() === "") {
    console.log(errMessage);
  }

  if (message.current.value.trim() === "") {
    console.log(errMessage);
  }

  if (!validateEmail(email.current.value.trim())) {
    console.log(errMessage);
  }
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
