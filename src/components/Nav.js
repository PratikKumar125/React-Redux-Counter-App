import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import "../App.css"
import { login, logout } from '../actions/action';

const Nav = () => {
    const counter = useSelector((state) => state.incdec);
    const dispa = useDispatch();
  return (
    <div>
        <h2>Here you can increment by 5 but can decrement by only 2</h2>
        <h2 className='counterNumber'>{counter}</h2>
        <button onClick={() => dispa(login())}>Login</button>
        <button onClick={() => dispa(logout())}>Logout</button>
    </div>
  )
}

export default Nav;