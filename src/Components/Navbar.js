import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {



  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.Theme} `}   style={{backgroundColor: props.Theme ==='dark'?'black':'grey', color: props.Theme ==='dark'?'white':'white'}} >
  <a className="navbar-brand" href="/">Text Genie</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a  className="nav-link" href="/">{props.Title} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about/">About</a>
      </li>
     
      
    </ul>
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.Toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to Dark Mode</label>
</div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
Title : PropTypes.string,
}

export default Navbar
