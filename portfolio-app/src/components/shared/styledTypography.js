import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  mr: '15px',
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 400,
  letterSpacing: '.2rem',
  color: 'inherit',
  textDecoration: 'none',
});

export default StyledTypography