import React from 'react'

const Post = ({title,body}) => {
  return (
   
    <div id='post'>
      <div className='div1'>
        <h1>{title}</h1>
      </div>
      <div className='div2'>
        <h3>{body}</h3>
      </div>
    </div>
  )
}

export default Post
