import { Input, TextArea } from "../components/input";
import { Button } from "../components/button";
import {
  checkInputs,
  checkRadio,
  validateCheckbox,
  checkErrors,
} from "../utilities/validation";
import { Modal } from "../components/modal";
import { useState, useRef, useEffect } from "react";
import {
  removeCheckboxError,
  removeErrorBorder,
  removeRadioError,
} from "../utilities/setBorder";

import { radioButtonStyle } from "../utilities/radioCheckedStyle";

export const ContactForm = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  // useRef Hooks
  const firstName = useRef(null),
    lastName = useRef(null),
    email = useRef(null),
    message = useRef(null),
    consent = useRef(null),
    queryType1 = useRef(null),
    queryType2 = useRef(null);

  // useRef error message hooks
  const firstNameErr = useRef(null),
    lastNameErr = useRef(null),
    emailErr = useRef(null),
    messageErr = useRef(null),
    radioBtnErr = useRef(null),
    consentErr = useRef(null);

  const form = useRef(null);

  // Radio button state hook
  const [queryType, setQueryType] = useState("");

  // Checkbox state hook
  const [checkbox, setCheckbox] = useState(false);

  const handleRadioChange = (e) => {
    setQueryType(e.target.value);
  };

  // Input boxes handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({ ...data, [name]: value }));
  };

  // Checkbox handling
  const handleCheckbox = (e) => {
    switch (e.target.checked) {
      case true:
        setCheckbox(true);
        break;
      case false:
        setCheckbox(false);
        break;
      default:
        break;
    }
  };

  // Input useRef array of objects
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
    { input: message, message: "This field is required", label: messageErr },
  ];

  // Radio button useRef array of objects
  const radioRef = [{ item: queryType1 }, { item: queryType2 }];

  // Submit data function
  const formSubmit = (e) => {
    e.preventDefault();

    // Validate input text function
    inputs.map((x) => {
      checkInputs(x.input, x.message, x.label);
    });

    // Validate radio button function
    checkRadio(queryType, radioBtnErr, radioRef);

    // Validate checkbox function
    validateCheckbox(checkbox, consentErr, consent);

    if (checkErrors(form)) setShowModal(true);
  };

  useEffect(() => {
    // Remove input texts error validation
    inputs.map((x) => removeErrorBorder(x.input, x.label));

    // Remove radio button error validation
    removeRadioError(queryType, radioBtnErr, radioRef);

    removeCheckboxError(consent, consentErr);

    // Style the selected radio button
    radioButtonStyle(radioRef);
  });

  return (
    <>
      <div className="contact-form">
        <form
          className="form"
          id="form"
          name="form"
          noValidate
          onSubmit={formSubmit}
          ref={form}
        >
          <h2 className="heading">Contact Us</h2>

          <div className="personal-details">
            {/* First name input */}
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
                onChange={handleInputChange}
                ref={firstName}
              />

              <small className="err-message" ref={firstNameErr} />
            </div>

            {/* Last name input */}
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

              <small className="err-message" ref={lastNameErr} />
            </div>
          </div>

          {/* Email input */}
          <div className="form-control">
            <label htmlFor="email" className="text-input">
              <small>Email</small>
            </label>

            <Input
              type={"email"}
              id={"email"}
              className={"email"}
              name={"email"}
              value={data.email}
              onChange={handleInputChange}
              ref={email}
            />

            <small className="err-message" ref={emailErr} />
          </div>

          {/* Radio Button */}
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
                  value={"General Enquiry"}
                  onChange={handleRadioChange}
                  ref={queryType1}
                />
                <label htmlFor="general_enquiry">General Enquiry</label>
              </div>

              <div className="form-control">
                <Input
                  type={"radio"}
                  id={"support_request"}
                  className={"support_request"}
                  name={"radio"}
                  value={"Support Request"}
                  onChange={handleRadioChange}
                  ref={queryType2}
                />
                <label htmlFor="support_request">Support Request</label>
              </div>
            </div>

            <small className="err-message" ref={radioBtnErr} />
          </div>

          {/* Message textarea */}
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

            <small className="err-message" ref={messageErr} />
          </div>

          {/* Checkbox */}
          <div className="checkbox-container">
            <div className="form-control">
              <Input
                type={"checkbox"}
                id={"consent"}
                className={"consent"}
                onChange={handleCheckbox}
                ref={consent}
              />
              <label htmlFor="consent" className="check-input">
                <small>I consent to being contacted by the team</small>
              </label>
            </div>

            <small className="err-message" ref={consentErr} />
          </div>

          {/* Submit button */}
          <Button
            type={"submit"}
            text={"Submit"}
            name={"btn-submit"}
            id={"btn-submit"}
            className={"btn-submit"}
          />
        </form>
      </div>

      {/* Modal */}
      <Modal show={showModal} />
    </>
  );
};
