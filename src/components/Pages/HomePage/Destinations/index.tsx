import React from "react";
import "./style.css";
import Decore from "./Decore.png";
import Rome from "./Rome.png";
import London from "./London.jpg";
import Europe from "./Europe.png";
import Navigation from "./Navigation.png";

const Destinations: React.FC = () => {
    return(
       <React.Fragment>
            <section className="destinations">
            <div className="destinations__row">
          <img className="destinations__row__design" src={Decore} alt="Decore" />                
                <h5 className="destinations__row__tagline">Top selling</h5>
                <h2 className="destinations__row__heading">Top Destinations</h2>
                <div className="destinations__row__places">
                    <div className="destinations__row__places__point">
                        <img className="destinations__row__places__point__image" src={Rome} alt="Rome"/>
                        <div className="destinations__row__places__point__content">
                            <p className="destinations__row__places__point__content__name">
                                Rome, Italy <span className="destinations__row__places__point__content__name__amount">$5,42K</span>
                            </p>
                            <p className="destinations__row__places__point__content__trip">
                                <img className="destinations__row__places__point__content__trip__image" src={Navigation} alt=""/>
                                <span className="destinations__row__places__point__content__trip__days">10 days trip</span>
                            </p>
                        </div>                         
                    </div>
                    <div className="destinations__row__places__point">
                        <img className="destinations__row__places__point__image" src={London} alt="London"/>
                        <div className="destinations__row__places__point__content">
                            <p className="destinations__row__places__point__content__name">
                                London, UK <span className="destinations__row__places__point__content__name__amount">$4.2K</span>
                            </p>
                            <p className="destinations__row__places__point__content__trip">
                                <img className="destinations__row__places__point__content__trip__image" src={Navigation} alt=""/>
                                <span className="destinations__row__places__point__content__trip__days">12 days trip</span>
                            </p>
                        </div>                         
                    </div>
                    <div className="destinations__row__places__point">
                        <img className="destinations__row__places__point__image" src={Europe} alt="Europe"/>
                        <div className="destinations__row__places__point__content">
                            <p className="destinations__row__places__point__content__name">
                                Full Europe <span className="destinations__row__places__point__content__name__amount">$15K</span>
                            </p>
                            <p className="destinations__row__places__point__content__trip">
                                <img className="destinations__row__places__point__content__trip__image" src={Navigation} alt=""/>
                                <span className="destinations__row__places__point__content__trip__days">28 days trip</span>
                            </p>
                        </div>                         
                    </div>                    
                </div>
            </div>
        </section>
       </React.Fragment>
    )
};

export default Destinations;