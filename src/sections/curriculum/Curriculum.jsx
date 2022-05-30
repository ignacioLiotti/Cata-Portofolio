import React from 'react'
import { Background } from '../../components'
import './curriculum.css'
import { IoCheckmarkSharp } from "react-icons/io5";
import CurriculumImg from '../../img/CvImg.png';
import { BiDownload } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Curriculum = () => {
  return (
    <div className='curriculum'>
        <Background/>
        <div className='curriculum__container'>
            <div className='curriculum__container-curriculum'>
                <img src={CurriculumImg} alt="" />
                <div className='download'>
                    <Link to='/files/CatalinaGalindez.pdf' target='_blank' download><BiDownload/></Link>
                </div>
            </div>
            <div className='curriculum__container-description'>
                <h1>Curriculum</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloribus corrupti et iusto laboriosam nesciunt deserunt fugit vero iste rerum ullam illo, porro quia quidem incidunt est cum eaque eius.</p>
                <ul>
                    <li><IoCheckmarkSharp/>Primer Perk</li>
                    <li><IoCheckmarkSharp/>Segundo Perk</li>
                    <li><IoCheckmarkSharp/>Tercer Perk</li>
                </ul>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore aliquid dolores minima temporibus ratione asperiores sunt nobis sint, nostrum necessitatibus. Ut fugiat quis ullam minima tenetur magnam sunt aliquid?</p>
            </div>
        </div>
    </div>
  )
}

export default Curriculum