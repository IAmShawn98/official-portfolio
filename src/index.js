// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Render all 'App.js' Components that make up the application.
ReactDOM.render(<App />, document.getElementById('root'));

// Run Service Worker.
serviceWorker.unregister();
