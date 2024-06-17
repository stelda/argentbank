import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Error404 from './pages/Error404';
import User from "./pages/User";
import Signin from "./pages/Signin";
import Home from "./pages/Home";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;