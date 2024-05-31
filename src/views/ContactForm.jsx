import { Input, TextArea } from "../components/input";
import { Button } from "../components/button";
import { checkInputs } from "../utilities/validation";
import { Modal } from "../components/modal";
import { useState, useRef, useEffect } from "react";

export const ContactForm = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  // useRef Hooks
  const firstName = useRef(null),
    lastName = useRef(null),
    email = useRef(null),
    message = useRef(null),
    consent = useRef(null);

  // useRef label hooks
  const firstNameErr = useRef(null),
    lastNameErr = useRef(null),
    emailErr = useRef(null),
    messageErr = useRef(null);

  const errorMessage = "This field is required";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({ ...data, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    checkInputs(firstName, lastName, email, message, errorMessage);

    /* alert(
      data.first_name +
        " " +
        data.last_name +
        " " +
        data.email +
        " " +
        data.message,
    ); */
  };

  useEffect(() => {}, []);

  return (
    <main className="contact-form">
      <form
        className="form"
        id="form"
        name="form"
        noValidate
        onSubmit={formSubmit}
      >
        <h2 className="heading">Contact Us</h2>

        <div className="personal-details">
          <div className="form-control">
            <label htmlFor="first_name" className="text-input">
              First Name
            </label>
            <Input
              type={"text"}
              id={"first_name"}
              className={"first_name"}
              name={"first_name"}
              value={data.first_name}
              error
              onChange={handleInputChange}
              ref={firstName}
            />

            <div className="error-message">
              <label
                htmlFor="first_name"
                className="label-message"
                ref={firstNameErr}
              >
                Message
              </label>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="last_name" className="text-input">
              Last Name
            </label>

            <Input
              type={"text"}
              id={"last_name"}
              className={"last_name"}
              name={"last_name"}
              value={data.last_name}
              onChange={handleInputChange}
              ref={lastName}
            />

            <div className="error-message">
              <label
                htmlFor="last_name"
                className="label-message"
                ref={lastNameErr}
              >
                Message
              </label>
            </div>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="email" className="text-input">
            Email
          </label>

          <Input
            type={"text"}
            id={"email"}
            className={"email"}
            name={"email"}
            value={data.email}
            onChange={handleInputChange}
            ref={email}
          />

          <div className="error-message">
            <label htmlFor="email" className="label-message" ref={emailErr}>
              Message
            </label>
          </div>
        </div>

        <div className="radio-button">
          <div className="form-control">
            <Input
              type={"radio"}
              id={"general_enquiry"}
              className={"general_enquiry"}
              name={"radio"}
            />
            <label htmlFor="general_enquiry">General Enquiry</label>
          </div>

          <div className="form-control">
            <Input
              type={"radio"}
              id={"support_request"}
              className={"support_request"}
              name={"radio"}
            />
            <label htmlFor="support_request">Support Request</label>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="message" className="text-input">
            Message
          </label>

          <TextArea
            id={"message"}
            className={"message"}
            name={"message"}
            value={data.message}
            onChange={handleInputChange}
            ref={message}
          />

          <div className="error-message">
            <label htmlFor="message" className="label-message" ref={messageErr}>
              Message
            </label>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="consent" className="check-input">
            <Input
              type={"checkbox"}
              id={"consent"}
              className={"consent"}
              ref={consent}
            />
            I consent to being contacted by the team
          </label>

          <div className="error-message">
            <label htmlFor="consent" className="error">
              Message
            </label>
          </div>
        </div>

        <Button
          type={"submit"}
          text={"Submit"}
          name={"btn-submit"}
          id={"btn-submit"}
          className={"btn-submit"}
        />
      </form>

      <Modal />
    </main>
  );
};
