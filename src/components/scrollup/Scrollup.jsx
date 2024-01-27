import React from 'react'
import './Scrollup.css';

const Scrollup = () => {
  window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector(".Scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add ("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  
  return (
    <a href="#home" className="Scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default Scrollup
