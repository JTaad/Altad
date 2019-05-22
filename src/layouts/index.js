import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '../assets/sass/styles.sass'
import config from '../../data/config'
import comingSoon from '../assets/img/studio_altad_coming_soon.jpg'

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div >
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
         <div className="ok" style={{backgroundImage: `url(${comingSoon})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundPosition: 'center center', position: "fixed", fontFamily:"Fahkwang"}}></div>
        <div id="comingSoon" style={{fontFamily: "Roboto", position: "absolute", right: "40px", bottom: "40px", color: "#FFF", fontWeight:"200"}}>
          <h1 style={{textTransform: "uppercase", fontFamily:"Roboto"}}>Studio Altad</h1>
          <p>Site web bientôt disponible.</p>
          <a style={{color: "#FFF"}}href="mailto:contact@studioaltad.com">contact@studioaltad.com</a>
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
