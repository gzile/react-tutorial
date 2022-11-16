import React, { useContext } from "react";
import { Box } from "@mui/material";
import Profile from "./userProfile/userProfile";
import { CustomContext }  from '../App';

const Wrapper = () => {
  const themeContext = useContext(CustomContext)

const themeColor = themeContext ? '#37474f':'#eceff1';

console.log('Wrapper', themeColor, themeContext)
  return(
    <Box sx={{padding: '15px', backgroundColor: themeColor}}>
      <Profile />
    </Box>
  )
}

export default Wrapper;