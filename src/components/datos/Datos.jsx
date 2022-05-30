import React from 'react'
import Graph from '../../img/graph.jpg'

import './datos.css'

const Datos = () => {
  return (
      <div className='datos'>
        <h1>Datos</h1>
        <div className='datos-container'>
            <div className="datos-container_elements">
                <div className='datos-container_text'>
                    <h2>105%</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla euismod, urna eu tempor consectetur, nisi nunc
                    </p>             
                </div>
                <img src={Graph} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Datos