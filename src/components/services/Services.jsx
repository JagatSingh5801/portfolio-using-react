import React,{ useState} from 'react'
import "./Services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    
   <section className="services section" id='services'>
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What I Done</span>
   
   <div className="services_container container grid">
   <div className="services_content">
    <div>
        <i className="uil uil-web-grid services_icon"></i>
        <h3 className="services_title">
            web <br/> Design</h3>
    </div>

    <span className="services_button" onClick={() => toggleTab(1)}>
        View More
    <i className="uil uil-arrow-right services_button-icon"></i>
    </span>

    <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
        <div className="services_modal-content">
            <i onClick={() => toggleTab(0)}className="uil uil-times services_modal-close"></i>
            
            <h3 className="services_modal-title">Web Page</h3>
            <p className="services_modal-description">
                Fresher, Recently Completed my master in Computer Application.
                Providing quality work in my projects.
            </p>

            <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I develop the user interface.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                       Web page development.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        create using Basci HTML and CSS.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        create by self lerning.
                    </p>
                </li>
            </ul>
        </div>
    </div>
   </div>

   <div className="services_content">
    <div>
        <i className="uil uil-arrow services_icon"></i>
        <h3 className="services_title">
            App <br/> Design</h3>
    </div>

    <span className="services_button" onClick={() => toggleTab(1)}>
        View More
    <i className="uil uil-arrow-right services_button-icon"></i>
    </span>

    <div className="services_mod">
        <div className="services_modal-content">
            <i className="uil uil-times services_modal-close"></i>
            
            <h3 className="services_modal-title">UI/UX Designer</h3>
            <p className="services_modal-description">
                Service with more than 3 years of experence.
                Providing quality work to clients and Compines.
            </p>

            <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I develop the user interface.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                       Web page development.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I create UX element interactions.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I position your company brand.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        Design and mockups of products for companies.
                    </p>
                </li>
            </ul>
        </div>
    </div>
   </div> 

   <div className="services_content">
    <div>
        <i className="uil uil-edit services_icon"></i>
        <h3 className="services_title">
            Visual <br/> Design</h3>
    </div>

    <span className="services_button" onClick={() => toggleTab(1)}>
        View More
    <i className="uil uil-arrow-right services_button-icon"></i>
    </span>

    <div className="services_mod">
        <div className="services_modal-content">
            <i className="uil uil-times services_modal-close"></i>
            
            <h3 className="services_modal-title">Visual Designer</h3>
            <p className="services_modal-description">
                Service with more than 3 years of experence.
                Providing quality work to clients and Compines.
            </p>

            <ul className="services_modal-services grid">
                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I develop the user interface.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                       Web page development.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I create UX element interactions.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        I position your company brand.
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                        Design and mockups of products for companies.
                    </p>
                </li>
            </ul>
        </div>
    </div>
   </div> 
    </div>
    </section>
  )
}

export default Services
