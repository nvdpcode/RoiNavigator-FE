import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Grid,
  Typography,
  Card
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { buildingImage } from '../../assets/assets';
import "./singin.css"
import Spacer from '../../commonComponent/spacer';
import "../userAuth/singin.css"
import { useDispatch } from 'react-redux';
import { drawerAction, loginAction } from '../Home/actions/actions';

const defaultTheme = createTheme();

export default function SignIn(props) {
  let { singUp , setUserloggedIn } = props
  const dispatch = useDispatch()
  const [userLogin, setLoginData] = React.useState({
    userEmail: "pramodchouhan531@gmail.com",
    password: "pass123@"
  })
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    data.get('password')
    if (validation(data)) {
      debugger
       JSON.stringify(localStorage.setItem("userlogged",true))
       dispatch(loginAction(true))
      // navigation('/RoiEstimates')
    }
  };


  function validation(data) {
    if (data.get('email') == '' && data.get('password') == '') {
      toast("please fill email or password")
    }
    else if (data.get('email') !== userLogin.userEmail) {
      toast("please fill valid email")
      return false
    }
    else if (data.get('password') !== userLogin.password) {
      toast("please enter valid password")
      return false
    }
    else {
      return true
    }
  }


  return (
    <>
      <Typography style={{
        display: "flex",
        position: "absolute",
        zIndex: 999,
        marginTop:   "40px",
        marginLeft: "50px",
        color: "white",
        fontWeight: "bold",
        fontSize: 45,
         fontFamily: "monospace"
      }}>riverbed</Typography>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${buildingImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',
        width: '100%',
        position: 'fixed',
      }}>
        <Card sx={{ maxWidth: 500, bgcolor: 'rgba(255, 255, 255, 0.8)', padding: 2 }}>
          <ThemeProvider theme={defaultTheme}>
            <ToastContainer />
            <Box
              className="logincard"
            >
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Box component="form" onSubmit={handleSubmit} style={{ width: "100%" }} >
                <TextField
                  aria-invalid="false"
                  id="email"
                  name="email"
                  placeholder="email"
                  variant="outlined"
                  fullWidth
                />
                <Spacer height={20}/>
                <TextField
                  aria-invalid="false"
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                />
                 <Spacer height={8}/>
                <Grid item xs style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}>
                  <Link style={{
                    fontSize: "12px",
                    fontWeight:"bold",
                    cursor: "pointer",
                    color: "rgb(78, 79, 169)"
                  }}>Forgot password?</Link>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#e10098",
                  borderRadius: "2px",
                  fontWeight: 500,
                  textTransform: "none",
                  fontWeight: "bold",

                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              </Box>
            </Box>
          </ThemeProvider>
        </Card>
      </div>
    </>
  );
}