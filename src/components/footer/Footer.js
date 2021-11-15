import React from 'react';
import './footer.scss'

export default function Footer() {
    return (
        <div className="footerBody">
            <footer className="footer">
            <div className="footer__row footer__row--1">
                <div className="footer__col footer__col--1">
                    <h3 className="heading-3">Explore</h3>
                        <ul className="footer__list">
                            <li className="footer__items">New uplodes</li>
                            <li className="footer__items">popular desings</li>
                            <li className="footer__items">contribution</li>
                        </ul>
                </div>
        
            <div className="footer__col footer__col--2">
                <h3 className="heading-3">site</h3>
                <ul className="footer__list">
                    <li className="footer__items">license</li>
                    <li className="footer__items">articles</li>
                    <li className="footer__items">about</li>
                    <li className="footer__items">support</li>
                    <li className="footer__items">sponsers</li>
                </ul>
            </div>

            <div className="footer__col footer__col--3">
                <h3 className="heading-3">Other products</h3>
                <ul className="footer__list">
                    <li className="footer__items">Boardme</li>
                </ul>
            </div>

            <div className="footer__col footer__col--4">
                <h4 className="heading">13462</h4>
                <ul className="footer__list">
                    <li className="footer__items">Desing files uploaded</li>
                </ul>
                <div className="footer__social">
                    <h2 className="heading">Follow us</h2>
                    <ion-icon name="logo-instagram" className="footer__icon"></ion-icon>
                    <ion-icon name="logo-twitter" className="footer__icon"></ion-icon>
                </div>
            </div>

        </div>
                <div className="footer__row footer__row--2">
                    <p className="footer__legal">Legal</p>
                    <p className="footer__copyright">
                        &copy; 2022 Created by Muhammad Ali
                    </p>
                </div>
            </footer>
        </div>
    )
}
