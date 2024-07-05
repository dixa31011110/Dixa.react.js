import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Privateroutes from './components/Privateroutes';
import Post from './components/Post';


const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/dashboard' element={
                    <Privateroutes>
                        <Dashboard />
                    </Privateroutes>}></Route>
                <Route path='/postdata' element={
                    <Privateroutes>
                        <Post />
                    </Privateroutes>}></Route>
            </Routes>
        </div>
    );
}

export default Allroutes;
