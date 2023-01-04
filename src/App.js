import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router} from "react-router-dom";
import Login from "./components/login/Login";
import { getCookie } from "./utils/getCookie";

function App() {
  const token = getCookie("access_token")
  // const isLoggedIn = token !== "" ? false : true
  const isLoggedIn = false
  return isLoggedIn ? (
    <Router>
      <Login/>
    </Router>
    ) : (
    <>
      <Router>
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
