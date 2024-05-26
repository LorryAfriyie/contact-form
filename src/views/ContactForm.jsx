import { Input } from "../components/input";
import { Button } from "../components/button";

export const ContactForm = () => {
  return (
    <main className="contact-form">
      <form action="" className="form" id="form" name="form">
        <div className="form-control">
          <Input />
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
