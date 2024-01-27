import React from 'react'
import './Work.css';
import Works from './Works';

const work = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most Recent Works</span>
       
       <Works/>
    </section>
  );
};

export default work
