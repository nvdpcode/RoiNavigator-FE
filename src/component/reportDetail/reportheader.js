import React from 'react'
import { Box,  Typography, MenuItem, Select } from '@mui/material';

function Reportheader({windowSize,handleChange,mainSelectedValue,Assumptions,headingName}) {
  return ( 
    <div style={{ display: "flex",width:"97%", marginTop: "-20px", justifyContent: "space-between", alignSelf: "center", marginLeft: windowSize && windowSize?.current[0]>1370 ? "11%" :"4%" }}>
    <Typography style={{ color: "#e10098", fontSize: "22px",fontWeight:"600" }}>{headingName}</Typography>
   {/* {
   Assumptions &&
   <span style={{display:"flex", width: "30%", marginRight: "-34px" ,gap:"10px"}}>
      <Typography>Assumptions</Typography>
      <Box width={"calc(50% - 10px)"}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="selectValue"
          value={mainSelectedValue}
          onChange={(e) => handleChange(e, Assumptions)}
          // label="Select Value"
          style={{ display: "flex", height: 27 }}
        >
          <MenuItem value={"manual"}>Manual</MenuItem>
          <MenuItem value={"industryHigh"}>industry High</MenuItem>
          <MenuItem value={"industryAvg"}>Industry Average</MenuItem>
          <MenuItem value={"industryLow"}>industry Low</MenuItem>
        </Select>
      </Box>
    </span>} */}
  </div>
  )
}

export default Reportheader
