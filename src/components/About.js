import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Jameem",
  lastName: "Mohammed",
  bithday: "19.09.1989",
  address: "Busse str. 18, Hamburg",
  email: "jameem.mp@gmail.com",
  serviceLists: [
    "Fullstack Web Development",
    "Expertise in Cutting Edge Technologies",
    "Enterprise Resource Planning Consultant",
    "Master in Javascript World",
  ],
  skills: {
    language: [
      { name: "English", value: "95" },
      { name: "Malayalam", value: "100" },
      { name: "Hindi", value: "80" },
    ],
  },
  education: [
    { year: "2009 - 2013", unv: "Calicut University", degree: "Bachelors Degree" },
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
    { year: "2017 - 2019", company: "Premier Logistics LLC", deg: "Fullstack Developer" },
    { year: "2014 - 2017", company: "Codinoz Technologies", deg: "Intermediate Developer" },
    { year: "2013 - 2014", company: "Polosys Technologies", deg: "Junior Developer" },
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
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Jameem Mohammed.</span> I build things for th web,
                  and {`I'm`} very passionate and dedicated to my work. I have been building applications 
                   with different
                  languages for the last nine years. I'm an advocate for
                  people-first, collaborative company culture, constant learning
                  and open-source tools.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
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
