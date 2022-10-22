import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../src/pages/Dashboard/index';



import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



const styles = {
  paperContainer: {
    height: 1356,
    backgroundImage: `url(${"static/src/img/main.jpg"})`
  }
};



function App() {


  return (

    <React.Fragment>


      <Dashboard />


    </React.Fragment>




  );
}

export default App;
