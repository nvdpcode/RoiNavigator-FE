import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const drawerOpen = useSelector(state => state.HomeReducer.Drawer);

  const dispatch = useDispatch()
  const navigation = useNavigate();

  const handleOpenUserMenu = (event) => {
    navigation('/edit-user')
    setAnchorElUser(event.currentTarget);
  };


  return (
    <AppBar position="fixed" style={{
      borderTopLeftRadius: 8,
      height: "70px",
      background: "linear-gradient(90deg, #4e4fa9 37.97%, #6946b7 62.52%, #a831d6 100.2%)"
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters style={{ display: "flex", marginTop: '9px', justifyContent: "space-between" }}>
          <Box
            style={{ display: 'flex' }}>
            <Typography
              onClick={() => { navigation('/') }}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 35,
                fontFamily: "monospace",
                cursor: "pointer"
              }}>riverbed</Typography>
            <Typography style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 35,
              marginLeft: 40
            }}>ROI</Typography>
            <Typography style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              marginTop: 25
            }}>N A V I G A T O R</Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", marginRight: 2 }}>
            <Tooltip title="Edit Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" style={{ height: 50, width: 50 }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
