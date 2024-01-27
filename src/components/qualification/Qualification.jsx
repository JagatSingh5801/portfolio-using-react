import React,{ useState } from 'react'
import"./Qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey
        </span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
    
                <div className={ toggleState === 1 
                ? "qualification_button qualification_active button-flex" : 
                "qualification_button button-flex"}
                 onClick={() => toggleTab(1)} >
                   <i className="uil uil-graduation-cap 
                    qualification_icon"></i> 
                    Education 
                </div>

                <div className={toggleState === 2 ? 
                "qualification_button qualification_active button-flex" : 
                "qualification_button button-flex"}
                onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt
                     qualification_icon"></i> 
                     Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? 
                "qualification_content qualification_content-active":
                   "qualification_content"}>
                   <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title"> Master of Computer Application.</h3>
                        <span className="qualification_subtitle">Graphic era hill university</span>
                        <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>
                            2021-2023.
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>
                   </div>
                    
                   <div className="qualification_data">
                     <div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Online flower shop</h3>
                        <span className="qualification_subtitle">Using HTML and CSS</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>
                            2023- 2024.
                        </div>
                    </div>
                   </div>

                   <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Bachelor of Computer Applications</h3>
                        <span className="qualification_subtitle">Graphic era hill university</span>
                        <div className="qualification_calender">
                           <i className="uil uil-calendar-alt"></i>
                            2017- 2020 .
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>
                   </div>
                    
                   <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Restaurant web app</h3>
                        <span className="qualification_subtitle">Using React JS</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>
                            2023- 2024.
                        </div>
                    </div>
                   </div>
                 </div>

                 <div className={toggleState === 2 ? "qualification_content qualificication_content-active":
                   "qualification_content"}>
                   <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Intermediate</h3>
                        <span className="qualification_subtitle">kendriya vidyalaya</span>
                        <div className="qualification_calender">
                          <i className="uil uil-calendar-alt"></i>
                            2017.
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>
                   </div>
                    
                   <div className="qualification_data ">
                    <div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Chat-GPT-3 web</h3>
                        <span className="qualification_subtitle">Using React JS</span>
                        <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>
                            2023- 2024.
                        </div>
                    </div>
                   </div>

                   <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">High School</h3>
                        <span className="qualification_subtitle">kendriya vidyalaya</span>
                        <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>
                            2015.
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                    </div>
                   </div>
                    
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
