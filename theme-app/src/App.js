import './App.css';
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import Wrapper from './components/wrapper';

export const CustomContext = React.createContext(true);

function App() {
  const [switchValue, setSwitchValue] = useState(true)
  const label = { inputProps: { 'aria-label': 'Switch theme' } };

  const onChangeHandler = React.useCallback( () => {
    setSwitchValue(!switchValue)
  },[switchValue])

  return (
    <div className="App">
      <header>
        <Switch {...label} value={switchValue} defaultChecked onChange={onChangeHandler}  />
      </header>
       <CustomContext.Provider value={switchValue}>
          <Wrapper/>
       </CustomContext.Provider>
    </div>
  );
}

export default App;
