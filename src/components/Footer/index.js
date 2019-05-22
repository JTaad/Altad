import React from 'react'
import {Link} from 'gatsby'
import config from '../../../data/config'
import logo from '../../assets/img/logo_white.png'

const Footer = () => {
  return (
    <footer id="footer" className='footer'>
    <div className="section">
      <div className="container">
              <div className='columns'>
                  <div className="column">
                  <img src={logo} />
                    <p>Studio de Design graphique<br/>& Solutions web</p>
                    <br/>
                    <p className='footer-contact'>Bordeaux / Montendre</p>
                  </div>
                  <div className="column">
                    <ul>
                      <li>
                        <Link className='is-size-6' to='/mentions-legales'>
                                        Mentions légales 
                        </Link>
                      </li>
                      <li style={{marginTop: '10px'}}>
                        <img src='https://api.netlify.com/api/v1/badges/f5d8f90c-9b78-408a-ba5b-332edc525c52/deploy-status'/>
                      </li>
                    </ul>
                  </div>
                  <div className="column">
                  <ul>
                    <li><Link className='is-size-6' to='/studio'>
                                    Le Studio 
                    </Link></li>
                    <li><Link className='is-size-6' to='/projets'>
                                    Projets 
                    </Link></li>
                  </ul>
                  </div>
                  <div className="column">
                      <div className='footer-contact'><a href="mailto:contact@studioaltad.com">contact@studioaltad.com</a></div>
                      <div className='footer-contact'><a href="tel:+33767907644">07.67.90.76.44</a></div>
                      <br/>
                      <br/>
                      <p>Studio Altad © — 2019</p>
                  </div>
              </div>
        </div>
     </div>
    </footer>
  )
}

export default Footer
