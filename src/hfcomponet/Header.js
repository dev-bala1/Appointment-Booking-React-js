import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                <ul className='ul'>
                    <li className='li'><a className='a' class="active" href="#home">Home</a></li>
                    <li className='li'><a className='a'href="Appointment Booking">Appointment Booking</a></li>
                    <li className='li'><a className='a' href="#contact">Doctor Login</a></li>
                    <li className='li'><a  className='a' href="#about">About</a></li>
                    <div className='sigup'>
                    <li className='li'><a  className='a' href="Login">Login</a></li>
                    </div>
                    
               </ul>
                </div>
            </div>
        );
    }
}

export default Header;