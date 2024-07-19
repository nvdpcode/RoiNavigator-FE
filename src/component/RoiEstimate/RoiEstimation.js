import {Box, Button,OutlinedInput,InputAdornment} from '@mui/material'
import React from 'react'
import "./roiEstimate.css"
import EnhancedTable from '../../commonComponent/table'
import Spacer from '../../commonComponent/spacer'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


function RoiEstimation() {
  const navigation = useNavigate()

  return (
    <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 10px)' }}>
    <div
      style={{
        marginLeft: "80px",
        marginTop: -30
      }}
    >
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 85,
        width: "100%",
        gap: 40,
        fontSize: "28px",
        height: "175px"

      }}>
        <h6 style={{
          color: "#4e4fa9",
          fontWeight: 700
        }}>ROI Estimates List</h6>
    
      </div>
      <Box
        sx={{
          display: "flex",
          width: '100%',
          maxWidth: '100%',
          marginTop: -10
        }}
      >
        <OutlinedInput
          fullWidth
          sx={{ marginRight: 4, height: "33px" }} placeholder="value" id="fullWidth"
          startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
          }}
        />
        <Button onClick={()=>{navigation('/createRoi')}}  style={{ width: "15%",height:"33px", borderRadius:"7px",textTransform:"none",  backgroundColor: "#e10098", color: "white", marginRight: 33 }}>Create ROI</Button>
      </Box>
      
      <Spacer height={50} />
      <EnhancedTable />
    </div>
    </div>
  )
}

export default RoiEstimation
