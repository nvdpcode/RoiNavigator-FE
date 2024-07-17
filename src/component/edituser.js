import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import Spacer from '../commonComponent/spacer';
import Header from '../commonComponent/header';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { wallImage } from '../assets/assets';
import "./edituser.css"
function ProfileComponent() {
  const [updated, setUpdated] = React.useState(true)
  const [userDetail,setUserDetail] = React.useState({
    userName:"super",
    lastName:"Admin",
    contactNumber:"99399367513",
    email:"test@gmail.com"
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
            <Typography style={{ fontSize: "15px", fontWeight: "600" }}>First Name</Typography>
            <TextField
              aria-invalid="false"
              autoComplete="off"
              disabled={updated}
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="text"
              value={userDetail.userName}
              onChange={(event)=>handleChangeInput(event ,"userName")} 
              variant="filled"
              className="textInput"
              fullWidth
            />
            <Spacer height={20} />
            <Typography style={{ fontSize: "15px", fontWeight: "600" }}>Last Name</Typography>
            <TextField
              aria-invalid="false"
              autoComplete="off"
              disabled={updated}
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="text"
              value={userDetail.lastName}
              onChange={(event)=>handleChangeInput(event, "lastName")} 
              variant="filled"
              className="textInput"
              fullWidth
            />
            <Spacer height={8} />
            <Typography style={{ fontSize: "15px", fontWeight: "600" }}>Contact Number</Typography>
            <TextField
              aria-invalid="false"
              autoComplete="off"
              disabled={updated}
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="text"

              value={userDetail.contactNumber}
              onChange={(event)=>handleChangeInput(event,"contactNumber")} 
              variant="filled"
              className="textInput"
              fullWidth
            />
            <Spacer height={8} />
            <Typography style={{ fontSize: "15px", fontWeight: "600" }}>Email</Typography>
            <TextField
              aria-invalid="false"
              autoComplete="off"
              disabled={updated}
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="text"

              value={userDetail.email}
              onChange={(event)=>handleChangeInput(event,'email')} 
              variant="filled"
              className="textInput"
              fullWidth
            />
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
