import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aboutpage from './Aboutpage';
import Productpage from './Productpage';
import Homepage from './Homepage';
import NotFoundpage from './NotFoundpage';
import Descriptionpage from './Descriptionpage';
import Loginpage from './Loginpage';
import PrivateRoutes from './PrivateRoutes';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}>Homepage</Route>
        <Route path='/Aboutpage' element={<Aboutpage />}>Aboutpage</Route>
        <Route path='/Productpage' element={
          <PrivateRoutes>
            <Productpage />
          </PrivateRoutes>}>Productpage</Route>
        <Route path='/Descriptionpage/:id' element={<Descriptionpage />}>Descriptionpage</Route>
        <Route path='/Loginpage' element={<Loginpage />}>Loginpage</Route>
        <Route path='*' element={<NotFoundpage />}>Productpage</Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
