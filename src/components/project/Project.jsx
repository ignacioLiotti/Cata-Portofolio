import React from 'react'
import HtmlParser from 'react-html-parser/lib/HtmlParser'
import { Link } from 'react-router-dom'
import Sparkle from '../sparkle/Sparkle'
import loadingImg from '../../img/loadingImg.png'
import Styled from 'styled-components'
import './project.css'

const Project = ({project, index}) => {
  const img = project?.Image?.[0]?.url
  const imgAlt = project?.imgAlt
  const name = project?.Name
  const summary = project?.Summary
  if (!project) {
    console.log('no project')
    return (
    <div className='project__container'>
      <LoadingImg src={loadingImg} alt={imgAlt} />
      <h2>Loading...</h2>
      <Link className="button project" to={`/blog/${name}`}>View Project</Link>
    </div>
    )
  }
  if (index===0) {
    return (
      <Sparkle>
        <div className='project__container first'>
          <div className='new-tag'>New!</div>
          <a href={`/blog/${name}`}><img src={img} alt={imgAlt} /></a>
          <h2>{name}</h2>
          <p>{HtmlParser(summary)}</p>
          <Link className="button project" to={`/blog/${name}`}>View Project</Link>
        </div>
      </Sparkle>
    )}
  return (
    <div className='project__container'>
      <a href={`/blog/${name}`}><img src={img} alt={imgAlt} /></a>
      <h2>{name}</h2>
      <p>{HtmlParser(summary)}</p>
      <Link className="button project" to={`/blog/${name}`}>View Project</Link>
    </div>
  )
}

const LoadingImg = Styled.img`
  width: 100%;
  filter: grayscale(0)!important;
`
export default Project