import React from 'react'
import './projects.css'
import {Project} from '../../components'

const Projects = ({projects, title}) => {
  console.log(projects)
  return (
    <div className='proyectos__container'>
      <h1 className='proyectos__container-titulo'>{title}</h1>
      <div className='proyectos__container-proyectos'>
        {projects?.map(project => <Project key={project.id} project={project}/>)}
      </div>
    </div>
  )
}

export default Projects