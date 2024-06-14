import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
 


  return (

    <>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" >
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse
      " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li>
          </ul>
          
  
           {/* <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-primary mx-2" style={{width:"15px" ,height: "10px"}}type="button" onClick={changeColor('red')}>Button</button>
              <button className="btn btn-primary mx-2" style={{width:"15px" ,height: "10px"}} type="button" onClick={changeColor('orange')}>Button</button>
              <button className="btn btn-primary mx-2" style={{width:"15px" ,height: "10px"}} type="button" onClick={changeColor('yellow')}>Button</button>
              <button className="btn btn-primary mx-2" style={{width:"15px" ,height: "10px"}} type="button" onClick={changeColor('blue')}>Button</button>
            </div> */}
         
          
        
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >{props.mode==='light'?'Light':'Dark'}</label>
          </div>
        
        
        {/* //toggleMode is a function passed as a props from app.js to navbar.js so that we can make use of checked button and with that i am maintaining the mode also as a state variable... */}
        
      </div>
    </div>
  </nav>

  </>
  )
}

Navbar.propTypes={

  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
  
}

Navbar.defaultProps = {
  title:"Enter the Title",
  aboutText:"Enter the About"
};