import React from 'react'

const Other = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Other</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">Excel</h3>
                    <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills_name">Operating system</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills_name">Data Structure (using C),</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
                </div>
            </div>

            <div className="skills_group">
                <div className="skills data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills_name">Computer Networks.</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Other
