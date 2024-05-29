import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ name, id, className, type, value, onChange }, ref) => {
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
        />
      </>
    );
  },
);

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef(
  ({ name, id, className, value, onChange }, ref) => {
    return (
      <>
        <textarea
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          ref={ref}
        ></textarea>
      </>
    );
  },
);
