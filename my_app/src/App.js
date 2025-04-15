import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textform heading="Try TextUtils-Word Counter,Character Counter,Remove Extra Spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
