import "./contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <p className="contact-me">Skontaktuj się ze mną!</p>
      <div className="contact">
        <form
          id="contactform"
          action="https://formsubmit.io/send/put your email here"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="email" className="email">
            Twój e-mail *
          </label>
          <input type="email" name="email" id="email" />
          <label htmlFor="comment" className="comment">
            Wiadomość
          </label>
          <textarea id="comment" name="comment" rows="8" />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
