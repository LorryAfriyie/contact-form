export const radioButtonStyle = (radio) => {
  radio.map((x) => {
    if (x.item.current.checked)
      x.item.current.parentElement.className = "form-control success";
  });
};
