import "../Component-Styles/introduction.scss";
import "../Component-Styles/fade-animation.scss";

export default function Introduction() {
  return (
    <div className="introduction introductionFadeIn">
      <h1 className="x-small-heading">Hello, my name is</h1>
      <h2 className="big-heading">Egnate Noniashvili.</h2>
      <h3 className="big-heading">I specialize in front end development.</h3>
      <p className="paragraph">
        I am a self-taught front-end web developer based in Tbilisi, Georgia.
        I've been developing Web Apps since 2021. I consider myself as a
        well-organised person, problem solver and an independent coder with high
        attention to detail.
      </p>
      <a className="button" href="#about">
        Get To Know Me!
      </a>
    </div>
  );
}
