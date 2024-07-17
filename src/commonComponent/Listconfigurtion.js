import React from 'react'
import { TextField, Container, Typography, Box, OutlinedInput, InputAdornment } from '@mui/material'
import Spacer from './spacer'

function Listconfigurtion(props) {

  const { configName,onDescriptionChange,onValueChange} = props

 let DescriptionTitle={
     high: "Description(high)",
     medium: "Description(medium)",
     low: "Description(low)",
 }
 let ValuesTitle={
  high: "Values(high)",
  medium: "Values(medium)",
  low: "Values(low)",
}
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: '#efefef', borderRadius: 2, display: 'flex', marginLeft: 10, height: 50, alignSelf: 'center' }}>
        <Typography style={{ fontSize: '21px', color: '#4e4fa9', fontWeight: 750, margin: 8 }}>{configName}</Typography>
      </Box>
      <Spacer height={30} />
      <Container style={{ marginLeft: '60px' }}>
        <Box component="form" onSubmit={() => { }} style={{ width: '100%' }}>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box width={'50%'}>
              {["high","medium", "low"].map((item) => {
                return (
                  <>
                    <Typography style={{ fontSize: '15px', fontWeight: '600', marginBottom: "5px" }}>{ValuesTitle[item]}</Typography>
                    <OutlinedInput
                        style={{height:"35px", width:"90%",fontSize: '15px', fontWeight: '600', marginBottom: "5px"}}
                        id="outlined-adornment-weight"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                    />
                    <Spacer height={20} />
                  </>
                )
              })}
            </Box>
            <Spacer height={20} />
            <Box width={'50%'}>
              {["high","medium", "low"].map((item) => {
                return (
                  <>
                    <Typography style={{ fontSize: '15px', fontWeight: '600', marginBottom: "5px" }}>{DescriptionTitle[item]}</Typography>
                    <OutlinedInput
                        style={{height:"35px", width:"90%",fontSize: '15px', fontWeight: '600', marginBottom: "5px"}}
                        id="outlined-adornment-weight"
                        onChange={onDescriptionChange(configName,item)} 
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                    />
                    <Spacer height={20} />
                  </>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Listconfigurtion
