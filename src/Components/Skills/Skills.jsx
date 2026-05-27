import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({

programming_languages = [
"Java",
"Python",
"JavaScript",
"C/C++",
"SQL",
"HTML5",
"TypeScript"
],

fundamentals = [
"Data Structures & Algorithms",
"Object Oriented Programming",
"DBMS",
"Operating Systems",
"Computer Networks",
"Software Engineering"
],

web_technologies = [
"HTML5",
"CSS3",
"REST APIs",
"JSON",
"Socket.IO"
],

frameworks = [
"React.js",
"Node.js",
"Express.js",
"Tailwind CSS",
"Bootstrap",
"Flask",
"Next.js"
],

database = [
"MongoDB",
"MySQL",
"PostgreSQL",
"Firebase",
"Prisma"
],

tools = [
"Git",
"GitHub",
"VS Code",
"Jupyter Notebook",
"Postman",
"Docker",
"cursor"
],

cloud = [
"AWS",
"Vercel",
"Netlify",
"Render",
"Supabase"
],

ai = [
"NumPy",
"Pandas",
"Scikit-Learn",
"PyTorch",
"TensorFlow",
"Generative AI",
"Prompt Engineering",
"Gemini AI"
],

soft = [
"Communication",
"Problem Solving",
"Team Collaboration",
"Critical Thinking",
"Adaptability",
"Leadership",
"Time Management",
"Learning Agility"
]

}) {

return (

<div className="skills">

<h1 className='heading'>
{"< Skills />"}
</h1>

<div className="skills-description">

<SkillContainer
title="Programming Languages"
skills={programming_languages}
/>

<SkillContainer
title="Core CS Fundamentals"
skills={fundamentals}
/>

<SkillContainer
title="Web Technologies"
skills={web_technologies}
/>

<SkillContainer
title="Frameworks & Libraries"
skills={frameworks}
/>

<SkillContainer
title="Databases"
skills={database}
/>

<SkillContainer
title="Tools"
skills={tools}
/>

<SkillContainer
title="Cloud & Deployment"
skills={cloud}
/>

<SkillContainer
title="AI / ML"
skills={ai}
/>

<SkillContainer
title="Soft Skills"
skills={soft}
/>

</div>

</div>

)

}

export default Skills;