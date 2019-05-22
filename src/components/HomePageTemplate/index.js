import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import logo from '../../assets/img/altad_logo.png'
import arrow_button from '../../assets/img/button_bot.png'
import {Link} from 'gatsby'
import SplitText from 'react-pose-text';
import posed from 'react-pose'


const charPoses = {
  exit: { opacity: 0,
    x: 2,
    transition: {
      duration: 400
    },},
  enter: { opacity: 1,
    x: 0,
    transition: {
      duration: 1200
    },
    delay: ({ charIndex }) => 220 + charIndex * 80,
  }
};
 
const Logo = posed.img({
  enter: { opacity: 1, 
    y: 0,
    delay: 200,
    
    
    transition: {
      duration: 800
    },},
  exit: { 
    opacity: 0 , 
    y: -20,
    
    transition: {
      duration: 800
    },},
 
});

class HomePageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActiveServices1: '',
      isActiveServices2: '',
      isActiveServices3: ''
    }
    this.toggleServices1 = this.toggleServices1.bind(this)
    this.toggleServices2 = this.toggleServices2.bind(this)
    this.toggleServices3 = this.toggleServices3.bind(this)
  }


  toggleServices1 (e) {
    //this.setState({isActiveServices: !this.state.isActiveServices})
    const clicked1 = e.currentTarget.id
    if(this.state.isActiveServices1 === clicked1) { 
        this.setState({isActiveServices1: ''});
    } else {
        this.setState({isActiveServices1: clicked1})
   }
  }
  toggleServices2 (e) {

    const clicked2 = e.currentTarget.id
    if(this.state.isActiveServices2 === clicked2) { 
        this.setState({isActiveServices2: ''});
    } else {
        this.setState({isActiveServices2: clicked2})
   }
  }
  toggleServices3 (e) {
    const clicked3 = e.currentTarget.id
    if(this.state.isActiveServices3 === clicked3) { 
        this.setState({isActiveServices3: ''});
    } else {
        this.setState({isActiveServices3: clicked3})
   }
  }
  render () {
    return (
  <div>
    <Helmet>
      <title>Altad Studio — Design graphique & solutions web</title>
      <meta name='description' content="desc" />
    </Helmet>
    
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container" style={{maxWidth: "294px"}}>
        <div className="title">
        <Logo src={logo} />
        </div>
        <h1 className="subtitle is-size-6">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              STUDIO DE DESIGN GRAPHIQUE & SOLUTIONS WEB
          </SplitText>
        </h1>
      </div>
    </div>
  </section>

  <div id="home-services" >
  <div className='section' style={{paddingTop: '0'}}>
    <div className='container is-fluid'>
      <h2 className='is-size-3' style={{textAlign: 'right'}} >Nos Services</h2>
      <hr/>
      <div className="columns">
        <div className="column">
            <div  id="home-services-1"  onClick={(e) => this.toggleServices1(e)}>
              <div className="home-services-title" >
                  <span className="is-size-6">DESIGN GRAPHIQUE</span>
                  <span>
                    <img 
                      className={`image is-24x24 ${this.state.isActiveServices1   == "home-services-1" ? 'home-services-img-on' : 'home-services-img-off'}`}
                      src={arrow_button}
                    />
                  </span>
              </div>
              <div className={`home-services-content ${this.state.isActiveServices1   == "home-services-1" ? 'home-services-content-on' : 'home-services-content-off'}`}>
                <ul>  
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="column">
          <div  id="home-services-2"  onClick={(e) => this.toggleServices2(e)}>
              <div className="home-services-title">
                  <span className="is-size-6">SOLUTIONS DIGITALE</span>
                  <span>
                    <img 
                      className={`image is-24x24 ${this.state.isActiveServices2   == "home-services-2" ? 'home-services-img-on' : 'home-services-img-off'}`}
                      src={arrow_button}
                    />
                  </span>
              </div>
              <div className={`home-services-content ${this.state.isActiveServices2   == "home-services-2" ? 'home-services-content-on' : 'home-services-content-off'}`}>
                <ul>  
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                  <li>Design</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="column">
          <div  id="home-services-3"  onClick={(e) => this.toggleServices3(e)}>
              <div className="home-services-title">
                  <span className="is-size-6">CONTENU</span>
                  <span>
                    <img 
                      className={`image is-24x24 ${this.state.isActiveServices3   == "home-services-3" ? 'home-services-img-on' : 'home-services-img-off'}`}
                      src={arrow_button}
                    />
                  </span>
              </div>
              <div className={`home-services-content ${this.state.isActiveServices3   == "home-services-3" ? 'home-services-content-on' : 'home-services-content-off'}`}>
                <ul>  
                  <li>Design</li>
                  <li>Design</li>
                </ul>
              </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  </div>

<div className="section">
  <div className="container">
      <div className='section'>
        <div className='columns'>
            <div  style={{display: 'flex', justifyContent: 'center'}} className='column'>
              <Link className='is-size-3 button-big-home' to='/studio'>
                              LE STUDIO ALTAD
              </Link>
        </div>
      </div> 
    </div>
  </div>
</div>

<div className="section">
  <div className="container">
        <div className='columns'>
            <div  style={{display: 'flex', justifyContent: 'center'}} className='column'>
              <h4 className='is-size-5'>Ils nous ont fait confiance</h4>
            </div>
        </div>

        <div className='columns clients'>
              <div className="column is-10 is-offset-1">
                <p>LA ROTISSERIE SAINT-MICHEL - PLANETE FUMIGENE - ECOMIND - MOLLAT LIBRAIRIE - SIDONIE ETC - 
    EAU SERVICE DE L’AUTO - MICHEL ROLLAND - LA ROTISSERIE SAINT-MICHEL - PLANETE FUMIGENE - ECOMIND - MOLLAT LIBRAIRIE - SIDONIE ETC - 
    EAU SERVICE DE L’AUTO - MICHEL ROLLAND </p>
              </div>
        </div>

    </div>
  </div>
</div>

)
  
  }
}
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,

}

export default HomePageTemplate
