import * as React from "react"
import { Link } from "gatsby"

import "./style.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">

      <h1><Link to="/">Emily Jones</Link></h1>
      <h2>Je suis passionnée <span>de magie</span></h2>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link active" to="/">Acceuil</Link></li>
          <li><Link className="nav-link" to="/resume">Resume</Link></li>
          <li><Link className="nav-link" to="/spectacle">Spectacle</Link></li>
          <li><Link className="nav-link">Portfolio</Link></li>
          <li><Link className="nav-link">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
)

export default Header
