import React from 'react'
import Spacer from '../../commonComponent/spacer'
import { Grid, Box, Paper } from '@mui/material'
import Header from '../../commonComponent/header'
import { ToastContainer } from 'react-toastify'
import { styled } from '@mui/material/styles';
import TemporaryDrawer from '../../commonComponent/Drawer'
import Listconfigurtion from '../../commonComponent/Listconfigurtion'
import './industryconfig.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function IndustryConfig() {
  const [activeTab, setActiveTab] = React.useState('General');

  const handleClick = (item) => {
    setActiveTab(item);
  };

  const [Configurations, setConfiguration] = React.useState({
    'Input License': { values: { high: '', medium: '', low: '' }, descriptions: { high: '', medium: '', low: '' } },
    'Service Desk': { values: { high: '', medium: '', low: '' }, descriptions: { high: '', medium: '', low: '' } },
    'Hourly Rate': { values: { high: '', medium: '', low: '' }, descriptions: { high: '', medium: '', low: '' } },
    'Discount Rate for Net Present Value': { values: { high: '', medium: '', low: '' }, descriptions: { high: '', medium: '', low: '' } }
  });

  const handleValueChange = (configName, level) => (event) => {
    setConfiguration(prevData => ({
      ...prevData,
      [configName]: {
        ...prevData[configName],
        values: {
          ...prevData[configName].values,
          [level]: event.target.value
        }
      }
    }));
  };

  const handleDescriptionChange = (configName, level) => (event) => {
    setConfiguration(prevData => ({
      ...prevData,
      [configName]: {
        ...prevData[configName],
        descriptions: {
          ...prevData[configName].descriptions,
          [level]: event.target.value
        }
      }
    }));
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <TemporaryDrawer />
      <Grid>
        <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 10px)' }}>
          <div style={{ marginLeft: '80px', marginTop: -30 }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: 85,
              width: '100%',
              gap: 40,
              fontSize: 'xx-large',
              height: '100px'
            }}>
              <h6 style={{
                fontSize: 20,
                color: '#4e4fa9',
                fontWeight: 700,
             
              }}>Edit Industry Configuration</h6>
            </div>
            <Box sx={{ flexGrow: 1, backgroundColor: '#efefef', display: 'flex', height: '100px', alignItems: 'center',borderRadius:"8px" }}>
              <Grid container spacing={1}>
                <Grid container item spacing={3}>
                  {['General', 'Aternity', 'NPM', 'IQ'].map((item) => (
                    <Grid item xs={3} key={item}>
                      <Item
                        style={activeTab === item ? {
                          cursor: "pointer", color: "#ffffff",
                          backgroundColor: "#4e4fa9"
                        } : {cursor: "pointer"}}
                        onClick={() => handleClick(item)}
                      >{item}</Item>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>
            <Spacer height={50} />
          </div>
          {Object.keys(Configurations).map((configName) => (
        <React.Fragment key={configName}>
          <Listconfigurtion
            configName={configName}
            values={Configurations[configName].values}
            descriptions={Configurations[configName].descriptions}
            onValueChange={handleValueChange}
            onDescriptionChange={handleDescriptionChange}
          />
          <Spacer height={50} />
        </React.Fragment>
      ))}
        </div>
      </Grid>
    </>
  )
}

export default IndustryConfig




