import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/";
import Resume from "./components/Resume";
function App() {
  return (
    <>
    <CssBaseline/>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
