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

export const TextArea = ({ name, id, className, value, onChange }) => {
  return (
    <>
      <textarea
        name={name}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};
