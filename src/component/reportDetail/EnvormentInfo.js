import React from 'react'
import { Box, Typography, Container, MenuItem, Select, styled, Paper, InputAdornment, OutlinedInput } from '@mui/material';
import Spacer from '../../commonComponent/spacer';


function EnvoermentInfo({ envprops, handleChange, manual, selectedOptions ,handleChangeInput}) {
  const selectors = ["tL1Cost", "tL2Cost", "tL3Cost", "noOfL1TicketsPerUM", "noOfL2TicketsPerUM", "noOfL3TicketsPerUM"];
  const [manualIndex, setManualIndex] = React.useState([]);

  const handleManual = (index) => {
    setManualIndex((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices
        : [...prevIndices, index]
    );
  };
  let configName={
    "tL1Cost":"Cost Per Ticket L1",
    "tL2Cost":"Cost Per Ticket L2", 
    "tL3Cost":"Cost Per Ticket L3",
    "noOfL1TicketsPerUM":"Number of Ticket L1",
    "noOfL2TicketsPerUM":"Number of Ticket L2",
    "noOfL3TicketsPerUM":"Number of Ticket L3",
    "waitTime":"Wait Time",
    "hourlyPrice":"Hourly Rate",
    "avgTimeSpentonPc":"Average Time Spent on Pc",
    "deviceCost":"Cost Per Device",
    "deviceRefresh":"Refresh"

  }
 

  return (
    <div>
      <Container style={{
        backgroundColor: "red",
        width: "94%", minHeight: 174,
        display: "flex",
        flexDirection: "column",
        gap: "10px",  
        backgroundColor: "rgb(255 255 255)",
        borderRadius: "4px",
        border: "2px solid #efefef"
      }}>
        <Box sx={{
          backgroundColor: '#efefef',
          borderRadius: "4px",
          height: 43,
          width: "calc(106% - 13px)",
          marginLeft: "-26px"
        }}>
          <Typography style={{ border: "none", fontSize: '18px', color: '#4e4fa9', fontWeight: 750, margin: 8 }}>{envprops.name}</Typography>
        </Box>
        <Box component="form" onSubmit={() => { }} style={{ width: '100%', marginTop:"7px"}}>
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {envprops.name === "Service Desk" &&
              selectors?.map((item, index) => {
                return (
                  <Box width={"calc(33.33% - 10px)"}>
                    <Typography fontSize="14px" fontWeight={600}>{configName[item]}</Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="selectValue"
                      value={Object.keys(selectedOptions[item])[0] || ""}
                      onChange={(e) => handleChange(e, item, envprops.name)}
                      style={Object.keys(selectedOptions[item])[0] === "manual" ? { display: "flex", height: 37, marginTop:"7px", backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37,marginTop:"7px" }}
                    >
                      <MenuItem onClick={() => handleManual(index)} key={index} value={"manual"}>Manual</MenuItem>
                      {envprops?.configServiceDesk[item]?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{(index==0 || index==1 || index==2) ? `$ ${value} - ${keys}` : `${value} - ${keys}`}</MenuItem>
                        );
                      })}
                    </Select>
                    {
                     (manual || manualIndex.includes(index)) && Object.keys(selectedOptions[item])[0] == "manual" &&
                      <OutlinedInput
                        error={isNaN(Object.values(selectedOptions[item])[0]) ?? false}
                        style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                        name={"desktop"}
                        onChange={(e) => handleChangeInput(e, item)}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                      />
                    }
                  </Box>
                )
              })
            }

            {envprops.name === "Desktop Support" &&
              <Box width={"calc(100% - 10px)"}>
                <Typography fontSize="14px" fontWeight={600}>{"Percentage of Desktop Support Tickets"}</Typography>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select"
                  name="selectValue1"
                  value={Object.keys(selectedOptions["desktopSupportTicketPerc"])[0] || ""}
                  onChange={(e) => handleChange(e, "desktopSupportTicketPerc",envprops.name)}
                  style={Object.keys(selectedOptions["desktopSupportTicketPerc"])[0] === "manual" ? { display: "flex", height: 37, marginTop:"7px", backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37,marginTop:"7px" }}
                  >
                  <MenuItem  value={"manual"}>Manual</MenuItem>
                  {envprops?.configDesktopSupport["desktopSupportTicketPerc"]?.map((obj, idx) => {
                    const keys = Object.keys(obj)[0];
                    const value = obj[keys];
                    return (
                      <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                    );
                  })}
                </Select>
                {
                  envprops.name === "Desktop Support" && Object.keys(selectedOptions["desktopSupportTicketPerc"])[0] == "manual" &&
                  <OutlinedInput
                    error={isNaN(Object.values(selectedOptions["desktopSupportTicketPerc"])[0]) ?? false}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                    onChange={(e) => handleChangeInput(e, "desktopSupportTicketPerc")}
                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  
                }
              </Box>
            }
            {envprops.name === "Hardware" &&
              ["deviceCost", "deviceRefresh"].map((item) => {
                return (
                  <Box key={item} width={"calc(33.33% - 10px)"}>
                    <Typography fontSize="14px" fontWeight={600}>{configName[item]}</Typography>
                    <Select
                      labelId={`select-${item}-label`}
                      id={`select-${item}`}
                      name="selectValue"
                      value={Object.keys(selectedOptions[item])[0] || ""}
                      onChange={(e) => handleChange(e, item,envprops.name)}
                      style={Object.keys(selectedOptions[item])[0] === "manual" ? { display: "flex", height: 37, marginTop:"7px", backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37,marginTop:"7px" }}
                    >
                      <MenuItem value={"manual"}>Manual</MenuItem>
                      {envprops.configHardware[item]?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{item=="deviceRefresh" ? ` ${value} - ${keys}`:`$ ${value} - ${keys}`}</MenuItem>
                        );
                      })}
                    </Select>
                    {
                  envprops.name === "Hardware" && Object.keys(selectedOptions[item])[0] == "manual" &&
                  <OutlinedInput
                    error={isNaN(Object.values(selectedOptions[item])[0]) ?? false}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                    onChange={(e) => handleChangeInput(e, item)}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    inputProps={{
                      'aria-label': 'weight',
                      
                    }}
                  />
                }
                  </Box>)
              })
            }
            {envprops.name === "Software" &&
              <Box width={"calc(100% - 10px)"}>
                <Typography fontSize="14px" fontWeight={600}>{"Cost Per User"}</Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="selectValue"
                  value={Object.keys(selectedOptions["costPerUser"])[0] || ""}
                  onChange={(e) => handleChange(e, "costPerUser",envprops.name)}
                  style={Object.keys(selectedOptions["costPerUser"])[0] === "manual" ? { display: "flex", height: 37, marginTop:"7px", backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37,marginTop:"7px" }}
                  >
                  <MenuItem value={"manual"}>Manual</MenuItem>
                  {envprops?.configSoftware["costPerUser"]?.map((obj, idx) => {
                    const keys = Object.keys(obj)[0];
                    const value = obj[keys];
                    return (
                      <MenuItem key={idx} value={keys}>{`$${value} - ${keys}`}</MenuItem>
                    );
                  })}
                </Select>
                {
                  envprops.name === "Software" && Object.keys(selectedOptions["costPerUser"])[0] == "manual" &&
                  <OutlinedInput
                    error={isNaN(Object.values(selectedOptions["costPerUser"])[0]) ?? false}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                    onChange={(e) => handleChangeInput(e, "costPerUser")}
                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                }
              </Box>
            }
            {envprops.name === "Productivity" &&
              ["waitTime", "hourlyPrice", "avgTimeSpentonPc"].map((item, index) => {
                console.log(Object.keys(selectedOptions[item])[0],"Lifo")
                return (
                  <Box width={"calc(33.33% - 10px)"}>
                    <Typography fontSize="14px" fontWeight={600}>{configName[item]}</Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="selectValue"
                      value={Object.keys(selectedOptions[item])[0] || "manual"}
                      onChange={(e) => handleChange(e, item, envprops.name,)}
                      style={Object.keys(selectedOptions[item])[0] === "manual" ? { display: "flex", height: 37, marginTop:"7px", backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37,marginTop:"7px" }}
                    >
                      <MenuItem value={"manual"}>Manual</MenuItem>
                      {envprops?.configUserProductivity[item]?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{item=="hourlyPrice"? `$ ${value} - ${keys} ` :`${value}% - ${keys} `}</MenuItem>
                        );
                      })}
                    </Select>
                    {
                  envprops.name === "Productivity" && Object.keys(selectedOptions[item])[0] == "manual" &&
                  <OutlinedInput
                    error={isNaN(Object.values(selectedOptions[item])[0]) ?? false}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}              
                    onChange={(e) => handleChangeInput(e, item)}
                    startAdornment={<InputAdornment position="start">{index==1 ? `$` : `%`}</InputAdornment>}
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
    </div>
  );
}

export default EnvoermentInfo
