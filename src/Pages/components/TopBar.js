import Logo from './Logo';
import Social from './Social';

import NavBar from './NavBar';
import { useState } from 'react';
function TopBar(){
    const [Nav, setNav] = useState(false);

    function cng(){
        setNav(!Nav);
    }
    return(

        <>
        <div className="TopBar">
        <div className="container">
            <div className="row">
                <div className="col-md-6 TB">
                    <Logo/> 
                    <i className="fas fa-bars" onClick={cng}></i>
                </div>
                <div className="col-md-6">
                    <Social/>
                </div>
            </div>
        </div>
        </div>
        <NavBar show={Nav}/>
        </>
    );
}export default TopBar;