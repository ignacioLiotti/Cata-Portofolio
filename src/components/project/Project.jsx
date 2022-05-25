import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

const Project = ({project}) => {

  console.log(project)

  const img = project?.Image?.[0]?.url
  const name = project?.Name
  const summary = project?.Summary

  console.log(summary)
  return (
    <div className='project__container'>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{summary}</p>
      <Link className="button project" to={`/blog/${name}`}>View Project</Link>
    </div>
  )
}
export default Project