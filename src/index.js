import React from 'react';
import { BrowserRouter as Router, routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Route path='/' element={<App/>}/>
  </Router>,
  document.getElementById('root')
);