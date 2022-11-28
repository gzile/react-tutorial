import { Box, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import React, { useContext, useReducer, useState } from 'react'
import { initialTodos, TodoReducer } from '../shared/reducer';
import StyledTextFiled from '../shared/styledTextFiled'
import { UserContext } from '../shared/userContext';

const Profile = () => {
  const [todos] = useReducer(TodoReducer, initialTodos);

  const usContextData = useContext(UserContext);
  const [fName, setFName] = useState(usContextData.firstName);
  const [lName, setLName] = useState(usContextData.lastName);

  return (
    <Box sx={{ mt: 5, ml: 2 }}>
      {todos.map(t => <span>{t.title}</span>)}
      <UserContext.Consumer>
        {({ firstName, lastName, setName }) => (
          <form onSubmit={setName(fName, lName)}>
            <FormControl variant='standard'>
              <FormLabel id='profileDetails'>User profile details</FormLabel>
              <FormControl sx={{ pt: '5px' }}>
                <StyledTextFiled id='firstName' value={firstName} onChange={(e) => setFName(e.target.value)} label='First Name' />
              </FormControl>
              <FormControl sx={{ pt: '5px' }}>
                <StyledTextFiled id='lastName' label='Last Name' value={lastName} onChange={(e) => setLName(e.target.value)} />
              </FormControl>

            </FormControl>
          </form>)
        }
      </UserContext.Consumer>


    </Box>
  )
}

export default Profile