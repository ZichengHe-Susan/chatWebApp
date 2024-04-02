import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className= "logo">Quick Chat</span>
      <div className="user">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        <span>Susan</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
