import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'

function Projects({

projects=[

{
title: "Password Strength Analyzer",
description:
"Interactive cybersecurity tool that evaluates password strength in real time using security metrics such as character complexity, length analysis, entropy checks, and vulnerability detection to encourage secure password practices.",
technologies: [
"HTML",
"CSS",
"JavaScript",
"Cybersecurity",
"Password Validation",
"Security Analysis"
],
image: "./images/password-strength-analyzer.png",
github: "https://github.com/dhanyasreegopinigari-blue/password-strength-analyzer",
demo: "https://password-strength-analyzer.vercel.app"
},

{
title: "Phishing Email Detection System",
description:
"Machine learning based phishing detection system that analyzes email content and identifies suspicious patterns to detect phishing attempts and improve email security awareness.",
technologies: [
"Python",
"Machine Learning",
"Scikit-learn",
"Pandas",
"NLP",
"Cybersecurity"
],
image: "./images/phishing-email-detection-system.png",
github: "https://github.com/dhanyasreegopinigari-blue/phishing-email-detection-system",
demo: "https://phishing-email-detection-system.vercel.app"
},

{
title: "Secure Login System",
description:
"Authentication-based web application implementing secure login and signup functionality with password hashing, input validation, session handling, and responsive user interface design.",
technologies: [
"HTML",
"CSS",
"JavaScript",
"Node.js",
"Express.js",
"Authentication"
],
image: "./images/secure-login-system.png",
github: "https://github.com/dhanyasreegopinigari-blue/secure-login-system",
demo: "https://secure-login-system.vercel.app"
},

{
title: "Portfolio Website",
description:
"Personal developer portfolio showcasing projects, certifications, technical skills, and achievements with a modern responsive design, smooth navigation, and professional UI/UX.",
technologies: [
"React",
"Vite",
"Tailwind CSS",
"JavaScript",
"Responsive Design",
"Frontend Development"
],
image: "./images/portfolio.png",
github: "https://github.com/dhanyasreegopinigari-blue/portfolio",
demo: "https://dhanyasree-portfolio.vercel.app"
},

{
title: "SyncTalk",
description:
"Modern real-time chat application supporting room-based messaging, instant communication, persistent chat history, responsive UI, and dark/light mode for a seamless user experience.",
technologies: [
"React",
"Vite",
"Tailwind CSS",
"Socket.IO",
"Node.js",
"Express.js",
"MongoDB"
],
image: "./images/synctalk.png",
github: "https://github.com/dhanyasreegopinigari-blue/SyncTalk",
demo: "https://synctalk.vercel.app"
}

]

}) {

return (

<div className="projects">

<h1 className='heading'>
{"< Projects />"}
</h1>

<div className="projects-description">

{projects.map((project,index)=>(

<ProjectContainer
key={index}
project={project}
/>

))}

</div>

</div>

)

}

export default Projects