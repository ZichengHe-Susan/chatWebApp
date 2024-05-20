import React from 'react'
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase.js';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  // console.log(currentUser.currentUser.photoURL);
  // console.log(currentUser.DisplayName)
  return (
    <div className='navbar'>
      <span className= "logo">Quick Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick = {()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
