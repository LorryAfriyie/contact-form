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

  const errorMessage = "This field is required";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({ ...data, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    document.getElementById().style.color;
    checkInputs(firstName, lastName, email, message, errorMessage);
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
        <h2 className="heading" id="h">
          Contact Us
        </h2>

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
        </div>

        <div className="radio-container">
          <label htmlFor="radio-button" className="radio-input">
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
