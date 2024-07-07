import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Error404 from './pages/Error404';
import User from "./pages/User";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Protected from "./pages/Protected";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/protected" component={<Protected/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    );
}

export default AppRouter;