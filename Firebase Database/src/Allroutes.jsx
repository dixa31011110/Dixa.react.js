import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Privateroutes from './components/Privateroutes';

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/dashboard' element={
                    <Privateroutes>
                        <Dashboard />
                    </Privateroutes>}>
                </Route>
            </Routes>
        </div>
    );
}

export default Allroutes;
