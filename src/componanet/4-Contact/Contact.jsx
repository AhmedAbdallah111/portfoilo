import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import mailAnimation from "../../../public/animation/mail.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("mpwadaeg");

  return (
    <section id="contact" className="contact">
      <h2 className="title">
        <span className="icon-mail1"></span>Contact Us
      </h2>
      <p>
        Contact Us for more information and Get notified when I publish
        something new .{" "}
      </p>
      <div
        style={{ justifyContent: "space-between" }}
        className="form-div flex"
      >
        <form
          onSubmit={handleSubmit}
          name="email"
          action="email"
          className="form"
        >
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "25px" }} className="flex">
            <label htmlFor="message">Your Massega:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          {state.succeeded && (
            <p className="flex sam" style={{ marginTop: "20px" }}>
              <Lottie
                className="lottie"
                loop={false}
                style={{ width: "40px", marginTop: "10px" }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 🤗
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact"
            style={{ width: "22rem" }}
            animationData={mailAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
