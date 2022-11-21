import { Box, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import React, { useState } from 'react'
import StyledTextFiled from '../shared/styledTextFiled'

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
    alert('Form submitted')
  }

  return (
    <Box sx={{mt: 5, ml: 2}}>
       <form onSubmit={handleSubmit}>
        <FormControl variant='standard'>
          <FormLabel id='profileDetails'>User profile details</FormLabel>
          <FormControl sx={{pt: '5px'}}>
              <StyledTextFiled  id='firstName' value={firstName} label='First Name' />
          </FormControl>
          <FormControl sx={{pt: '5px'}}>
              <StyledTextFiled  id='lastName' label='Last Name' />
          </FormControl>
          
        </FormControl>
       </form>
      
    </Box>
  )
}

export default Profile