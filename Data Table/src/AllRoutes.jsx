import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import PostForm from './components/PostForm';
import UpdatePrice from './components/UpdatePrice';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/PostForm' element={<PostForm/>}></Route>
        <Route path='/Patch' element={<UpdatePrice/>}></Route>
    </Routes>
    </div>
  );
}

export default AllRoutes;
