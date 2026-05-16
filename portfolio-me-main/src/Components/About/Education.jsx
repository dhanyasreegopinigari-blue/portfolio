import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
        <Timeline events={[
            {
            date: "2024 - present",
            title: "B.Tech in Computer Science Engineering (AI & ML)",
            description: "Jawaharlal Nehru Technological University of Hyderabad (JNTUH)"
            },
            {
            date: "2022 - 2024",
            title: "Telangana State Board of Intermediate Education (MPC)",
            description: "Mahatma jyothiba phule jr.college"
            },
            {
            date: "2022",
            title: "Telangana Board of Secondary Education",
            description: "Mahatma jyothiba phule residential school"
            }
        ]} />
    </div>
  )
}

export default Education;