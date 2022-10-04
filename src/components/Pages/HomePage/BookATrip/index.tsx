import React from "react";
import "./style.css";
import destination from "./destination.png";
import payment from "./payment.png";
import reach from "./reach.png";
import trip from "./trip.jpg";
import leaf from "./leaf.png";
import map from "./map.png";
import send from "./send.png";
import building from "./building.png";
import heart from "./heart_6_1.png";
import triptorome from "./triptorome.png";


const BookATrip: React.FC = () => {
    return(
        <React.Fragment>
            <section className="bookatrip">
                <div className="bookatrip__row">
                    <div className="bookatrip__row__half">
                        <h5 className="bookatrip__row__half__tagline">Easy and Fast</h5>
                        <h2 className="bookatrip__row__half__heading">Book your next trip 
                                in 3 easy steps</h2>
                        <div className="bookatrip__row__half__point">
                            <img className="bookatrip__row__half__point__image" src={destination} alt="Choose destination"/>
                            <div className="bookatrip__row__half__point__details">
                                <h6 className="bookatrip__row__half__point__details__heading" >Choose Destination</h6>
                                <p className="bookatrip__row__half__point__details__desc">
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Urna, tortor tempus. 
                                </p>
                            </div>
                        </div>
                        <div className="bookatrip__row__half__point">
                            <img className="bookatrip__row__half__point__image" src={payment} alt="Choose destination"/>
                            <div className="bookatrip__row__half__point__details">
                                <h6 className="bookatrip__row__half__point__details__heading">Make Payment</h6>
                                <p className="bookatrip__row__half__point__details__desc">
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Urna, tortor tempus. 
                                </p>
                            </div>    
                        </div>
                        <div className="bookatrip__row__half__point">
                            <img className="bookatrip__row__half__point__image" src={reach} alt="Choose destination"/>
                            <div className="bookatrip__row__half__point__details">
                                <h6 className="bookatrip__row__half__point__details__heading" >
                                Reach airport on seleted date</h6>
                                <p className="bookatrip__row__half__point__details__desc">
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Urna, tortor tempus. 
                                </p>
                            </div>
                        </div>                        
                    </div>
                    <div className="bookatrip__row__half">
                        <div className="bookatrip__row__half__eclipse"></div>
                        <div className="bookatrip__row__half__card">
                            <img className="bookatrip__row__half__card__image" src={trip} alt="Trip to Greece"/> 
                            <h5 className="bookatrip__row__half__card__caption">Trip to Greece</h5>
                            <p className="bookatrip__row__half__card__details">
                                <span className="bookatrip__row__half__card__details__date">14-29 June</span>|
                                <span className="bookatrip__row__half__card__details__user">by Robbin john</span>
                            </p>
                            <div className="bookatrip__row__half__card__buttons">
                                <img className="bookatrip__row__half__card__buttons__icon" src={leaf} alt="Leaf"/>
                                <img className="bookatrip__row__half__card__buttons__icon" src={map} alt="Map"/>
                                <img className="bookatrip__row__half__card__buttons__icon" src={send} alt="Send"/>
                            </div>
                            <div className="bookatrip__row__half__card__footer">
                                 <img className="bookatrip__row__half__card__footer__image" src={building} alt="People"/>
                                 <p className="bookatrip__row__half__card__footer__response">24 people going</p>
                                 <img src={heart} alt="Like" className="bookatrip__row__half__card__footer__reaction" />
                            </div>
                        </div>   
                        <div className="bookatrip__row__half__modal">
                            <img className="bookatrip__row__half__modal__image" src={triptorome} alt="Trip to Rome"  />
                            <div className="bookatrip__row__half__modal__details">
                                <p className="bookatrip__row__half__modal__details__tagline">Ongoing</p>
                                <h5 className="bookatrip__row__half__modal__details__caption">Trip to Rome</h5>
                                <p className="bookatrip__row__half__modal__details__progress">
                                    <span className="bookatrip__row__half__modal__details__progress__percentage">40%</span>completed
                                </p>
                                <div className="bookatrip__row__half__modal__details__progressbar">
                                    <span className="bookatrip__row__half__modal__details__progressbar__progress"></span>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default BookATrip;