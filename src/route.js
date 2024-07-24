import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeUser from "../src/component/Home/userhome";
import SignIn from './component/userAuth/signin';
import RoiEstimates from './component/Roiestimates';
import SignUp from './component/userAuth/signUp';
import ProfileComponent from './component/edituser';
import IndustryConfig from './component/IndustryConfigrution/indConfig';
import Dashboard from './dashboard';
import CreateRoiCom from './component/createRoiCom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drawerAction, loginAction } from './component/Home/actions/actions';
function Approutes() {  
    // const [userLogin,setUserloggedIn]= useState(false)
    const { userLogin } = useSelector((state) => state.HomeReducer);
    const [blank,setBlank]=useState(true)
    let userlog = JSON.parse(localStorage.getItem("userlogged"))
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loginAction(userlog))
      setBlank(false)
    },[])
   console.log(userLogin,"userLogeed")
   return (
        <Router>
            {blank ?
            <></>
            :
            <>
            {userLogin ?
                  <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/RoiEstimates" element={<RoiEstimates />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/edit-user" element={<ProfileComponent />} />
                    <Route path="/configuration" element={<IndustryConfig />} />
                    <Route path="/createRoi" element={<CreateRoiCom />} />
                  </Routes>
                      :
                  <Routes>
                    <Route path="/" element={<SignIn />}/>
                 </Routes> 
              }
            </>
            }
        </Router>
    );
}

export default Approutes;
