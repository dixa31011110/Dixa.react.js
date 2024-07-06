
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../action';


const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div style={{display:"inline-flex",justifyContent:'space-evenly',width:"400px",margin:"auto",marginTop:"10px"}}>
      <button style={{height:"50px",width:"180px",fontSize:"20px",border:"none",backgroundColor:"greenyellow",borderRadius:"10px"}}
        onClick={() => dispatch(handleTheme('light'))}
        disabled={theme === 'light'}
      >
        Switch to Light
      </button>
      <button style={{height:"50px",width:"180px",fontSize:"20px",border:"none",backgroundColor:"greenyellow",borderRadius:"10px"}}
        onClick={() => dispatch(handleTheme('dark'))}
        disabled={theme === 'dark'}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
