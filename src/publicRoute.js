import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './component/userAuth/signin'

function PublicRoute({setUserloggedIn}) {
  return (
    <Routes>
      <Route path="/" element={<SignIn setUserloggedIn={setUserloggedIn} />}/>
      </Routes>

  )
}

export default PublicRoute
