import React from 'react'
import HomePhoto from '../assets/Images/Component 1.png'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className=' home-main flex-row d-flex gap-5 my-5  container'>
      <div className='w-50'>
        <h1 className='manage'>Manage your Tasks on</h1>
        <h1 className='task mx-0'>TaskDuty</h1>
        <p className='home-lorem align-content-start fs-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
        <Link  to="/task" className='home-btn rounded-3 py-3 px-5 fs-4 text-decoration-none'>Go to My Tasks</Link>
      </div>

      <div>
        <img  className='home-img ' src={HomePhoto} alt="" />
      </div>
    </div>
  )
}

export default Homepage