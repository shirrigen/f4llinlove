import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <img className="LeftNavLogo" src={require('../images/logo.svg')} width="64"></img>
      <img className="RightNavLogo" src={require('../images/logo2.svg')} width="148"></img>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
