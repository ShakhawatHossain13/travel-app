import React from "react";
import "./style.css";
import weather from "./weather.png";
import flights from "./flights.png";
import events from "./events.png";
import customization from "./customization.png";
import group from "./Group__4.png";
import ServiceCard from "../Elements/ServiceCard";

const Services: React.FC = () => {
    return(
      <React.Fragment>
        <section className="services">            
            <div className="services__row">                   
            <img className="services__row__design" src={group} alt="Design" />           
                <h5 className="services__row__tagline">Category</h5>
                <h2 className="services__row__heading">We Offer Best Services</h2> 
                <div className="services__row__points">
                    <ServiceCard 
                        image={weather} 
                        caption="Calculated Weather"
                        description="Built Wicket longer admire do barton vanity itself do in it."                    
                    />                    
                    <ServiceCard 
                        image={flights} 
                        caption="Best Flights"
                        description="Engrossed listening. Park gate sell they west hard for the."                    
                    />
                    <ServiceCard 
                        image={events} 
                        caption="Local Events"
                        description="Barton vanity itself do in it. Preferd to men it engrossed listening."                    
                    />
                    <ServiceCard 
                        image={customization} 
                        caption="Customization"
                        description="We deliver outsourced
                        aviation services for
                        military customers."                    
                    />                
                </div>
            </div>
        </section>
      </React.Fragment>
    )
};

export default Services;