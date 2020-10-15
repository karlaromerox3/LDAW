import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Layout({ children }) {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <br />
              {children}
          </header>
      </div>
  );
}

export default Layout;