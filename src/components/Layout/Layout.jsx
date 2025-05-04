import { Box, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, toggleTheme, mode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar toggleTheme={toggleTheme} mode={mode} />
      <Sidebar />
      <Box component="main" sx={{ width:'100%' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
