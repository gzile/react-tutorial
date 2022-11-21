import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
  return (
    <>
      <h2>User</h2>

      <nav style={{fontSize: '18px'}}>
        <Link to="profile" style={{margin: '10px'}}>Profile</Link>
        <Link to="account" style={{margin: '10px'}}>Account</Link>
      </nav>
      <Box>
        <Outlet />
      </Box>
      
    </>
  );
};

export default User;