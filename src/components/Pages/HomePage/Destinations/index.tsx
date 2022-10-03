import React from "react";
import "./style.css";
import Rome from "./Rome.png";
import London from "./London.jpg";
import Europe from "./Europe.png";

const Destinations: React.FC = () => {
    return(
       <React.Fragment>
            <section className="destinations">
            <div className="destinations__row">
          {/* <img className="destinations__row__design" src="" alt="Design" />                 */}
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
                                <img className="destinations__row__places__point__content__trip__image" src="" alt=""/>
                                <span className="destinations__row__places__point__content__trip__days">10 days trip</span>
                            </p>
                        </div>
                         
                    </div>
                    <div className="destinations__row__places__point">
                        <img className="destinations__row__places__point__image" src={Rome} alt="London"/>
                         
                    </div>
                    <div className="destinations__row__places__point">
                        <img className="destinations__row__places__point__image" src={Rome} alt="Europe"/>
                       
                    </div>
                    
                </div>
            </div>
        </section>
       </React.Fragment>
    )
};

export default Destinations;