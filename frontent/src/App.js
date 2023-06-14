import React from "react";
import "../src/App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CreateFunc from "./CreateFunction/createfunction";
import Dash from "./DashBoard/dashboard";
import Report from"./Report/report";
import Function from "./Function/function";
import Userlog from "./UserLogin/userlogin";

const App=()=>{
  return(
    <div class="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlog/>}/>
      <Route path="/dash" element={<Dash/>}/>
      <Route path="/function" element={<Function/>}/>
      <Route path="/createfunction" element={<CreateFunc/>}/>
      <Route path="/Report" element={<Report/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
