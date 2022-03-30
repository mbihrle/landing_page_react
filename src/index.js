import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './screens/Header';
import Services from './screens/Services';
import About from './screens/About';
import Contact from './screens/Contact';
import SignUp from './screens/Signup';
import Login from './screens/Login';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='header' element={<Header />} />
                <Route path='services' element={<Services />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='signUp' element={<SignUp />} />
                <Route path='logIn' element={<Login />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById('root')
);
