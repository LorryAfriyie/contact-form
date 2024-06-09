export const setErrorBorder = (input, message, label) => {
  input.parentElement.className = "form-control error";
  label.style.color = "hsl(0, 66%, 56%)";
  label.innerText = message;
};

export const removeErrorBorder = (input, label) => {
  if (input.current.parentElement.className === "form-control error") {
    input.current.addEventListener("input", () => {
      input.current.parentElement.className = "form-control";
      label.current.innerText = "";
    });
  }
};
