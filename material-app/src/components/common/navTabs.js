import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/Info';


const LinkTab = (props) => {
  const navigate = useNavigate();
  return (
    <Tab
      iconPosition="start" 
      label="start"
      icon={props.icon}
      onClick={(event) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
}

export const NavTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: 'wheat' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Home" href="/"  icon={<HomeOutlinedIcon />}/>
        <LinkTab label="About" href="/about"  icon={<InfoIcon />}/>
      </Tabs>
    </Box>
  );
}

export default NavTabs;
