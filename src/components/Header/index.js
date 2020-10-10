import React from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import MyLogo from 'src/assets/Images/Final.svg';

const Header = () => {
    return (
        <div className="header-horizontal">
            <div className="menu-button">
                <div className="menu-bar">
                    <Hamburger
                        rounded
                        label="MENU"
                        size="20"
                    />
                    <span>MENU</span>                  
                </div>
            </div>
            <div className="my-logo">
                <img src={MyLogo} alt="my-logo"/>
            </div>
            <div className="title">
                <h1>Victor Greiveldinger</h1>
            </div>
            <div className="contact-logo">
                <a>Ancre pour contact</a>
            </div>
        </div>
    );
};

export default Header;