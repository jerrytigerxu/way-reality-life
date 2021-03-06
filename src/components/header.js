import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item test">
          {siteTitle}
        </Link>
        <Link to="/About" className="navbar-item test">
          About
        </Link>
        <Link to="/Contributing" className="navbar-item test">
          Contributing
        </Link>
      </div>

    </div>
  </nav>
)

export default Header
