import React from 'react';
import SideBar from './components/SideBar';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h1>Contact US</h1>
                <div className="col-12">
                    {Nameofinput('Name')}
                    <input type="text"  className='col-12'/>
                </div>
                <div className="col-12">
                    {Nameofinput('Email')}
                    <input type="email"  className='col-12'/>
                </div>
                <div className="col-12">
                    {Nameofinput('Massage')}
                    <textarea name="massage" id="" cols="30" rows="10" className='col-12'></textarea>
                </div>
                <button className='col-12 btn-success'>
                    submit
                </button>
                </div>
                <div className="col-md-4">
                    <SideBar/>
                </div>
            </div>

        </div>
    );
}
export default Contact;

function Nameofinput(name){
    return(
            <h4 className='col-12'>
                {name}: <span style={{color:'red'}}>*</span>
            </h4>
    )
}
