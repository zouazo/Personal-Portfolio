import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";


const Projects = () => {
  return (
    <section id="projects">
      <p>Browse My Recent</p>
      <h1>Projects</h1>
      <div className="project-details-container">
        <div className="about-containers">
          {ProjectList.map((project, idx) => (
            <ProjectItem key={idx} name={project.name} image={project.image} url={project.url} />
          ))}
        </div>
      </div>
      <KeyboardDoubleArrowDownIcon
        className="icon arrow"
        style={{ fontSize: '40px' }}
        onClick={() => { window.location.href='./#contact' }}
      />
    </section>
  )
}

export default Projects;













// import React from 'react'
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import proj1 from "../assets/project-1.png";
// import proj2 from "../assets/project-2.png";

// const Projects = () => {
//   return (
//         <section id="projects">
//         <p className="section__text__p1">Browse My Recent</p>
//         <h1 className="title">Projects</h1>
//         <div className="experience-details-container">
//           <div className="about-containers">
//             <div className="details-container color-container">
//               <div className="article-container">
//                 <img
//                   src={proj1}
//                   alt="Project 1"
//                   className="project-img"
//                 />
//               </div>
//               <h2 className="skills-sub-title project-title">Project One</h2>
//               <div className="btn-container">
//                 <button
//                   className="btn btn-color-2 project-btn"
//                   onClick={() => { window.location.href='https://github.com/zouazo/Django-React-Ecommerce-Website' }}
//                 >
//                   Github
//                 </button>
//               </div>
//             </div>
//             <div className="details-container color-container">
//               <div className="article-container">
//                 <img
//                   src={proj2}
//                   alt="Project 2"
//                   className="project-img"
//                 />
//               </div>
//               <h2 className="skills-sub-title project-title">Project Two</h2>
//               <div className="btn-container">
//                 <button
//                   className="btn btn-color-2 project-btn"
//                   onClick={() => { window.location.href='https://github.com/zouazo/Django-React-NotesApp-With-User-Authentication' }}
//                 >
//                   Github
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//         <KeyboardDoubleArrowDownIcon
//         className="icon arrow"
//         style={{ fontSize: '40px' }}
//         onClick={() => { window.location.href='./#contact' }}
//         />
//       </section>
//   )
// }

// export default Projects
