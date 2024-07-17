import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { drawerAction } from '../component/Home/actions/actions';
import "./common.css"
import Spacer from './spacer';
import { useNavigate } from 'react-router-dom';
import { ConfigurationImage,calculatorImage,dashboardImage } from '../assets/assets';


export default function TemporaryDrawer() {
  const drawerOpen = useSelector(state => state.HomeReducer.Drawer);
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const iconMap = {
    'Dashboard' : <img src={dashboardImage} alt="cal" style={{ width: 30, height: 30,marginLeft:"-8px"}} />,
    'ROI Estimate':<img src={calculatorImage} alt="cal" style={{ width: 30, height: 30,marginLeft:"-8px"}} />,
    'Industry Configration': <img src={ConfigurationImage} alt="cal" style={{ width: 30, height: 30,marginLeft:"-8px"}} />,
    // 'Manage Role': <SendIcon sx={{marginLeft:"-12px", fontSize: 36 }} />,
    // 'Partenrs': <DraftsIcon  sx={{ marginLeft:"-15px", fontSize: 38 }} />
  }
  function callingNav(event){
    let location = event.currentTarget.innerText
    if(location=="Dashboard"){
      navigation("/dashboard")
    }
    if(location=="Industry Configration"){
      navigation("/configuration")
    }
    if(location=="ROI Estimate"){
      navigation("/RoiEstimates")
    }
  }
  const DrawerList = (
    <Box sx={{}}  role="presentation" onClick={()=>{dispatch(drawerAction(!drawerOpen))}} >
      <List>
        {['Dashboard','ROI Estimate', 'Industry Configration'].map((text, index) => (
          <ListItem key={text} disablePadding>      
            <ListItemButton onClick={(event)=>callingNav(event)} style={{color:"rgba(184, 185, 221)"}}>
            {iconMap[text]}
            <Spacer height={80}/>
           <ListItemText style={{marginLeft:"9px"}} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider  /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            {index==1 ?<MailIcon/>: <HomeIcon/> }
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <Drawer open={true} disableEnforceFocus  onClose={()=>{dispatch(drawerAction(!drawerOpen))}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
