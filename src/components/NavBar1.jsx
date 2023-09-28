import React from 'react'
import { Link } from 'react-router-dom'

const NavBar1 = () => {
  return (
    <div className='d-flex justify-content-around py-4'>
      <Link to='/'>Home</Link>
      <Link to='task'>Tasks</Link>
      <Link to='new'>New Task</Link>
      {/* <Link to='edit'>Edit Task</Link> */}
    </div>
  )
}

export default NavBar1