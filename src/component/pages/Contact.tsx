import "./ContactStyle.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vz92nii",
        "template_j3d75w8",
        form.current,
        "2sQOv_mJ49MHLUQ6L"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Animation>
      <div className="contactContainer">
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />

            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
            />

            <textarea name="message" placeholder="Message" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Animation>
  );
}

export default Contact;
