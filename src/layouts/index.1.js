import React, { Component } from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/sass/styles.sass'
import config from '../../data/config'
import Transition from "../components/Transition";

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
         
        <NavBar 
          isActive={this.state.isActive} 
          isMiddleLogo={this.state.isMiddleLogo} 
          toggleNavbar={() => this.toggleNavbar()} 
        />
          <a id="button_contact" href='mailto:contact@studioaltad.com'>Contact</a>
          
          <Transition {...this.props}>{this.props.children}</Transition>;
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper
