import "../Component-Styles/introduction.scss";
import "../Component-Styles/fade-animation.scss";

export default function Introduction() {
  return (
    <div className="introduction introductionFadeIn">
      <h1 className="x-small-heading">Hello, my name is</h1>
      <h2 className="big-heading">Egnate Noniashvili.</h2>
      <h3 className="big-heading">I specialize in front end development.</h3>
      <p className="paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <a className="button" href="#about">
        Get To Know Me!
      </a>
    </div>
  );
}
