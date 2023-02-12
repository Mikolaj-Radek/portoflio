import "./contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <p className="contact-me">Skontaktuj się ze mną!</p>
      <div className="contact">
        <form
          id="contactform"
          action="https://formsubmit.io/send/mikolajradek1@gmail.com"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="email" className="email">
            Twój e-mail *
          </label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="comment" className="comment">
            Wiadomość *
          </label>
          <textarea id="comment" name="comment" rows="8" required />
          <input
            type="hidden"
            name="_redirect"
            id="name"
            value="https://portoflio-dziekuje.netlify.app/"
          />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
