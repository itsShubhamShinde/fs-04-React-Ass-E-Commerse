import React from 'react'
import './Style.css'
import { useDispatch, useSelector } from 'react-redux';
import { upValue, downValue, clearValue } from './redux/Action';

const Main = () => {
  const { value } = useSelector((store) => store.myReducer)

  const dispatch = useDispatch()

  const dec = () => {

    dispatch(downValue(value))
  }
  const inc = () => {
    dispatch(upValue(value))
  }
  const reset = () => {
    dispatch(clearValue(value))
  }
  
  return (
    <div className='OuterDiv'>
      <h2>Display Count : {value} </h2>
      <div className="buttonDiv">
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Main;