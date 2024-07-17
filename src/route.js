import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeUser from "../src/component/Home/userhome";
import SignIn from './component/userAuth/signin';
import RoiEstimates from './component/Roiestimates';
import SignUp from './component/userAuth/signUp';
import ProfileComponent from './component/edituser';
import IndustryConfig from './component/IndustryConfigrution/indConfig';
import Dashboard from './dashboard';
import CreateRoiCom from './component/createRoiCom';
function Approutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/RoiEstimates" element={<RoiEstimates />}/>
                <Route path="/signUp" element={<SignUp />}/>
                <Route path="/edit-user" element={<ProfileComponent />}/>
                <Route path="/configuration" element={<IndustryConfig />}/>
                <Route path="/createRoi" element={ <CreateRoiCom/>}/>
               
            </Routes>
        </Router>
    );
}

export default Approutes;
