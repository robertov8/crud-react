/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Routes from './Routes';
import './App.css';
import Logo from '../components/template/Logo/Logo';
import Nav from '../components/template/Nav/Nav';
import Footer from '../components/template/Footer/Footer';


export default () =>
    <BrowserRouter >
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>;
