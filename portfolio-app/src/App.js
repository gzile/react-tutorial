import React from 'react';
import { MainWrapper } from './components/mainWrapper';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import MenuAppBar from './components/customAppBar';
import About from './components/about';
import User from './components/user/user';
import NoMatch from './components/shared/noMatch';
import Account from './components/user/account';
import Profile from './components/user/profile';

export default function App() {

  return (
    <>
      <MenuAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='main' element={<MainWrapper />} />
        <Route path='user' element={<User />} >
          <Route path='account' element={<Account />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}
