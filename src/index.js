import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Timeline from './components/Timeline/Timeline';
import Nav from './components/Nav/Nav'
import Bitmoji from './components/Bitmoji/Bitmoji';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Bitmoji />
    <Timeline />
  </React.StrictMode>,
  document.getElementById('root')
);

