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

export const ThemedButton = (props) => {
  const themeValue = useContext(ThemeContext);
  const userDataFromContext = useContext(UserContext);

  console.log('Theme button',themeValue, userDataFromContext);
  return(
    <>
    <h1>Welcome  {userDataFromContext.name} {userDataFromContext.lastName} </h1>
    <Button theme={themeValue} />
    </>
  )
}
