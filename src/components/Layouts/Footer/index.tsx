import React from "react";
import "./style.css";
import logo from "./Jadoo..png";
import fb from "./facebook.png";
import insta from "./instagram.png";
import twitter from "./twitter.png";
import android from "./android.png";
import iphone from "./iphone.png";

const Footer: React.FC = () => {
    return(
        <React.Fragment>
            <section className="footer">
                <div className="footer__row">
                    <div className="footer__row__column">
                        <img className="footer__row__column__logo" src={logo} alt="Jadoo" />
                        <p className="footer__row__column__slogan">Book your trip in minute, get full
                             Control for much longer.
                        </p>
                    </div>
                    <div className="footer__row__column">
                       <h5 className="footer__row__column__title">Company</h5>                     
                            <p  className="footer__row__column__item">About</p> 
                            <p  className="footer__row__column__item">Career</p> 
                            <p  className="footer__row__column__item">Mobile</p> 
                    </div>
                    <div className="footer__row__column">
                       <h5 className="footer__row__column__title">Contact</h5> 
                            <p  className="footer__row__column__item">Help/FAQ</p> 
                            <p  className="footer__row__column__item">Press</p> 
                            <p  className="footer__row__column__item">Affiliate</p> 
                    </div>
                    <div className="footer__row__column">
                       <h5 className="footer__row__column__title">More</h5> 
                            <p  className="footer__row__column__item">Airlinefees</p> 
                            <p  className="footer__row__column__item">Airlinefees</p> 
                            <p  className="footer__row__column__item">Airlinefees</p> 
                    </div>
                    <div className="footer__row__column">
                        <div className="footer__row__column__social__media__icons">
                            <img className="footer__row__column__social__media__icons__icon" src={fb} alt="facebook"/>
                            <img className="footer__row__column__social__media__icons__icon" src={insta} alt="Instagram"/>
                            <img className="footer__row__column__social__media__icons__icon" src={twitter} alt="twitter"/>
                        </div>
                        <h3 className="footer__row__column__app__title">Discover our app</h3>
                        <div className="footer__row__column__app__icons">
                            <img className="footer__row__column__app__icons__icon" src={android} alt="Android"/>
                            <img className="footer__row__column__app__icons__icon" src={iphone} alt="iPhone"/> 
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p className="footer__copyright__text">All rights reserved@jadoo.co</p>
                </div>
            </section>
        </React.Fragment>
    )
};

export default Footer;