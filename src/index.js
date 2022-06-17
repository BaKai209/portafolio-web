import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './components/Contact';

ReactDOM.render(
  <Router>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);