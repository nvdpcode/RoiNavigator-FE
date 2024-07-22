import React from 'react';
import { Container, Box, TextField, Button, Typography, OutlinedInput } from '@mui/material';
import Spacer from '../commonComponent/spacer';
import Header from '../commonComponent/header';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { wallImage } from '../assets/assets';
import "./edituser.css"
function ProfileComponent() {
  const [updated, setUpdated] = React.useState(true)
  const [userDetail, setUserDetail] = React.useState({
    userName: "super",
    lastName: "Admin",
    contactNumber: "99399367513",
    email: "test@gmail.com"
  })
  function handleSubmit(event) {
    event.preventDefault();
    setUpdated(false)

  }
  const handleChangeInput = (event, fieldName) => {
    setUserDetail({
      ...userDetail,
      [fieldName]: event.target.value,
    });
  };
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <Container style={{ maxWidth: 600 }}>
          <Box component="form" onSubmit={handleSubmit} style={{ width: "100%" }} >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img className='images' src={wallImage}></img>
              <CameraAltIcon style={{
                display: "flex",
                position: "absolute",
                zIndex: 99,
                marginTop: "11%",
                marginLeft: 250,
                backgroundColor: "#bbb"
              }} />
            </div>
            <Box style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <Typography style={{ fontSize: "15px" }}>First Name</Typography>
            <OutlinedInput
              style={{ width: "100%", height: 37, fontSize: '15px', marginBottom: "5px" }}
              id="firstName"
              name="firstName"
              disabled={updated}
              value={userDetail.userName}
              onChange={(event) => handleChangeInput(event, "userName")}
              fullWidth
            />
            </Box>
            <Spacer height={20} />
            <Box style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <Typography style={{ fontSize: "15px" }}>Last Name</Typography>
            <OutlinedInput
              style={{ width: "100%", height: 37, fontSize: '15px', marginBottom: "5px" }}
              id="lastName"
              name="lastName"
              disabled={updated}
              value={userDetail.lastName}
              onChange={(event) => handleChangeInput(event, "lastName")}
              fullWidth
            />
             </Box>
            <Spacer height={8} />
            <Box style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <Typography style={{ fontSize: "15px" }}>Contact Number</Typography>
            <OutlinedInput
              style={{ width: "100%", height: 37, fontSize: '15px', marginBottom: "5px" }}
              id="contactNumber"
              name="contactNumber"
              disabled={updated}
              value={userDetail.contactNumber}
              onChange={(event) => handleChangeInput(event, "contactNumber")}
              fullWidth
            />
             </Box>
            <Spacer height={8} />
            <Box style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <Typography style={{ fontSize: "15px" }}>Email</Typography>
            <OutlinedInput
              style={{ width: "100%", height: 37, fontSize: '15px', marginBottom: "5px" }}
              id="email"
              
              name="email"
              disabled={updated}
              value={userDetail.email}
              onChange={(event) => handleChangeInput(event, "email")}
              fullWidth
            />
             </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #4e4fa9",
                color: " #4e4fa9",
                width: "100%",
                fontWeight: "bold"

              }}
              sx={{ mt: 3, mb: 2 }}
            >
              {!updated ? "Update Profile" : "edit profile"}
            </Button>

          </Box>
        </Container>
      </div>
    </>
  );
}

export default ProfileComponent;
