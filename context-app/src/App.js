import React, { createContext, useEffect, useState } from 'react';
import { Toolbar } from './toolbar';

export const ThemeContext = createContext('light');
export const UserContext = createContext({
  loggedIn: true,
  name: 'No value',
});

const userObj = {
  loggedIn: true,
  name: '',
}

const App = () => {
  const array = ['Banana', 'apple', 'pear', 'mango'];
  const [inputValue, setInputValue] = useState('');
  let newArray = [];
  
  const onChangeHandler = (event) => {
      setInputValue(event.target.value);
  }

  const onClickHandler = (event) => {
    
    if(inputValue && inputValue.length > 0) {
      array.push(inputValue);
    }
    newArray = array;
    console.log('click',array);
  }
  
  return(
    <>
     <h2>Context app</h2>
     <input type='text' value={inputValue} onChange={(event) => onChangeHandler(event)}/>
     <button  onClick={onClickHandler}>Add to array</button>
     <ThemeContext.Provider value='light'>
      <UserContext.Provider value={userObj}>
          <Toolbar array={array}/>
      </UserContext.Provider>
     </ThemeContext.Provider>
    </>

  )
}

export default App;