import React from 'react'
import Dashboard from './dashboard'
import RoiEstimates from './component/Roiestimates'
import SignUp from './component/userAuth/signUp'
import ProfileComponent from './component/edituser'
import IndustryConfig from './component/IndustryConfigrution/indConfig'
import CreateRoiCom from './component/createRoiCom'
import { Route, Routes } from 'react-router-dom'

function PrivateRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/RoiEstimates" element={<RoiEstimates />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/edit-user" element={<ProfileComponent />} />
      <Route path="/configuration" element={<IndustryConfig />} />
      <Route path="/createRoi" element={<CreateRoiCom />} />
    </Routes>


  )
}

export default PrivateRoute
