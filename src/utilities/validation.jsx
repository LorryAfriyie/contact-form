export const checkInputs = (firstName, lastName, email, message) => {
  if (firstName.current.value.trim() === "")
    console.log("This field is required");

  if (lastName.current.value.trim() === "")
    console.log("This field is required");

  if (message.current.value.trim() === "")
    console.log("This field is required");

  if (!validateEmail(email.current.value.trim()))
    console.log("Please enter a valid email address");
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
