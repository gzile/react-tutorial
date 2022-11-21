import { Box, Typography } from "@mui/material";
import React from "react";

export const Home = () => {

  const urlImg = '../assets/back.jpg';
  return (
    <Box sx={{
      backgroundImage: `url(${urlImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      minHeight: '750px',
      overflow: 'hidden',
    }}>
      <Box sx={{margin: '0 10px 10px 10px', padding: '10px'}}>
        <Typography sx={{ color: '#fff', fontSize: '24px' }}>
          Home
        </Typography>
      </Box>
    </Box>
  )
}
