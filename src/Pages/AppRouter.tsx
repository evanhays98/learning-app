import { Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Home } from './Home/Home';
import { Register } from './Login/Register';
import { PageComponents } from './PageComponents/PageComponents';
import React from 'react';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/components' element={<PageComponents />} />
    </Routes>
  );
};