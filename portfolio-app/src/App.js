import React, { useState } from 'react';
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
import { UserContext } from './components/shared/userContext';

export const LogInContext = React.createContext({
  logged: true,
  logInFunc: () => { }
});

export default function App() {
  // This is the property that is actually changing when we click the switcher
  const [isLogIn, setIsLogIn] = useState(true);
  const [firstName, setFirstName] = useState('Goce');
  const [lastName, setLastName] = useState('Z');

  // Function that changes the value of the context logged property
  const clickLogIn = () => {
    setIsLogIn(!isLogIn);
  }

  const setFullName = (name, lastName) => {
    console.log('Set name')
    setFirstName(name);
    setLastName(lastName)
  }

  return (
    <>
      <LogInContext.Provider value={{
        logged: isLogIn,
        logInFunc: clickLogIn
      }}>
        <MenuAppBar />
        <UserContext.Provider value={{
          firstName: firstName,
          lastName: lastName,
          setName: setFullName
        }}>
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
        </UserContext.Provider>

      </LogInContext.Provider>
    </>
  )
}
