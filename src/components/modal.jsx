import { useRef, useEffect } from "react";

export const Modal = ({ show }) => {
  const modal = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    if (show) modal.current.style.display = "block";

    closeBtn.current.onclick = function () {
      modal.current.style.display = "none";
    };

    window.onclick = function (e) {
      if (e.target === modal) modal.current.style.display = "none";
    };
  });

  return (
    <div id="modal" className="modal" ref={modal}>
      <div className="modal-content">
        <span className="close-button" ref={closeBtn}>
          &times;
        </span>
        <h4 className="modal-header">Message Sent!</h4>
        <p>Thanks for completing the form. We&apos;ll be in touch soon!</p>
      </div>
    </div>
  );
};
