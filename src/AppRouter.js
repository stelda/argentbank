import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Error404 from './pages/Error404';
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    );
}

export default AppRouter;