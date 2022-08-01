import "../Component-Styles/contact.css";

export default function Contact() {
  return (
    <div className="contactWrapper">
      <div className="contact" id="contact">
        <h1 className="x-small-heading aboutXSmallHeading"> What's next?</h1>
      </div>
      <h1 className="about-heading contactHeading">Get In Touch</h1>
      <div className="paragraphWrapper">
        <p className="contactParagraph">
          Want to work together or have any questions? I would love to hear from
          you. My inbox is always open. Whether you have a question or just want
          to say hi, I’ll try my best to get back to you!
        </p>
      </div>
      <a
        class="button contactButton"
        href="mailto:egnatenoniashvili6@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Send Me An Email
      </a>
      <h2 className="about-heading contactHeading" id="or">
        Or
      </h2>
      <a
        class="button contactButton"
        href="https://www.linkedin.com/in/egnate-noniashvili-178350238/"
        target="_blank"
        rel="noreferrer"
      >
        Message Me On LinkedIn
      </a>
    </div>
  );
}
