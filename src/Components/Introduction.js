import "../Component-Styles/introduction.css";
import "../Component-Styles/fade-animation.css";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
export default function Introduction() {
  const { language } = useContext(LanguageContext);

  if (language === "English") {
    return (
      <div className="introduction introductionFadeIn">
        <h1 className="x-small-heading">Hello, my name is</h1>
        <h2 className="big-heading">Egnate Noniashvili.</h2>
        <h3 className="big-heading">
          I specialize in front end web development.
        </h3>
        <p className="paragraph">
          I am a self-taught front-end web developer based in Tbilisi, Georgia.
          I've been developing Web Apps since 2021. I consider myself as a
          well-organised person, problem solver and an independent coder with
          high attention to detail.
        </p>
        <a className="button" href="#about">
          Get To Know Me!
        </a>
      </div>
    );
  } else {
    return (
      <div className="introduction introductionFadeIn">
        <h1 className="x-small-heading">გამარჯობა, ჩემი სახელია</h1>
        <h2 className="big-heading">ეგნატე ნონიაშვილი.</h2>
        <h3 className="big-heading">ფრონტ ენდ დეველოპერი.</h3>
        <p className="paragraph">
          მე ვარ თბილისში მოღვაწე თვითნასწავლი ფრონტ-ენდ დეველოპერი. მე თავს
          მივიჩნევ დეტალებზე ორიენტირებულ ადამიანად, რომელსაც აქვს დამოუკიდებლად
          მუშაობის და პრობლემების გადაჭრის სწრაფი გზების მოძიების ნიჭი.
        </p>
        <a className="button" href="#about">
          გამიცანი!
        </a>
      </div>
    );
  }
}
