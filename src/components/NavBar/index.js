import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import logo from '../../assets/img/altad_logo.png'
import posed from 'react-pose'


const delayMiddle = 1000

const Logo1 = posed.img({
 
  open: { opacity: 1, 
    y: 0,
    delay: 150,
    
    transition: {
      duration: 800
    },},
  closed: { 
    opacity: 0 , 
    delay: 0,
    y: 20,
    transition: {
      duration: 800
    },},
});

const NavBar = ({
  toggleNavbar, 
  isMiddleLogo, 
  isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
<nav
  className='container is-fluid navbar'
  role="navigation"
  aria-label="main navigation"
>
  <div className="navbar-brand">
  <button
    className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
    data-target='navMenu'
    onClick={toggleNavbar}
  >
    <span />
    <span />
    <span />
  </button>
  </div>

<div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

      <div className='nav-logo'>
        <Link to='/'>
          <Logo1 src={logo} style={{width: "100px"}}  pose={isMiddleLogo ? "open" : "closed"}  initialPose={isMiddleLogo ? "open" : "closed"} />
        </Link>
      
      </div>


    <div className='nav-links'>
      <Link  className='is-size-6' 
        to="/"
      >
      Accueil
    </Link>
      <Link  className='is-size-6' 
        to="/projets" 
      >
      Projets
    </Link>
    
      <Link  className='is-size-6' 
        to="/studio"
      >
      Studio
    </Link>
    </div>

      <div className="is-size-7" style={{order: '2'}}>
        STUDIO DE DESIGN GRAPHIQUE & SOLUTIONS WEB
      </div>
  </div>

</nav>
    )}
  />
)

export default NavBar