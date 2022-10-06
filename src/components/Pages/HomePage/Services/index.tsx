import React from "react";
import "./style.css";
import weather from "./weather.png";
import flights from "./flights.png";
import events from "./events.png";
import customization from "./customization.png";
import group from "./Group__4.png";

const Services: React.FC = () => {
    return(
      <React.Fragment>
        <section className="services">            
            <div className="services__row">                   
            <img className="services__row__design" src={group} alt="Design" />           
                <h5 className="services__row__tagline">Category</h5>
                <h2 className="services__row__heading">We Offer Best Services</h2> 
                <div className="services__row__points">
                    <div className="services__row__points__point">
                        <img className="services__row__points__point__image" src={weather} alt="Weather"/>
                        <h6 className="services__row__points__point__heading">Calculated Weather</h6>
                        <p className="services__row__points__point__content">Built Wicket longer admire do barton vanity itself do in it.</p>
                        <span className="services__row__points__point__effect"></span>
                    </div>
                    <div className="services__row__points__point">
                        <img className="services__row__points__point__image" src={flights} alt="Best Flights"/>
                        <h6 className="services__row__points__point__heading">Best Flights</h6>
                        <p className="services__row__points__point__content" >Engrossed listening. Park gate sell they west hard for the.</p>
                        <span className="services__row__points__point__effect"></span>
                    </div>
                    <div className="services__row__points__point">
                        <img className="services__row__points__point__image" src={events} alt="Local Events"/>
                        <h6 className="services__row__points__point__heading">Local Events</h6>
                        <p className="services__row__points__point__content">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                        <span className="services__row__points__point__effect"></span>
                    </div>
                    <div className="services__row__points__point">
                        <img className="services__row__points__point__image" src={customization} alt="Customization"/>
                        <h6 className="services__row__points__point__heading">Customization</h6>
                        <p className="services__row__points__point__content">We deliver outsourced
                            aviation services for
                            military customers</p>
                        <span className="services__row__points__point__effect"></span>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    )
};

export default Services;