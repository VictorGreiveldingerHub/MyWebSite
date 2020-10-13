import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import GithubBlack from 'src/assets/Images/iconmonstr-github-4.svg';
import EmailBlack from 'src/assets/Images/iconmonstr-email-1.svg';
import LinkedinBlack from 'src/assets/Images/iconmonstr-linkedin-4.svg';
import MyLogo from 'src/assets/Images/Final.svg';


const Header = () => {
    return (
        <div className="header-horizontal">
            <div id="menu-button">
                    <Link to="/">Acceuil</Link>
                    <Link to="/profil">Profil / CV</Link>
                    <Link to="/travaux">Travaux</Link>
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
                        <a 
                            href="https://github.com/VictorGreiveldingerHub"
                            target="_blank"
                        >
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
                        <a
                            href='https://www.linkedin.com/in/victor-greiveldinger-0b21471a7/'
                            target="_blank"
                        >
                            <Image
                                alt="Logo Linkedin Dark"
                                src={LinkedinBlack}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;