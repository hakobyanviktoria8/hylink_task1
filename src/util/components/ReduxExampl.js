import React from 'react';
import "../styles/ReduxExample.css";
import { useDispatch, useSelector } from 'react-redux';

function ReduxExampl() {    
  const dispatch = useDispatch();  
  const cash = useSelector(state => state.count.cash);

  return (
    <div className='ReduxExampl'>
        <h3>{cash}</h3>
        <button onClick={()=> dispatch({type: "Add", payload: 2})}>Add</button>
        <button onClick={() => dispatch({type: "Get", payload: 2})}>Get</button>
    </div>
  )
}

export default ReduxExampl