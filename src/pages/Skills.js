import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { SkillList } from "../helpers/SkillList";
import SkillItem from "../components/SkillItem";
import "../styles/Skills.css";




const Skills = () => {

  return (
    <section id="skills">
      <p>Explore My</p>
      <h1>Skills</h1>
      <div className="section--container">
        <KeyboardDoubleArrowDownIcon
          className="icon arrow"
          style={{ fontSize: '40px' }}
          onClick={() => { window.location.href='./#projects' }}
        />
        <div className="about-containers">
          {SkillList.map(skillSection => (
            <div key={skillSection.title} className="details-container">
              <h2 className="skills-sub-title">{skillSection.title}</h2>
              <div className="article-container">
                {skillSection.skills.map(skill => (
                  <SkillItem key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
