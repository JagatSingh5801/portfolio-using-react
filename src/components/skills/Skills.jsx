import React from 'react'
import './Skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Language from './Language';
import Other from './Other';

const Skills = () => {
  return (
    <section className="skills section " id='skills'>
        <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">MY technical level</span>

     <div className="skills_container container grid">
      <Frontend/>

      <Backend/>

      <Language/>

      <Other/>
     </div>
    </section>
  )
}

export default Skills
