import React from 'react';
import MyLogo from 'src/assets/Images/Final.svg';

const Header = ({ contacts }) => {
    const contactsJSX = contacts.map((contact) => {
        return (
        <p>{contact.mail}</p>
        );
    });

    return (
        <div className="header-horizontal">
            <div className="menu-button">
                <div className="menu-bar">
                    <div className="all-bar">
                        <div className="bar1">--</div>
                        <div className="bar">-</div>
                        <div className="bar">-</div>
                    </div>
                    <button>
                        <span className="menu-menu">MENU</span>
                    </button>
                </div>
            </div>
            <div className="my-logo">
                <img src={MyLogo} alt="my-logo"/>
            </div>
            <div className="title">
                <h1>Victor Greiveldinger</h1>
            </div>
            <div className="contact-logo">
                    {contactsJSX}
            </div>
        </div>
    );
};

export default Header;