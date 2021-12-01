import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Pages/components/TopBar';
import './App.css';
import Home from './Pages/Home';
import FootBar from './Pages/components/FootBar';
import './Pages/Home.css';
import React from "react";
import Android from './Pages/Android';
import { Routes, Route } from 'react-router-dom';
import Flutter from './Pages/Flutter';
import Contact from './Pages/Contact';


function App(){

    return(
        <>
        <TopBar/>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/android' element={<Android/>}></Route>
            <Route path='/flutter' element={<Flutter/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
           
        <FootBar/>
        </>
    )
}
export default App;
