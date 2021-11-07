import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Pages/components/TopBar';
import './App.css';
import Home from './Pages/Home';
import FootBar from './Pages/components/FootBar';
import './Pages/Home.css';
import React from "react";
import Android from './Pages/Android';
import './App.css';
import { BrowserRouter as Router,Switch , Route } from 'react-router-dom'


function App(){
    return(
        <>
        <TopBar/>
        <Router>
            <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/android' component={Android} exact/>
            </Switch>
        </Router>
           
        <FootBar/>
        </>
    )
}
export default App;

function abc(){
    return (
        <div>GHAYAS</div>
    )
}
function abc1(){
    return (
        <div>GHAYAS1</div>
    )
}
