import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">
      <h1 className='heading'>{"<About />"}</h1>
      <div className="about-description">
        <Education />
        <Interests interests={["Artificial Intelligence", "Machine Learning", "Data Science", "Prompt Engineering", "Cloud Computing (AWS)", "Cybersecurity Fundamentals", "Web Development", "Python Programming", "Data Science", "Full-Stack Development"
        , "Machine Learning", "Generative AI", "NLP"]} />
        <Hobbies hobbies={["Coding", "Reading Books", "Photography", "Writing", "Singing", "Playing Badminton", "Listening to Music"]} />
      </div>
    </div>
  );
}

export default About;
