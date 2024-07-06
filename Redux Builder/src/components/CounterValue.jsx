
import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const count = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div style={{height:"300px",width:"350px",margin:"auto"}} className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <h1 style={{textAlign:"center",fontFamily:"monospace"}}>Count : {count}</h1><hr />
      <p style={{letterSpacing:"4px",fontFamily:"monospace"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos neque deleniti maiores, ea, tempora dolore soluta illo ut doloremque voluptatibus fugit cum? Quos eos illo aspernatur vel a distinctio aliquid.</p><hr />
      <h2 style={{fontFamily:"monospace",fontSize:"20px"}}>Click The Button Given Below, <br /><br />For ADD (+) & For REDUCE (-)</h2>
      
    </div>
  );
};

export default CounterValue;
