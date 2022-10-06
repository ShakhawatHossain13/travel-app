import React from "react";
import "./style.css";
import person from "./person.png";

const TestimonialsSection: React.FC = () => {
    return(
       <React.Fragment>
            <section className="testimonialsection">
                <div className="testimonialsection__row">                    
                <div className="testimonialsection__row__half">
                        <h5 className="testimonialsection__row__half__tagline">TESTIMONIALS</h5>
                        <h2 className="testimonialsection__row__half__heading">What people say
                            about Us.</h2>                                                    
                    </div>
                    <div className="testimonialsection__row__half">                       
                        <div className="testimonialsection__row__half__carousel">
                         <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>    
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>  
                            <div className="testimonialsection__row__half__carousel__item">
                                <img className="testimonialsection__row__half__carousel__item__picture" src={person}  alt=""/>
                                <p className="testimonialsection__row__half__carousel__item__details">
                                     “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                                </p>
                                <h5 className="testimonialsection__row__half__carousel__item__name">Mike Taylor</h5>
                                <p className="testimonialsection__row__half__carousel__item__location">Lahore, Pakistan</p>
                            </div>                                                  
                        </div>                            
                    </div>
                </div>
            </section>
       </React.Fragment>
    )
};

export default TestimonialsSection;