import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography,
  Card
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate,useHistory, json} from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import "./singin.css"

const defaultTheme = createTheme();

export default function SignUp() {
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(validation(data)){
      // localStorage.setItem("userLogin",JSON.stringify(userLogin))
      navigation('/') 
    }
  };


  function validation(data){  
    let email = data.get('email')
    let password = data.get('password')
    let confirmPass = data.get('confirm password')
    let allData = {
      email,
      password,
      confirmPass
    }
    if(email =='' &&  password == ''){
      toast("please fill email or password")
      return false
    }
    else if(password !== confirmPass){
      toast("confirm password doesn't match")
      return false 
    }
    else{
      localStorage.setItem("userSingin",JSON.stringify(allData))
      return true
    }
  }

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
    <Card sx={{ maxWidth:500}}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <ToastContainer/>
        <Box
          className="logincard"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="confirm password"
              label="confirm password"
              type="password"
              id="confirm password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Sing Up
            </Button>
            <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Card>
    </div>
  );
}