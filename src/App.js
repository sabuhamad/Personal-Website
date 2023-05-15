import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
    <CssBaseline/>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
