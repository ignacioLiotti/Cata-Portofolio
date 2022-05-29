import React from 'react'
import './projects.css'
import {Project} from '../../components'

const Projects = ({projects, title}) => {
  return (
    <div className='proyectos__container'>
      <h1 className='proyectos__container-titulo'>{title}</h1>
      <div className='proyectos__container-proyectos'>
        {projects?.map((project, index) => <Project key={project.id} project={project} index={index}/>)}
      </div>
    </div>
  )
}

export default Projects