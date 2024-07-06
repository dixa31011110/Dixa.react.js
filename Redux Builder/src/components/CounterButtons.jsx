
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd, handleReduce } from '../action';

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div style={{display:"inline-flex",justifyContent:'space-evenly',height:"300px",width:"300px",margin:"auto",marginTop:"10px"}}>
      <button  style={{height:"30px",width:"80px",fontSize:"20px",border:"none",backgroundColor:"greenyellow"}} onClick={() => dispatch(handleAdd(1))}>+</button>
      <button style={{height:"30px",width:"80px",fontSize:"20px",backgroundColor:"greenyellow",border:"none"}} onClick={() => dispatch(handleReduce(1))}>-</button>
    </div>
  );
};

export default CounterButtons;
