import React, { useState } from 'react'
import "./post.css";
// import "./post.css"
import Post from './components/Post';

function App() {
  const[data,setdata] = useState([]);
    function Fetchdata()
    {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((data)=>setdata(data))
      .catch((err)=>console.log(err))
    }
  return (
    <div className='btn'>
      <button onClick={()=>Fetchdata()}>Get Post</button>
      <div className='data'>
        {data.map((el)=>(
          <Post key={el.id} title={el.title} body={el.body}/>
        ))}
      </div>
    </div>
    
  );
}

export default App
