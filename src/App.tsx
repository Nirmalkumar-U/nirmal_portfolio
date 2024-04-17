import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Experiance from './components/Experiance'
import Education from './components/Education'

function App() {
  const data = {
    "firstName":"Nirmalkumar",
    "lastName":"Uthamaraj",
    "email":"unirmalkumar3@gmail.com",
    "phone":8778359970,
    "address":"Coimbatore, Tamil Nadu",
    "aboutMe":"I am very enthusiastic about new tech development. A Self Learning with some vision and I'm an excellent collaborator and I challenge myself to enhance my professional skills, capabilities and I manage to work well under pressure and possess excellent time-keeping skills.",
    "resumeUrl":"",
    "designation":"Full Stack Developer",
    "gitHubUrl":"https://github.com/Nirmalkumar-U/",
    "linkedinUrl":"https://in.linkedin.com/in/nirmalkumar-uthamaraj-ab070a212",
    "instagramUrl":"https://www.instagram.com/nimu_unk__/?igsh=MXE5ZGFnZng4Yzc2OQ%3D%3D",
    "imgUrl":"./src/assets/nirmal_pic.jpg",
    "skills":{
      "angular":{
        "name":"Angular 15",
        "class":"DiAngularSimple"
      },
      "typescript":{
        "name":"TypeScript",
        "class":"SiTypescript"
      },
      "nodejs":{
        "name":"Node js",
        "class":"DiNodejs"
      },
      "dotnet":{
        "name":"Dotnet Core 6",
        "class":"SiDotnet"
      },
      "powerbi":{
        "name":"Power bi",
        "class":"SiPowerbi"
      },
      "sql":{
        "name":"SQL Server",
        "class":"TbSql"
      },
      "html":{
        "name":"Html 5",
        "class":"DiHtml5"
      },
      "css":{
        "name":"Css 3",
        "class":"DiCss3"
      },
      "bootstrap":{
        "name":"Bootstrap 5",
        "class":"FaBootstrap"
      },
      "javascript1":{
        "name":"Javascript",
        "class":"DiJavascript1"
      },
      "visualStudio":{
        "name":"Visual Studio",
        "class":"SiVisualstudiocode"
      },
      "projectIdx":{
        "name":"Project Idx",
        "class":"DiRedux"
      },
    },
    "education":[
      {
        "organisation":"NPTEL",
        "address":"Online",
        "certificateName":"UnderStanding Design",
        "CGP":"60%",
        "css":"fa-solid fa-certificate"
      },
      {
        "organisation":"KASC",
        "address":"G.N Mills, Coimbatore",
        "certificateName":"Master of Science in Computer Science",
        "CGP":"80%",
        "css":"fa-solid fa-user-graduate"
      },
      {
        "organisation":"KASC",
        "address":"G.N Mills, Coimbatore",
        "certificateName":"Bachelor of Science in Computer Science",
        "CGP":"75%",
        "css":"fa-solid fa-user-graduate"
      }
    ],
    "project":[
      {
        "name":"HMID",
        "description":"HMID project is used to track inventory and movement of chemical, materials and its waste for Federal corporation.",
        "img":"./src/assets/hmids_logo.png"
      },
      {
        "name":"Smart Tools",
        "description":"Smart tools is used for During an inspection, inspectors typically review documents, records, and procedures, conduct interviews with personnel, and provide feedback. this tool capture all the data and provide the report. It works on both online and offline.",
        "img" : "./src/assets/smarttools.png"

      }
    ],
    "contact":{
      "email":"unirmalkumar3@gmail.com",
      "phone":8778359970,
      "address":"Coimbatore, Tamil Nadu"
    },
    "experiences":[
      {
        "position":"Full Stack Developer",
        "company":"Byteforza Technology",
        "mainSkill":"Angular 14 and DotNet Core 5",
        "fullSkill":"Angular14, Bootstrap, DotNet Core 5, DotNet Entity Framework, ADO.Net, Sql Server",
        "projectName":"Smart Tools",
        "period":"Aug/2022-Jan/2023",
        "resposibility":[
          "res",
          "wdcwf",
          "wfc",
          "vre"
        ]
      },
      {
        "position":"Full Stack Developer",
        "company":"Byteforza Technology",
        "mainSkill":"Angular 14 and DotNet Core 6",
        "fullSkill":"Angular14, Bootstrap, DotNet Core 6, DotNet Entity Framework, LINQ, Power Bi, RDL/RDLC reporting, Sql Server",
        "projectName":"HMID",
        "period":"Feb/2023-Present",
        "resposibility":[
          "res",
          "wdcwf",
          "wfc"
        ]
      }      
    ]
  }
  return (
      <>
          <Nav data={data} />
          <Header data={data} />
          <About data={data} />
          <Skills data={data} />
          <Project data={data} />
          <Experiance data={data} />
          <Education data={data} />
          <Contact data={data} />
          <Footer data={data} />
      </>
  )
}

export default App
