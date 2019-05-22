import React from 'react'
import PropTypes from 'prop-types'

const StudioPageTemplate = ({}) => {

  return (
    <div>

    <div className='section'>
      <div className='container is-fluid'>
            <div className='columns'>
                <div className="column is-6 is-offset-3"  style={{display: 'flex', justifyContent: 'center'}} >

              <div class="circle">
              <div className='circle-text'>
                <div className='circle-title is-size-4'>ACCESSIBILITE</div>
                <br/>
              <p>L’accessibilité est une valeur importante pour nous, nous ferons toujours en sorte de répondre à votre problématique, quel que soit votre budget. 
        L’écran d’ordinateur n’est pas une barrière au contact humain et reste un outil de travail qui nous aide à concevoir des projets innovants, ensemble.</p>
            </div>
            </div>
          </div>
          </div>
      </div>
    </div>
      <div className='section' style={{paddingTop: '0'}}>
        <div className='container is-fluid'>
          <h2 className='is-size-3' style={{textAlign: 'right'}} >Qui sommes-nous ?</h2>
        </div>
      </div>
    </div>
  )
}

StudioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default StudioPageTemplate
