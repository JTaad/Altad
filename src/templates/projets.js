import React, {Component} from 'react'
import config from '../../data/config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'


export default class ProjetsPage extends Component {
  constructor (props) {
    super(props)


    this.state = {
      idIsHover: '',
      isScrollTop: 0,
      isActive: 'projets-list-one-links-b905e5ea-19f9-5b41-bac1-f621f40c7052',
      projetsNavX: 0,
      projetsNavY: 0
    }
    this.mouseHovered = this.mouseHovered.bind(this)
  }


  componentDidMount() {
    var boundingNavProjet = document.getElementById("projets-list-one-links-b905e5ea-19f9-5b41-bac1-f621f40c7052").getBoundingClientRect()

    this.setState({ projetsNavX: boundingNavProjet.left + window.scrollX,  projetsNavY: boundingNavProjet.top + window.scrollY + 18 })

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  mouseHovered(e) {
    const clicked = e.currentTarget.id
    this.setState({isActive: clicked})

    var boundingNavProjet = document.getElementById(clicked).getBoundingClientRect()
    var projetsNavX = boundingNavProjet.left + window.scrollX;
    var projetsNavY = boundingNavProjet.top + window.scrollY + 18;
    this.setState({projetsNavX, projetsNavY})

  }

  handleScroll = event => {
    const { pageYOffset } = window
    var elem = document.getElementsByClassName("projets-is-img-img")
    var window_top = elem[0].offsetTop + elem[0].offsetOuterHeight - pageYOffset

    if (window_top < pageYOffset && this.state.isScrollTop === 0){
        this.setState({ isScrollTop: 1 })
  }  else if(window_top > pageYOffset && this.state.isScrollTop === 1){
      this.setState({ isScrollTop: 0 })
  }


    //var footer = document.getElementById("footer");
    //var footerHeight = document.getElementById("footer").offsetHeight;
    //const { pageYOffset } = window

    //if(pageYOffset -  footerHeight >= footerHeight && this.state.isScrollTop === 0){
    //  this.setState({ isScrollTop: 1 })
    //}
    //else if (pageYOffset -  footerHeight < footerHeight && this.state.isScrollTop === 1){
    //  this.setState({ isScrollTop: 0 })
    //}
  }



 
  render () {

    const {pageContext} = this.props
    const {group, index} = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }


    return (
      <div>
        <Helmet>
          <title>Projets | Studio Altad — Design graphique & solutions web</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
                    <PostCard 
                    posts={group} 
                    mouseHovered={this.mouseHovered}
                    isActive={this.state.isActive}
                    isStopScroll={this.state.isScrollTop}
                    projetsNavX={this.state.projetsNavX}
                    projetsNavY={this.state.projetsNavY}
                    />
      </div>
    )
  }
}
