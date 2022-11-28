import { Box } from '@mui/material';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LogInContext } from '../../App';
import { UserContext } from '../shared/userContext';

const User = () => {
  const loginContext = useContext(LogInContext);
  const userContext = useContext(UserContext);

  return (
    <>
      <h2>Hello {userContext.firstName}</h2>
      <h2>{userContext.lastName}</h2>
      {
        loginContext.logged ?
          <>
            <nav style={{ fontSize: '18px' }}>
              <Link to="profile" style={{ margin: '10px' }}>Profile</Link>
              <Link to="account" style={{ margin: '10px' }}>Account</Link>
            </nav>
            <Box>
              <Outlet />
            </Box>
          </>
          : 'User is not logged in'

      }

    </>
  );
};

export default User;