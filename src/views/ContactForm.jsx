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

  // useRef error message hooks
  const firstNameErr = useRef(null),
    lastNameErr = useRef(null),
    emailErr = useRef(null),
    messageErr = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({ ...data, [name]: value }));
  };

  const inputs = [
    {
      input: firstName,
      message: "This field is required",
      label: firstNameErr,
    },
    { input: lastName, message: "This field is required", label: lastNameErr },
    {
      input: email,
      message: "Please enter a valid email address",
      label: emailErr,
    },
    { input: message, message: "This field is required", label: emailErr },
  ];

  const formSubmit = (e) => {
    e.preventDefault();

    inputs.map((x) => {
      return checkInputs(x.input, x.message, x.label);
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="contact-form">
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
              <small>First Name</small>
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

            <label htmlFor="first_name" className="err-message">
              <small>First Name</small>
            </label>
          </div>

          <div className="form-control">
            <label htmlFor="last_name" className="text-input">
              <small>Last Name</small>
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

            <label htmlFor="last_name" className="err-message">
              <small>First Name</small>
            </label>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="email" className="text-input">
            <small>Email</small>
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

          <label htmlFor="email" className="err-message">
            <small>First Name</small>
          </label>
        </div>

        <div className="radio-container">
          <label htmlFor="radio" className="radio-input">
            <small>Query Type</small>
          </label>

          <div className="radio-button" id="radio-button">
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

          <label htmlFor="radio" className="err-message">
            <small>First Name</small>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="message" className="text-input">
            <small>Message</small>
          </label>

          <TextArea
            id={"message"}
            className={"message"}
            name={"message"}
            value={data.message}
            onChange={handleInputChange}
            ref={message}
          />

          <label htmlFor="message" className="err-message">
            <small>First Name</small>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="consent" className="check-input">
            <Input
              type={"checkbox"}
              id={"consent"}
              className={"consent"}
              ref={consent}
            />
            <small>I consent to being contacted by the team</small>
          </label>
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
    </div>
  );
};
