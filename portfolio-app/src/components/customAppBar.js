import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import StyledTypography from './shared/styledTypography';
import { Link } from 'react-router-dom';
import { LogInContext } from '../App';



export default function MenuAppBar() {
  // const [logIn, setLogIn] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const userContext = React.useContext(LogInContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleChange = (event) => {

  //   console.log(userContext.logged);

  // };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const st = { textDecoration: 'none', color: 'white' };
  const us = { textDecoration: 'none', color: '(0,0,0,0.87)', backgroundColor: 'rgba(0, 0, 0, 0.04)' };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <StyledTypography
            variant="h6"
            component="div"
            sx={{ mr: '15px' }}
          >
            <Link to="/home" style={st}>Home</Link>
          </StyledTypography>
          <StyledTypography
            variant="h6"
            component="div"
            sx={{ mr: '15px' }}
          >
            <Link to="/main" style={st}>Main</Link>
          </StyledTypography>
          <StyledTypography
            variant="h6"
            component="div"
            sx={{ mr: '15px' }}
          >
            <Link to="/about" style={st}>About</Link>
          </StyledTypography>
          <StyledTypography
            variant="h6"
            component="div"
            sx={{ mr: '15px', flexGrow: 1 }}
          >
            <Link to="/user" style={st}>User</Link>
          </StyledTypography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/user/profile" style={us}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/user/account" style={us}>My account</Link>
              </MenuItem>
            </Menu>
          </div>
          <LogInContext.Consumer>
            {({ logged, logInFunc }) => (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      color='secondary'
                      checked={logged}
                      onChange={logInFunc}
                      aria-label="login switch"
                    />
                  }
                  label={logged ? 'Logout' : 'Login'}
                />
              </FormGroup>
            )
            }
          </LogInContext.Consumer>


        </Toolbar>
      </AppBar>
    </Box>
  );
}
