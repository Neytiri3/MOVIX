import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">AgroConnect</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Tatoy, Lorrie Marisse Palicte | Bachelor of Science in Information Technology
                    specialized in Mobile and Web Application | 3rd year student | BSIT - MWA | National University - Manila | 
                    Advanced Web Programming | 
                </div>
                <div className="socialIcons">
                    <span className="icon" href="https://www.facebook.com/marisse.lt">
                        <FaFacebookF />
                    </span>
                    <span className="icon" href="https://www.instagram.com/lorrieemarissee/">
                        <FaInstagram />
                    </span>
                    <span className="icon" href="https://github.com/Neytiri3">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="infoText">
                    Copyright © All Rights Reserved.
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
