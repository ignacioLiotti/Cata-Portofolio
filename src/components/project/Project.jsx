import React from 'react'
import { Link } from 'react-router-dom'
import Sparkle from '../sparkle/Sparkle'
import './project.css'

const Project = ({project, index}) => {
  // console.log(index)
  const img = project?.Image?.[0]?.url
  const imgAlt = project?.imgAlt
  console.log(imgAlt)
  const name = project?.Name
  const summary = project?.Summary

  if (index===0) {
    return (
      <Sparkle>
        <div className='project__container first'>
          <div className='new-tag'>New!</div>
          <img src={img} alt={imgAlt} />
          <h2>{name}</h2>
          <p>{summary}</p>
          <Link className="button project" to={`/blog/${name}`}>View Project</Link>
        </div>
      </Sparkle>
    )}
  return (
    <div className='project__container'>
      <img src={img} alt={imgAlt} />
      <h2>{name}</h2>
      <p>{summary}</p>
      <Link className="button project" to={`/blog/${name}`}>View Project</Link>
    </div>
  )
}
export default Project