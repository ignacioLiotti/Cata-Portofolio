import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

const Project = ({project}) => {

  const img = project?.properties?.Image?.files?.[0]?.file?.url
  const name = project?.properties?.Name?.title?.[0].plain_text
  const summary = project?.properties?.Summary?.rich_text?.[0]?.plain_text

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