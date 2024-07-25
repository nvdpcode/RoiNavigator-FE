import React from 'react'
import { Box, OutlinedInput, Typography, Container, TextField, MenuItem, Select } from '@mui/material';
import Spacer from '../../commonComponent/spacer';


function PhaseDeleviry({PhaseDel, selectedOptions,handleChange,handleChangeInput,manual,mainSelectedValue={mainSelectedValue}}) {
  const [manualIndex, setManualIndex] = React.useState([]);
  const handleManual = (index) => {
    setManualIndex((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices
        : [...prevIndices, index]
    );
  };

  const selectors = ["desktopSupport", "deviceRefresh", "softwareLicence", "userProductivity"];
  const subTitle={
    desktopSupport:"Desktop Support",
    deviceRefresh:"Device Refresh",
    softwareLicence:"Software License",
    userProductivity:"User Productivity"
  }
  return (
    <div >      
    <div style={{ display: "flex",width:"83%", marginTop: "-20px", justifyContent: "space-between", alignSelf: "center", marginLeft: "72px" }}>
    <Typography style={{ color: "#e10098", fontSize: "22px",fontWeight:"600" }}>Phase Delivery</Typography>
      {/* <span style={{ display:"flex",width:"30%",marginRight:"-134px"}}>
       <Typography>Assumptions</Typography>
       <Box width={"calc(50% - 10px)"}>
            <Select
              labelId="demo-simple-select-label"
              name="selectValue"
              value={mainSelectedValue}
              onChange={(e) => handleChange(e, 'Assumptions')}
              style={{ display: "flex", height: 27 }}
            >
               <MenuItem value={"manual"}>Manual</MenuItem>
               <MenuItem value={"industryLow"}>Industry Low</MenuItem>
               <MenuItem value={"industryAvg"}>Industry Avg</MenuItem>
               <MenuItem value={"industryHigh"}>Industry High</MenuItem>
              </Select>
        </Box>
      </span> */}
      </div>
      <Container style={{
        backgroundColor: "red",
        width: "88%", minHeight: 174,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "rgb(255 255 255)",
        border: "2px solid #efefef",
        marginTop: "10px"
      }}>
        <Box sx={{
          backgroundColor: '#efefef',
          borderRadius: "0px",
          height: 43,
          width: "calc(106% - 10px)",
          marginLeft: "-26px"
        }}>
          <Typography style={{ border: "none", fontSize: '19px', color: '#4e4fa9', fontWeight: 750, margin: 8 }}>{"Start month"}</Typography>
        </Box>
        
        <Box component="form" onSubmit={() => { }} style={{ width: '100%' }}>
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
           {
                selectors?.map((item,index) => {
                  return (
                    <Box width={"calc(33.33% - 10px)"}>
                      <Typography fontSize="14px" fontWeight={600}>{subTitle[item]}</Typography>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="selectValue"
                        value={Object.keys(selectedOptions[item]) || ""}
                        onChange={(e) => handleChange(e, item,"start_month")}
                        style={Object.keys(selectedOptions[item])=="manual" ? { display: "flex", height: 35, backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 35 }}
                        >
                        <MenuItem onClick={() => handleManual(index)} key={"manual"} value={"manual"}>Manual</MenuItem>
                        {PhaseDel[0]?.phasedDelivery[item]?.map((obj, idx) => {
                          const keys = Object.keys(obj)[0];
                          const value = obj[keys];
                          return (
                            <MenuItem key={idx} value={keys}>{`${keys}: ${value}`}</MenuItem>
                          );
                        })}
                      </Select>
                      {
                     Object.keys(selectedOptions[item])[0] == 'manual' &&
                      <OutlinedInput
                        defaultValue={Object.values(selectedOptions[item])[0]}
                        style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                        name={"desktop"}
                        error={isNaN(Object.values(selectedOptions[item])[0]) ?? false}
                        onChange={(e) => handleChangeInput(e, item)}
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                      />
                    }
                    </Box>
                  )
                })
           }
          </Box>
        </Box>
        <Spacer height={15} />
      </Container>
      <Spacer height={30} />
    </div>
  )
}

export default PhaseDeleviry
