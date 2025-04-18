import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // const changeBackgroundColor = (color) => {
  //   document.body.style.backgroundColor = color;
  // };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
{/* 
          /* Background Color Options
          <div className="d-flex">
            <button 
              className="btn mx-1" 
              style={{ backgroundColor: 'blue', width: '30px', height: '30px', borderRadius: '50%' }} 
              onClick={() => changeBackgroundColor('blue')}
            >
            </button>
            <button 
              className="btn mx-1" 
              style={{ backgroundColor: 'green', width: '30px', height: '30px', borderRadius: '50%' }} 
              onClick={() => changeBackgroundColor('green')}
            >
            </button>
            <button 
              className="btn mx-1" 
              style={{ backgroundColor: 'red', width: '30px', height: '30px', borderRadius: '50%' }} 
              onClick={() => changeBackgroundColor('red')}
            >
            </button>
            <button 
              className="btn mx-1" 
              style={{ backgroundColor: 'white', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid black' }} 
              onClick={() => changeBackgroundColor('white')}
            >
            </button>
          </div> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input 
              className="form-check-input" 
              onClick={props.toggleMode} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label> 
          </div>
        </div>
      </div>
    </nav>
  );
}
