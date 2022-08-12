import "../Component-Styles/contact.css";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  if (language === "English") {
    return (
      <div className="contactWrapper">
        <div className="contact" id="contact">
          <h1 className="x-small-heading aboutXSmallHeading"> What's next?</h1>
        </div>
        <h1 className="about-heading contactHeading">Get In Touch</h1>
        <div className="paragraphWrapper">
          <p className="contactParagraph">
            Want to work together or have any questions? I would love to hear
            from you. My inbox is always open. Whether you have a question or
            just want to say hi, I’ll try my best to get back to you!
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
  } else {
    return (
      <div className="contactWrapper">
        <div className="contact" id="contact">
          <h1 className="x-small-heading aboutXSmallHeading">
            {" "}
            შემდეგი ეტაპი?
          </h1>
        </div>
        <h1 className="about-heading contactHeading">დამიკავშირდი!</h1>
        <div className="paragraphWrapper">
          <p className="contactParagraph">
            გსურს ერთად მუშაობა ან გაქვს რამე შეკითხვა? მოხარული ვიქნები თუ
            დამიკავშირდები. ჩემი ინბოქსი ყოველთვის ღიაა შეტყობინებებისთვის.
          </p>
        </div>
        <a
          class="button contactButton"
          href="mailto:egnatenoniashvili6@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          გამომიგზავნე იმეილი
        </a>
        <h2 className="about-heading contactHeading" id="or">
          ან
        </h2>
        <a
          class="button contactButton"
          href="https://www.linkedin.com/in/egnate-noniashvili-178350238/"
          target="_blank"
          rel="noreferrer"
        >
          მომწერე ლინკდინზე
        </a>
      </div>
    );
  }
}
