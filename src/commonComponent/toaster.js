import { Alert, Box, Snackbar, SnackbarContent } from '@mui/material'
import React, { useState } from 'react'

// const useStyles = withStyles((theme) => ({
//   success: {
//     backgroundColor: "green",
//   },
//   error: {
//     backgroundColor: theme.palette.error.main,
//   },
//   info: {
//     backgroundColor: "blue",
//   },
//   warning: {
//     backgroundColor: theme.palette.warning.main,
//   },
// }));

function Toaster({ toaster, setToaster }) {
  // const classes = useStyles()
  const [open, setOpen] = useState(true)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToaster({
      open:false,
      msgSaverity:"error"
    });
  };

  return (
    <div>
      {/* <Box sx={{ width: 200 }}> */}
      <Snackbar style={{ width: "400px", display: "flex", alignSelf: "center", marginLeft: "440px" }} anchorOrigin={{ vertical: "top", horizontal: "vertical" }} open={toaster.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={toaster.msgSaverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toaster.massage}
        </Alert>
      </Snackbar>
      {/* </Box> */}
    </div>
  )
}

export default Toaster
