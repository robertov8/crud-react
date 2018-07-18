/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import Logo from '../components/template/Logo/Logo';
import Nav from '../components/template/Nav/Nav';
import Footer from '../components/template/Footer/Footer';

import Home from '../components/home/Home';

export default () =>
    <div className='app'>
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>;