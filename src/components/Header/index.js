import React from 'react';
import { Image } from 'semantic-ui-react';
import { Spin as Hamburger } from 'hamburger-react';

import GithubBlack from 'src/assets/Images/iconmonstr-github-4.svg';
import EmailBlack from 'src/assets/Images/iconmonstr-email-1.svg';
import LinkedinBlack from 'src/assets/Images/iconmonstr-linkedin-4.svg';
import PhoneBlack from 'src/assets/Images/iconmonstr-phone-1.svg';


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
                </div>
                <div className="menu">
                    <span role='button'>MENU</span>                  
                </div>
            </div>
            <div className="my-logo">
                <img src={MyLogo} alt="my-logo"/>
            </div>
            <div className="title">
                <h1>Victor Greiveldinger</h1>
            </div>
            <div className="contact-logo">
                <ul id="logo-list">
                    <li className="logo">
                        <a href="https://github.com/VictorGreiveldingerHub">
                            <Image src={GithubBlack}/>
                        </a>
                    </li>
                    <li className="logo">
                        <a href="blank">
                            <Image src={EmailBlack}/>
                        </a>
                    </li>
                    <li className="logo">
                        <a href='https://www.linkedin.com/in/victor-greiveldinger-0b21471a7/'>
                            <Image src={LinkedinBlack}/>
                        </a>
                    </li>
                    <li className="logo">
                        <a href="blank">
                            <Image src={PhoneBlack}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;