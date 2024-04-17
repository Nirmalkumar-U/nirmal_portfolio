import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Experiance from './components/Experiance'

function App() {
  const data = {
    "firstName":"Nirmalkumar",
    "lastName":"Uthamaraj",
    "email":"unirmalkumar3@gmail.com",
    "phone":8778359970,
    "address":"Coimbatore, Tamil Nadu",
    "aboutMe":"I am very enthusiastic about new tech development. A Self Learning with some vision and I'm an excellent collaborator and I challenge myself to enhance my professional skills, capabilities and I manage to work well under pressure and possess excellent time-keeping skills.",
    "resumeUrl":"",
    "designation":"Full Stack DotNet Developer",
    "gitHubUrl":"https://github.com/Nirmalkumar-U/",
    "linkedinUrl":"https://in.linkedin.com/in/nirmalkumar-uthamaraj-ab070a212",
    "instagramUrl":"https://www.instagram.com/nimu_unk__/?igsh=MXE5ZGFnZng4Yzc2OQ%3D%3D",
    "imgUrl":"https://media.licdn.com/dms/image/D5603AQEHyNj4AdcwwA/profile-displayphoto-shrink_200_200/0/1688196948298?e=2147483647&amp;v=beta&amp;t=4yI-1B0Oc5z6rkuTuUmz4IXdYkRoDYXTXlc2wprYRh0",
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
        "description":"Hmid is project",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtL6zMy8b-Ee7tGhjCdKX7U04vdpRllESobZ3j0MYQ&s"
      },
      {
        "name":"Smart Tools",
        "description":"EPA is project",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtL6zMy8b-Ee7tGhjCdKX7U04vdpRllESobZ3j0MYQ&s"
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
        "company":"Byteforza",
        "mainSkill":"Angular DotNet Core",
        "fullSkill":"Angular DotNet Core",
        "projectName":"HMID",
        "period":"2022-2023"
      },
      {
        "position":"Full Stack Developer",
        "company":"Byteforza",
        "mainSkill":"Angular DotNet Core",
        "fullSkill":"Angular DotNet Core",
        "projectName":"Smart Tools",
        "period":"2022-2023"
      }
    ]
  }
  return (
      <>
          <Nav data={data} />
          <Header data={data} />
          <About data={data} />
          <Skills data={data} />
          <Services data={data} />
          <Project data={data} />
          <Contact data={data} />
          <Footer data={data} />
          <Experiance data={data} />
      </>
  )
}

export default App
