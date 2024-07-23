import React from 'react';
import { Box, InputAdornment, OutlinedInput, Typography, Container, MenuItem, Select } from '@mui/material';
import Spacer from '../../commonComponent/spacer';
import {  updateInput } from '../Home/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from '../../commonComponent/calendar';

function CustomerInfo({ item, errorName, selectedOptions,handleChangeInput,handleChange }) {
  const { inputsdata } = useSelector((state) => state.InputsReducer);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateInput(name, value));
  };

  const handleWheel = (event) => {
    event.target.blur();
    event.stopPropagation();
  };
  let LicenseNames = {
    licenseTerm: "License Term",
    licensePrice: "License Price",
    addOnPrice: "Add-ons Price",
    Implementationandtraining: "Implementation and Training",
    residentPs: "Resident Ps"
  };

  return (
    <div>
      <Container style={{
        width: "94%",
        minHeight: 174,
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
          <Typography style={{ fontSize: '18px', color: '#4e4fa9', fontWeight: 750, margin: 8 }}>{item.name}</Typography>
        </Box>
        <Box component="form" onSubmit={() => { }} style={{ width: '100%' }}>
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {item.name === "ROI" && (
              <Box width={"calc(33.33% - 10px)"}>
                <Typography fontSize={"14px"} fontWeight={600}>{"ROI Name"}</Typography>
                <OutlinedInput
                  error={errorName.roiName}
                  style={{ width: "100%", height: 36, fontSize: '15px', fontWeight: '600', marginTop: "5px" }}
                  id="outlined-adornment-weight1"
                  name="roiName"
                  value={inputsdata.roiName}
                  onChange={(e)=>handleInputChange(e)}
                  placeholder="Enter ROI Name"
                  inputProps={{
                    'aria-label': 'ROI Name',
                    'type':"text"
                  }}
                />
              </Box>
            )}
            {item.name === "Customer" && (
              <>
                <Box width={"calc(50% - 10px)"}>
                  <Typography fontSize="14px" fontWeight={600}>{"Customer Name"}</Typography>
                  <OutlinedInput
                    error={errorName.customerName}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "5px" }}
                    id="outlined-adornment-weight1"
                    name="customerName"
                    value={inputsdata.customerName}
                    onChange={handleInputChange}
                    placeholder="Enter Customer Name"
               
                  />
                </Box>

                <Box width={"calc(50% - 10px)"}>
                  <Typography fontSize="14px" fontWeight={600}>{"Contact Name"}</Typography>
                  <OutlinedInput
                    error={errorName.contactName}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "5px" }}
                    id="outlined-adornment-weight3"
                    name="contactName"
                    value={inputsdata.contactName}
                    onChange={handleInputChange}
                    placeholder="Enter Contact Name"
                    inputProps={{
                      'aria-label': 'Contact Name',
                    }}
                  />
                </Box>

                <Box width={"calc(33.33% - 10px)"}>
                  <Typography fontSize="14px" fontWeight={600}>{"Number of Employees"}</Typography>
                  <OutlinedInput
                    error={errorName.numberOfEps}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "5px" }}
                    id="outlined-adornment-weight4"
                    name="numberOfEps"
                    value={inputsdata.numberOfEps}
                    onChange={handleInputChange}
                    placeholder="Enter Number of Employees"
                    inputProps={{
                      'aria-label': 'Number of Employees',
                      'type':'number'
                      
                    }}
                    onWheel={handleWheel}
                  />
                </Box>
              </>
            )}
            {item.name === "License" && (
              <>
                <Box width={"calc(33.33% - 10px)"}>
                  <Typography fontSize="14px" fontWeight={600}>{"Number of Eps"}</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="selectValue"
                    value={Object.keys(selectedOptions["noOfEps"]) || ""}
                    onChange={(e) => handleChange(e,"noOfEps",item.name)}
                    displayEmpty
                    placeholder="Select Number of Eps"
                    style={{ height: 37, marginTop: "7px", width: "100%" }}
                    inputProps={{
                      'aria-label': 'Number of Eps',
                    }}

                  >
                    <MenuItem value={"manual"}>Manual</MenuItem>
                     {item.configLicence.noOfEps?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                        );
                      })}
                  </Select>
              
                  {
                   Object.keys(selectedOptions["noOfEps"]) == "manual" &&
                  <OutlinedInput
                    defaultValue={Object.values(selectedOptions["noOfEps"])[0]}
                    error={(isNaN(Object.values(selectedOptions["noOfEps"])[0]) || Object.values(selectedOptions["noOfEps"])[0]>100) }
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                    onChange={(e) => handleChangeInput(e, "noOfEps")}
                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                    inputProps={{
                      'aria-label': 'weight',
                    }}

                  />
                }
                </Box>
                <Box width={"calc(33.33% - 10px)"}>
                  <Typography fontSize="14px" fontWeight={600}>{"Date"}</Typography>
                  <Calendar />
                </Box>
                <Box width={"calc(33.33% - 10px)"}>
                  <Typography fontSize="14px" fontWeight={600}>{"License Term"}</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="selectValue1"
                    value={Object.keys(selectedOptions["licenceTerm"]) ||  "" }
                    onChange={(e) => handleChange(e,"licenceTerm",item.name)}
                    displayEmpty
                    type="number"
                    placeholder="Select License Term"
                    style={{ height: 37, marginTop: "7px", width: "100%" }}
                    inputProps={{
                      'aria-label': 'License Term', 
                    }}
                    
                  > 
                   <MenuItem value={"manual"}>Manual</MenuItem>
                   {item.configLicence.licenceTerm?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{`${value} Months - ${keys}`}</MenuItem>
                        );
                      })}
                  </Select>
                  {
                   Object.keys(selectedOptions["licenceTerm"]) == "manual" &&
                  <OutlinedInput
                    defaultValue={Object.values(selectedOptions["licenceTerm"])[0]}
                    style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                    onChange={(e) => handleChangeInput(e, "licenceTerm")}
                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                }
                </Box>
                {["licensePrice", "addOnPrice", "Implementationandtraining", "residentPs"].map((inputName) => (
                  <Box width={"calc(33.33% - 10px)"} key={inputName}>
                    <Typography fontSize="14px" fontWeight={600}>{LicenseNames[inputName]}</Typography>
                    <OutlinedInput
                      error={errorName[inputName] || typeof(inputsdata[inputName]) != "string"}
                      style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginBottom: "5px" }}
                      id={`outlined-adornment-${inputName}`}
                      name={inputName}
                      value={inputsdata[inputName] || ""}
                      onChange={handleInputChange}
                      type="number"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      placeholder={`Enter ${LicenseNames[inputName]}`}
                      onWheel={handleWheel}

                    />
                  </Box>
                ))}
              </>
            )}
          </Box>
        </Box>
        <Spacer height={15} />
      </Container>
    </div>
  );
}

export default CustomerInfo;
