import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ toggleTheme, mode }) => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
