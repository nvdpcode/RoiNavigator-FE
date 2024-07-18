import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import InboxIcon from '@mui/icons-material/Inbox';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { GenrateRoiImage,CalculateSavingImage } from '../assets/assets';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#e10098 0%,#e10098 50%,#e10098 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#e10098 0%,#e10098 50%,#e10098 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#e10098" : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  cursor:"pointer",
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, #e10098 0%, #e10098 50%, #e10098 100%)',
    boxShadow: '0 4px 10px 0 #e10098',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, #e10098 0%, #e10098 50%, #e10098 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <GroupAddIcon />,
    2: <SettingsIcon />,
    3: <VideoLabelIcon />,
    4: <WatchLaterIcon />,
    5: <img src={GenrateRoiImage} alt="Generate ROI" style={{ width: 24, height: 24,filter: 'invert(100%)' }} />,
    6: <img src={CalculateSavingImage} alt="cal" style={{ width: 24, height: 24,filter: 'invert(100%)' }} />  
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const stepsLabel = [
  'Customer Information',
  'Environment Information',
  'Additional Infromation',
  'Phase Delivery',
  'Calculation Savings',
  'Generate Roi Report',
];

export default function CustomizedSteppers(props) {

  const handleStepClick = (activeStep,step) => {
    //  let stepDiff = step - activeStep
    // if(stepDiff == 1 ){
    //   props.setSteps(step);
    // }
  };

  return (
    <Stack sx={{ width: '100%',marginTop:"100px",marginLeft:"30px" }} spacing={4}>
      <Stepper sx={{display:"flex",width:"94%",alignSelf:"center"}} alternativeLabel activeStep={props.steps} connector={<ColorlibConnector />}>
        {stepsLabel.map((label, index) => (
          <Step key={label}>
            <StepLabel  onClick={() => handleStepClick(props.steps,index)} StepIconComponent={ColorlibStepIcon} ><span style={ props.steps>=index  ? {color:'#e10098'}:{}}>{label}</span></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
