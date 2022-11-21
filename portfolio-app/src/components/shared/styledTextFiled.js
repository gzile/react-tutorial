import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from  '@mui/material/styles'

const StyledTextFiled = styled(TextField)({
  minWidth: '300px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

export default StyledTextFiled