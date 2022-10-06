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
              {/* <img className="subscribesection__design" src={decore} alt="Design" />     */}
                <div className="subscribesection__row">             
                    <img  className="subscribesection__row__send" src={send} alt="Send"/>
                    <img  className="subscribesection__row__decore--left" src={decore__left} alt="Decoration"/>
                    <img  className="subscribesection__row__decore--right" src={decore__right} alt="Decoration"/> 
                    <h2 className="subscribesection__row__title">Subscribe to get information, latest news and other
interesting offers about Cobham</h2>
                    <div className="subscribesection__row__box">
                        <input className="subscribesection__row__box__input" name="" type="email" value="" placeholder="Your Email"/>     
                        <img className="subscribesection__row__box__image" src={email} alt="Email icon"/>                   
                        <button className="subscribesection__row__box__button" type="submit">
                            Subscribe
                        </button>                        
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
};

export default SubscribeSection;