import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import { Spin as Hamburger } from 'hamburger-react';
import HeaderLeft from 'src/components/HeaderLeft';

import GithubBlack from 'src/assets/Images/iconmonstr-github-4.svg';
import EmailBlack from 'src/assets/Images/iconmonstr-email-1.svg';
import LinkedinBlack from 'src/assets/Images/iconmonstr-linkedin-4.svg';
import PhoneBlack from 'src/assets/Images/iconmonstr-phone-1.svg';
import MyLogo from 'src/assets/Images/Final.svg';


const Header = ({handleChange, value}) => {
    console.log(value);
    return (
        <div className="header-horizontal">
            <div className="menu-button">
                <div className="menu-bar">
                    <Hamburger
                        rounded
                        label="MENU"
                        size="16"
                        handleChange={handleChange}
                        value={value}
                    />
                </div>
                <div className="menu">
                    <span role='button'>MENU</span>                  
                </div>
            </div>
            <div id="centered-elements">
                <div className="my-logo">
                    <img 
                        src={MyLogo}
                        alt="my-logo"
                    />
                </div>
                <div className="title">
                    <h1>Victor Greiveldinger</h1>
                </div>
            </div>
            <div className="contact-logo">
                <ul id="logo-list">
                    <li className="logo">
                        <a href="https://github.com/VictorGreiveldingerHub">
                            <Image
                                alt="Logo Github Dark"
                                src={GithubBlack}
                            />
                        </a>
                    </li>
                    <li className="logo">
                        <a href="blank">
                            <Image
                                alt="Logo Email Dark"
                                src={EmailBlack}
                            />
                        </a>
                    </li>
                    <li className="logo">
                        <a href='https://www.linkedin.com/in/victor-greiveldinger-0b21471a7/'>
                            <Image
                                alt="Logo Linkedin Dark"
                                src={LinkedinBlack}
                            />
                        </a>
                    </li>
                    <li className="logo">
                        <a href="blank">
                            <Image
                                alt="Logo Phone Dark"
                                src={PhoneBlack}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

Header.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
}

export default Header;