import React from 'react'
import {Link} from 'gatsby'
import SplitText from 'react-pose-text';

import posed from 'react-pose'

const charPoses = {
  exit: { opacity: 0,
    x: 2,
    transition: {
      duration: 400,
      ease: 'anticipate'
    },},
  enter: { opacity: 1,
    x: 0,
    transition: {
      duration: 1200,
      ease: 'anticipate'
    },
    delay: ({ charIndex }) => 220 + charIndex * 80,
  }
};
const ListContainer = posed.ul({
  enter: { staggerChildren: 250,  staggerDirection: 1, delayChildren: 400,delay: 200 },
  exit: { staggerChildren: 22, staggerDirection: 1 }
});
const Item = posed.li({
  enter: { opacity: 1, 
    x: 0,
    transition: {
      duration: 400,
      ease: 'anticipate'
    },},
  exit: { 
    opacity: 0 , 
    x: -20,
    transition: {
      duration: 400,
      ease: 'anticipate'
    },},
 
});
const ItemImg = posed.ul({
  enter: { opacity: 1, 
    x: 0,
    transition: {
      duration: 400,
      ease: 'anticipate'
    },},
  exit: { 
    opacity: 0 , 
    x: 20,
    transition: {
      duration: 400,
      ease: 'anticipate'
    },},
 
});
const Bar = posed.div({
  enter: { opacity: 1, delay: 400, x: 0,
    
    transition: {
      duration: 400,
      ease: 'anticipate'
    },},
  exit: { opacity: 0, x: -100 },
 
});


const PostCard = ({posts, mouseHovered, isActive, isStopScroll, projetsNavX, projetsNavY}) => {
  return (
  <div>
    
    <Bar initialPose="exit" pose="enter"><div id="projets-list-bar" style={{top: projetsNavY, width: projetsNavX }}> </div></Bar>
    

   
<section className='section' style={{paddingTop: "150px"}}>
  <div className="container">
    <div className="columns">
        <div className='column is-6'>
            <ul className="projets-list"> 
        
    <ListContainer initialPose="exit" pose="enter" >
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'article-page')
                .map(({node: post}) => (

                  <Item initialPose="exit" pose="enter" 
                    item={post}
                    id={`projets-list-one-links-${post.id}`}
                    key={post.id}
                    onMouseEnter={mouseHovered}
                    className={`image ${isActive  == `projets-list-one-links-${post.id}` ? 'projets-list-one-links-on' : 'projets-list-one-links-off'}`}
                  >
                 
                  <Link
                    to={post.fields.slug}
                  >
                    <p> 
                        <span className='title-projets is-size-4'>
                        
          {post.frontmatter.title}
                        
                        </span>
                      &nbsp;
                      <span className='is-size-6' > — </span>
                      <small className='is-size-5'>{post.frontmatter.date}</small>
                    </p>
                    <div className='columns'>
                        <div className='column  is-8'>
                          <p  className='desc-projets is-size-6' >
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          {post.frontmatter.description} 
          </SplitText> 
                            
                          </p>
                        </div>
                    </div>
                  </Link>
                  </Item>
                ))}
         </ListContainer>
            </ul>
        </div>
        <div id="projet-is-img" className={`projet-is-img ${isStopScroll  == 1 ? 'projet-is-img-noMove' : 'projet-is-img-move'}`}>
        <ItemImg initialPose="exit" pose="enter" >
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article-page')
            .map(({node: post}) => (
               <li 
                id={`projets-list-one-img-${post.id}`}
                key={post.id}
                
              >
              <Link to={post.fields.slug}>
                <img className={`image projets-is-img-img ${isActive  == `projets-list-one-links-${post.id}` ? 'projets-list-one-img-on' : 'projets-list-one-img-off'}`} src={post.frontmatter.cover}/>
              </Link>
              
            </li>
            ))}
            </ItemImg>
        </div>

    </div>
  </div>
  </section>
  </div>
  )
}

export default PostCard
