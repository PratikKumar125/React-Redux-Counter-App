import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/action'
import "../App.css"
const IncDec = () => {
    const authStatus = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(2))}>Decrement</button>
        <h2>{authStatus}</h2>
    </div>
  )
}

export default IncDec;