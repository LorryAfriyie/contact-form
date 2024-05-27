import { Input, TextArea } from "../components/input";
import { Button } from "../components/button";

export const ContactForm = () => {
  return (
    <main className="contact-form">
      <h2 className="heading">Contact Us</h2>

      <form action="" className="form" id="form" name="form" noValidate>
        <div className="form-control">
          <label htmlFor="first_name">First Name</label>
          <Input type={"text"} id={"first_name"} className={"first_name"} />
        </div>

        <div className="form-control">
          <label htmlFor="last_name">Last Name</label>
          <Input type={"text"} id={"last_name"} className={"last_name"} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Input type={"text"} id={"email"} className={"email"} />
        </div>

        <div className="form-control">
          <Input
            type={"radio"}
            id={"general_enquiry"}
            className={"general_enquiry"}
          />
          <label htmlFor="general_enquiry">General Enquiry</label>
        </div>

        <div className="form-control">
          <Input
            type={"radio"}
            id={"support_request"}
            className={"support_request"}
          />
          <label htmlFor="support_request">Support Request</label>
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <TextArea id={"message"} className={"message"} name={"message"} />
        </div>

        <div className="form-control">
          <Input type={"checkbox"} id={"consent"} className={"consent"} />
          <label htmlFor="consent">
            I consent to being contacted by the team
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
    </main>
  );
};
