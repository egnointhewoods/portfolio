import Fade from "react-reveal/Fade";
import OtherProjects from "./OtherProjects";
import Contact from "./Contact";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import ProjectComponent from "./ProjectComponent";
export default function Projects() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="section projectsWrapper" id="projects">
      <Fade up>
        <div className="section-header">
          <h2 className="about-heading">Some Things I’ve Built</h2>
        </div>
      </Fade>
      <Fade up>
        <ProjectComponent
          descPlacement="Left"
          title={
            language === "English" ? `GetWelly.com Clone` : `GetWelly.com კლონი`
          }
          imageId="getWellyImg"
          hostedLink="https://egnate-landing.vercel.app/"
          description={
            language === "English"
              ? `This project is a product landing page (Based on GetWelly
              website design). Users can see some of the best selling
              products on the homepage and they can also add items to the
              cart.`
              : `ეს პროექტი არის ონლაინ მაღაზიის ვებსაიტი, რომელიც
              GetWelly.com'ის დიზაინის მიხედვით ავაწყე. მომხმარებლებს
              შეუძლიათ ნახონ ონლაინ მაღაზიის პროდუქტები, გაეცნონ მათ
              დეტალებს და დაამატონ ისინი კალათაში.`
          }
          technology={["React", "CodeSandbox"]}
          githubLink="https://github.com/egnointhewoods/landing-page"
        />
      </Fade>

      <Fade up>
        <ProjectComponent
          descPlacement="Right"
          title="Submission Form"
          imageId="submissionFormImg"
          hostedLink="https://da-internship-egnate.netlify.app/"
          description={
            language === "English"
              ? `This was a Vanilla JavaScript project that I created for the Vue.js internship that I was enrolled in for 2 months. Users can submit some data that gets stored in the local storage and gets displayed on the screen.`
              : `ეს პროექტი Vue.js-ის სტაჟირების მისაღები გამოცდისთვის გავაკეთე, რომელსაც 2 თვის განმავლობაში გავდიოდი. ვებსაიტზე მომხმარებლებს შეუძლიათ შეიყვანონ მონაცემები, რომლებიც Local Storage-ში შეინახება და ეკრანზე გამოჩნდება დარეფრეშების შემდეგაც.`
          }
          technology={["HTML", "CSS", "JS"]}
          githubLink="https://github.com/egnointhewoods/DA-Internship-Test"
        />

        <ProjectComponent
          descPlacement="Left"
          title={
            language === "English" ? `Portfolio Website` : `პორტფოლიოს ვებსაიტი`
          }
          imageId="portfolioImg"
          hostedLink="https://egnate.vercel.app/"
          description={
            language === "English"
              ? `Yup! The page that you are looking at. I used 'React Reveal'
              for the animations that got the job done super quickly.`
              : `დიახ ეს ის ვებსაიტია რომელსაც ამწამს უყურებთ! ანიმაციებისთვის გამოვიყენე "React-Reveal" ბიბლიოთეკა.`
          }
          technology={["React", "CodeSandbox", "Material UI"]}
          githubLink="https://github.com/egnointhewoods/portfolio"
        />

        <ProjectComponent
          descPlacement="Right"
          title={language === "English" ? `Movie Website` : `ფილმების ვებსაიტი`}
          imageId="movieAppImg"
          hostedLink="https://egnatemovie.netlify.app/"
          description={
            language === "English"
              ? `Users can see some trending and upcoming movies on the home
              page of this website. They can also search for some of their
              favourite TV Shows, Actors and Movies by typing the keywords
              in the search field and get some details about it.`
              : `ამ ვებსაიტზე მომხმარებლებს შეუძლიათ ნახონ ტრენდული და ჯერ
              კიდევ არ გამოსული ფილმებისა და სერიალების დეტალები: ქასთი,
              აღწერა, ა.შ. მათ ასევე შეუძლიათ ძიების ველში მოიძიონ ფილმები,
              სერიალები და მსახიობები.`
          }
          technology={["React", "Bootstrap", "API"]}
        />
      </Fade>
      <OtherProjects />
      <Fade up>
        <Contact />
      </Fade>
    </div>
  );
}
