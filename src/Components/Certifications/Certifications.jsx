import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'

function Certifications({

certificates = [
{
title:"IBM RAG and Agentic AI",
issuer:"IBM",
date:"2026",
skills:["RAG","Agentic AI","Large Language Models","AI Workflows"],
link:"./certificates/ibm-rag-agentic-ai.pdf"
},
{
title:"IBM Generative AI for Software Development",
issuer:"IBM",
date:"2026",
skills:["Generative AI","Software Development","AI-assisted Coding","Machine Learning"],
link:"./certificates/ibm-genai-for-sw-dev.pdf"
},
{
title:"Google AI Essentials",
issuer:"Google",
date:"2026",
skills:["Artificial Intelligence","Prompt Engineering","Generative AI","AI Tools"],
link:"./certificates/google-ai-essentials.pdf"
},
{
title:"Google Prompting Essentials",
issuer:"Google",
date:"2026",
skills:["Prompt Engineering","Generative AI","LLM Usage","AI Communication"],
link:"./certificates/google-prompting-essentials.pdf"
},
{
title:"Google Data Analysis with Python",
issuer:"Google",
date:"2026",
skills:["Python","Pandas","Data Analysis","Data Visualization"],
link:"./certificates/google-data-analysis-with-python.pdf"
},
{
title:"Google IT Automation with Python",
issuer:"Google",
date:"2026",
skills:["Python","Automation","Scripting","IT Support"],
link:"./certificates/google-it-automation-with-python.pdf"
},
{
title:"Google Network Security",
issuer:"Google",
date:"2026",
skills:["Network Security","Cybersecurity","Risk Management","Security Operations"],
link:"./certificates/google-network-security.pdf"
},
{
title:"Cisco Cyber Security",
issuer:"Cisco",
date:"2026",
skills:["Cybersecurity","Network Security","Threat Detection","Security Fundamentals"],
link:"./certificates/cisco-cyber.pdf"
}
]

}) {

return (

<div className="certifications">

<h1 className='heading'>
{"< Certifications />"}
</h1>

<div className="certificates">

{certificates.map((certificate,index)=>(

<Certificate
key={index}
certificate={certificate}
/>

))}

</div>

</div>

)

}

export default Certifications