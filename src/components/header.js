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
        <Link to="/" className="navbar-item ">
          {siteTitle}
        </Link>
      </div>

    </div>
  </nav>
)

export default Header
