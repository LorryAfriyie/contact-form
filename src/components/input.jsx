import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ name, id, className, type, value, onChange, checked }, ref) => {
    return (
      <>
        <input
          type={type}
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          ref={ref}
          checked={checked}
        />
      </>
    );
  },
);

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef(
  ({ name, id, className, value, onChange, row, col }, ref) => {
    return (
      <>
        <textarea
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          ref={ref}
          rows={5}
        ></textarea>
      </>
    );
  },
);
