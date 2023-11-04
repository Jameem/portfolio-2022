import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Jameem",
  lastName: "Mohammed",
  bithday: "19.09.1989",
  address: "Hamburg, Germany",
  email: "jameem.mp@gmail.com",
  serviceLists: [
    "Ten years of professional experience in Software Engineering",
    "Proficient in JavaScript and TypeScript, with a deep understanding of their nuances.",
    "Strong expertise in building responsive and dynamic web applications using ReactJS.",
    "Skilled in state management solutions, with proficiency in Redux and MobX.",
    "Experienced in creating comprehensive test suites with Cypress for reliable and bug-free applications.",
    "Proficient in version control and collaborative development using Git.",
  ],
  skills: {
    language: [
      { name: "English", value: "95" },
      { name: "Malayalam", value: "100" },
      { name: "Hindi", value: "80" },
    ],
  },
  education: [
    {
      year: "2009 - 2013",
      unv: "Calicut University",
      degree: "Bachelors Degree",
    },
    { year: "2006 - 2007", unv: "IHRD", degree: "Higher Secondary" },
  ],
  working: [
    {
      year: "2021 - current",
      company: "Sport Alliance GmbH",
      deg: "Frontend Engineer",
    },
    {
      year: "2019 - 2021",
      company: "Qubicle Innovations",
      deg: "Tech Lead",
    },
    {
      year: "2017 - 2019",
      company: "Premier Logistics LLC",
      deg: "Fullstack Developer",
    },
    {
      year: "2014 - 2017",
      company: "Codinoz Technologies",
      deg: "Intermediate Developer",
    },
    {
      year: "2013 - 2014",
      company: "Polosys Technologies",
      deg: "Junior Developer",
    },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className='edrea_tm_section hidden animated' id='about'>
        <div className='section_inner'>
          <div className='edrea_tm_about'>
            <div className='left'>
              <div className='image'>
                <img src='img/thumbs/1-1.jpg' alt='' />
                <div className='main' data-img-url='img/about/1.jpg' />
              </div>
            </div>
            <div className='right'>
              <div className='short'>
                <h3 className='name'>
                  {aboutData.firstName}{" "}
                  <span className='coloring'>{aboutData.lastName}</span>
                </h3>
                <h3 className='job'>
                  <AnimatedText />
                </h3>
              </div>
              <div className='text'>
                <p>
                  👋 Hello, I'm <span>Jameem Mohammed</span>, a seasoned Senior
                  Software Engineer with a decade of hands-on experience in
                  Software Engineering. I'm passionate about crafting engaging,
                  efficient, and user-friendly web applications. I'm driven by a
                  passion for staying up-to-date with the latest industry trends
                  and emerging technologies.
                </p>
                <span>🌟 My Expertise:</span>
                <p>
                  <span>
                    🔷 Frontend Technologies: JavaScript, TypeScript, ReactJS
                  </span>
                  - I've honed my skills in creating dynamic and responsive user
                  interfaces using these technologies.
                </p>
                <p>
                  <span>🔷 State Management: Redux and MobX</span> - I excel in
                  implementing efficient state management solutions to ensure
                  seamless user experiences.
                </p>
                <p>
                  <span>🔷 Testing: Cypress</span> - I'm well-versed in
                  end-to-end testing to guarantee the reliability of web
                  applications.
                </p>
                <p>
                  <span>🔷 Version Control: Git</span> - Proficient in
                  collaborative development, branching, and merging workflows.
                </p>
                <p>
                  🤖 I'm driven by a passion for staying up-to-date with the
                  latest industry trends and emerging technologies. Continuous
                  improvement is not just a goal; it's a way of life.
                </p>
              </div>
              <div className='edrea_tm_button'>
                <a href='#' onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
