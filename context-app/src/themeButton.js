import React, { useContext } from 'react';
import { ThemeContext, UserContext } from './App';

const darkTheme = {
  backgroundColor: 'black',
  color: 'white',
}

const lightTheme = {
  backgroundColor: 'rgb(25, 118, 210)',
  color: 'white',
}

const Button = (props)  => {
  return(
    <button style={props.theme === 'light'? lightTheme : darkTheme} >Themed button
      </button>
  )
}

export const ThemedButton = () => {
  const value = useContext(ThemeContext);
  const contextUserValue = useContext(UserContext);

  console.log(contextUserValue.loggedIn);
  return(
    <>
    <h1>Welcome {contextUserValue.name}</h1>
    <Button theme={value} />
    </>
  )
}
