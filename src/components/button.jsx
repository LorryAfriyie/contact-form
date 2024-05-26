export const Button = ({ type, name, id, className, text }) => {
  return (
    <>
      <button type={type} name={name} id={id} className={className}>
        {text}
      </button>
    </>
  );
};
