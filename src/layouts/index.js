import React, { Component } from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/sass/styles.sass'
import config from '../../data/config'
import Transition from "../components/Transition";
import comingSoon from '../assets/img/studio_altad_coming_soon.jpg'

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      isMiddleLogo: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentDidMount() {
    if(this.props.location.pathname == '/'){
      this.setState({isMiddleLogo: false})
    }
    else{
      this.setState({isMiddleLogo: true})
    }
  }
  componentDidUpdate() {
    if(this.props.location.pathname == '/'){
      if (this.state.isMiddleLogo) {
          this.setState({
            isMiddleLogo: false
          });
      }
    }
    else{
      if (!this.state.isMiddleLogo) {
          this.setState({
            isMiddleLogo: true
          });
      }
    }
  }

  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }

  toggleServices () {
    this.setState({isActiveServices: !this.state.isActiveServices})
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
