import React from "react";
import Header from "./commonComponent/header";
import Approutes from "./route";
import store from "./store";
import { Provider } from 'react-redux';
import TemporaryDrawer from "./commonComponent/Drawer";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Approutes />
      </div>
    </Provider>
  );
}

export default App;