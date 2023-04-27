import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "../styles/Skills.css";


const SkillItem = ({ name }) => {
  return (
    <article>
        <CheckBoxIcon 
        className="icon"
        style={{ fontSize: '30px' }}
        />
        <div>
        <h3>{name}</h3>
        </div>
   </article>
  )
}

export default SkillItem



