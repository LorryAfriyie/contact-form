export const Input = ({ name, id, className, type, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
