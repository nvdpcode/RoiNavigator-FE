import React from 'react'
import { Box, InputAdornment, OutlinedInput, Typography, Container, MenuItem, Select} from '@mui/material';
import Spacer from '../../commonComponent/spacer';

function AdditionalInfo({ Addtionalprops, AdditionalOptions, setAdditionalOptions,handleChange,handleChangeInput}) {
  const mapping = {
    "industryAvg": "industryAvg",
    "industryHigh": "industryHigh"
  };

  let AdditionalNames = {
    "reductionInMTR": "Reduction in MTTR",
    "reductionInDesktopSupportTickets": "Reduction in Desktop Support Ticket",
    "reductionInSoftware": "Reduction in Software",
    "reductionInRefresh": "Reduction in Refresh",
    "reductionInWaitTime": "Reduction in Wait Time",
    "firstYear": "First Year",
    "subsYear": "Subsequent Years"
  }
;
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
          <Typography style={{ border: "none", fontSize: '18px', color: '#4e4fa9', fontWeight: 750, margin: 8 }}>{AdditionalNames[Addtionalprops.name]}</Typography>
        </Box>
        <Box component="form" onSubmit={() => { }} style={{ width: '100%', marginTop: "7px" }}>
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {Addtionalprops.name === "reductionInMTR" &&
              ["firstYear", "subsYear"].map((item, index) => {
                return (
                  <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}} width={"calc(33.33% - 10px)"}>
                    <Typography fontSize="14px" fontWeight={600}>{AdditionalNames[item]}</Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="selectValue"
                      value={Object.keys(AdditionalOptions["reductionInMTR"][item]) || ""}
                      onChange={(e) => handleChange(e, item, Addtionalprops.name)}
                      style={Object.keys(AdditionalOptions["reductionInMTR"][item])=="manual" ? { display: "flex", height: 37, backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37 }}
                      >
                      <MenuItem value={"manual"}>Manual</MenuItem>
                      {Addtionalprops?.reductionInMTR[item]?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                        );
                      })}
                    </Select>
                    {
                      Object.keys(AdditionalOptions["reductionInMTR"][item]) == "manual" &&
                      <OutlinedInput 
                        defaultValue={Object.values(AdditionalOptions["reductionInMTR"][item])}
                        error={isNaN(Object.values(AdditionalOptions["reductionInMTR"][item]))}
                        style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                        name={"desktop"}
                        // value={inputsdata[inputName] || ""}
                        onChange={(e) => handleChangeInput(e, item,"reductionInMTR")}
                        startAdornment={<InputAdornment position="start">%</InputAdornment>}
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                      />
                    }
                  </Box>
                )
              })}

            {Addtionalprops.name === "reductionInDesktopSupportTickets" &&
              ["firstYear", "subsYear"].map((item, index) => {
                return (
                  <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}} width={"calc(33.33% - 10px)"}>
                    <Typography fontSize="14px" fontWeight={600}>{AdditionalNames[item]}</Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="selectValue"
                      value={Object.keys(AdditionalOptions["reductionInDesktopSupportTickets"][item]) || ""}
                      onChange={(e) => handleChange(e, item, Addtionalprops.name)}
                      // label="Select Value"
                      style={Object.keys(AdditionalOptions["reductionInDesktopSupportTickets"][item])=="manual" ? { display: "flex", height: 37, backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37 }}
                    >
                      <MenuItem value={"manual"}>Manual</MenuItem>
                      {Addtionalprops?.reductionInDesktopSupportTickets[item]?.map((obj, idx) => {
                        const keys = Object.keys(obj)[0];
                        const value = obj[keys];
                        return (
                          <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                        );
                      })}
                    </Select>
                    {
                      Object.keys(AdditionalOptions["reductionInDesktopSupportTickets"][item])=="manual" &&
                      <OutlinedInput
                        defaultValue={Object.values(AdditionalOptions["reductionInDesktopSupportTickets"][item])}
                        error={isNaN(Object.values(AdditionalOptions["reductionInDesktopSupportTickets"][item]))}
                        style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                        name={"desktop"}
                        onChange={(e) => handleChangeInput(e, item,"reductionInDesktopSupportTickets")}
                        startAdornment={<InputAdornment position="start">%</InputAdornment>}
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                      />
                    }
                  </Box>
                )
              })}
            {Addtionalprops.name === "reductionInRefresh" &&
             <Box  sx={{display:"flex",flexDirection:"column",gap:"10px"}} width={"calc(100% - 10px)"}>
             <Typography fontSize="14px" fontWeight={600}>{"Each Year"}</Typography>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               name="selectValue"
               value={Object.keys(AdditionalOptions["reductionInRefresh"]["firstYear"]) || ""}
               onChange={(e) => handleChange(e, "firstYear", "reductionInRefresh")}
               // label="Select Value"
               style={Object.keys(AdditionalOptions["reductionInRefresh"]["firstYear"])=="manual" ? { display: "flex", height: 37, backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37 }}
               >
               <MenuItem value={"manual"}>Manual</MenuItem>
               {Addtionalprops?.reductionInRefresh["firstYear"]?.map((obj, idx) => {
                 const keys = Object.keys(obj)[0];
                 const value = obj[keys];
                 return (
                   <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                 );
               })}
             </Select>
             {
                  Object.keys(AdditionalOptions["reductionInRefresh"]["firstYear"])=="manual" &&
                   <OutlinedInput
                     defaultValue={Object.values(AdditionalOptions["reductionInRefresh"]['firstYear'])}
                     error={isNaN(Object.values(AdditionalOptions["reductionInRefresh"]["firstYear"]))}
                     style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                     name={"desktop"}
                     // value={inputsdata[inputName] || ""}
                     onChange={(e) => handleChangeInput(e, 'firstYear',"reductionInRefresh")}
                     startAdornment={<InputAdornment position="start">%</InputAdornment>}
                     inputProps={{
                       'aria-label': 'weight',
                     }}
                   />
                 }
           </Box>
            }
            {Addtionalprops.name === "reductionInSoftware" &&
              <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}} width={"calc(100% - 10px)"}>
                <Typography fontSize="14px" fontWeight={600}>{"Each Year"}</Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="selectValue"
                  value={Object.keys(AdditionalOptions["reductionInSoftware"]["firstYear"]) || ""}
                  onChange={(e) => handleChange(e, "firstYear", "reductionInSoftware")}
                  // label="Select Value"
                  style={Object.keys(AdditionalOptions["reductionInSoftware"]["firstYear"])=="manual" ? { display: "flex", height: 37, backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37 }}
                  >
                  <MenuItem value={"manual"}>Manual</MenuItem>
                  {Addtionalprops?.reductionInSoftware["firstYear"]?.map((obj, idx) => {
                    const keys = Object.keys(obj)[0];
                    const value = obj[keys];
                    return (
                      <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                    );
                  })}
                </Select>
                {
                     Object.keys(AdditionalOptions["reductionInSoftware"]["firstYear"])=="manual" &&
                      <OutlinedInput
                        defaultValue={Object.values(AdditionalOptions["reductionInSoftware"]['firstYear'])}
                        error={isNaN(Object.values(AdditionalOptions["reductionInSoftware"]["firstYear"]))}
                        style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                        name={"desktop"}
                        // value={inputsdata[inputName] || ""}
                        onChange={(e) => handleChangeInput(e, 'firstYear',"reductionInSoftware")}
                        startAdornment={<InputAdornment position="start">%</InputAdornment>}
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                      />
                    }
              </Box>
            }
            {Addtionalprops.name === "reductionInWaitTime" &&
             <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}} width={"calc(100% - 10px)"}>
             <Typography fontSize="14px" fontWeight={600}>{"Each Year"}</Typography>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               name="selectValue"
               value={Object.keys(AdditionalOptions["reductionInWaitTime"]["firstYear"]) || ""}
               onChange={(e) => handleChange(e, "firstYear", "reductionInWaitTime")}
               // label="Select Value"
               style={Object.keys(AdditionalOptions["reductionInWaitTime"]["firstYear"])=="manual" ? { display: "flex", height: 37, backgroundColor: "rgb(225 0 152 / 10%)" } : { display: "flex", height: 37 }}
               >
               <MenuItem value={"manual"}>Manual</MenuItem>
               {Addtionalprops?.reductionInWaitTime["firstYear"]?.map((obj, idx) => {
                 const keys = Object.keys(obj)[0];
                 const value = obj[keys];
                 return (
                   <MenuItem key={idx} value={keys}>{`${value}% - ${keys}`}</MenuItem>
                 );
               })}
             </Select>
             {
                  Object.keys(AdditionalOptions["reductionInWaitTime"]["firstYear"])=="manual" &&
                   <OutlinedInput
                     defaultValue={Object.values(AdditionalOptions["reductionInWaitTime"]["firstYear"])}
                     style={{ width: "100%", height: 37, fontSize: '15px', fontWeight: '600', marginTop: "12px" }}
                     name={"desktop"}
                     // value={inputsdata[inputName] || ""}
                     onChange={(e) => handleChangeInput(e, 'firstYear',"reductionInWaitTime")}
                     startAdornment={<InputAdornment position="start">%</InputAdornment>}
                     inputProps={{
                       'aria-label': 'weight',
                     }}
                   />
                 }
           </Box>
            }
          </Box>

        </Box>
        <Spacer height={30} />
      </Container>
    </div>
  );
}

export default AdditionalInfo
