import React from 'react'
import Header from '../commonComponent/header'
import TemporaryDrawer from '../commonComponent/Drawer'
import { ToastContainer } from 'react-toastify';
import RoiEstimation from './RoiEstimate/RoiEstimation';


function RoiEstimates() {

  return (
    <div>
      <Header />
      <ToastContainer />
      <TemporaryDrawer />
      <RoiEstimation />
    </div>
  )
}

export default RoiEstimates
