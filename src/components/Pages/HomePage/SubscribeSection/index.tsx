import React from "react";
import "./style.css";
import email from "./email.png";
import send from "./send__icon.png";
import decore__left from "./decore__left.png";
import decore__right from "./decore__right.png";
import decore from "./decore.png";

const SubscribeSection: React.FC = () => {
    return(
        <React.Fragment>
            <section className="subscribesection">             
                <div className="subscribesection__row">             
                    <img  className="subscribesection__row__send" src={send} alt="Send"/>
                    <img  className="subscribesection__row__decore--left" src={decore__left} alt="Decoration"/>
                    <img  className="subscribesection__row__decore--right" src={decore__right} alt="Decoration"/> 
                    <h2 className="subscribesection__row__title">Subscribe to get information, latest news and other
interesting offers about Cobham</h2>
                    <div className="subscribesection__row__box">
                        <input className="subscribesection__row__box__input" name="" type="email"   placeholder="Your Email"/>     
                        <img className="subscribesection__row__box__image" src={email} alt="Email icon"/>     

                        {/* <svg className="subscribesection__row__box__image"  xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                            <path d="M4.00024 6L9.40024 10.05C9.7558 10.3167 10.2447 10.3167 10.6002 10.05L16.0002 6" stroke="red" stroke-linecap="round"/>
                            <rect x="0.500244" y="0.5" width="20" height="17" rx="4.5" stroke="red"/>
                        </svg>               */}
                        <button className="subscribesection__row__box__button" type="submit">
                            Subscribe
                        </button>                        
                    </div>                    
                </div>
                <img className="subscribesection__design" src={decore} alt="Design" />    
            </section>
        </React.Fragment>
    )
};

export default SubscribeSection;