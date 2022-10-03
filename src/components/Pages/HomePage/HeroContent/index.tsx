import React from "react";
import "./style.css";
import banner from "./Image.png";
import decor from "./Decore.png";
import decor__underscore from "./Decore__underscore.png";
import play from "./Play.png";


const HeroContent: React.FC = () => {
    return(
        <React.Fragment>
            <section className="herocontent"> 
                <div className="herocontent__row">
                    <div className="herocontent__row__decore">
                        <img className="herocontent__row__background__decore" src={decor} alt="background"/>   
                    </div>
                    <div className="herocontent__row__background">                       
                        <img className="herocontent__row__background__traveller" src={banner} alt="Traveller"/>                                             
                    </div>
                    <div className="herocontent__row__content">
                        <h5 className="herocontent__row__content__tagline">Best Destinations around the world</h5>
                        <h1 className="herocontent__row__content__heading">Travel, enjoy <span className="herocontent__row__content__heading__image"><img src= {decor__underscore} alt="underline"/></span>
                            and live a new
                            and full life</h1>
                        <p className="herocontent__row__content__desc">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                        <div className="herocontent__row__content__buttons">
                            <button className="herocontent__row__content__buttons__findout">Find out more</button>                         
                                <img className="herocontent__row__content__buttons__play" src={play} alt="Play button"/>
                                <p className="herocontent__row__content__buttons__text">Play Demo</p>                                                 
                        </div>                        
                    </div>                    
                </div>
            </section>
        </React.Fragment>
    )
};

export default HeroContent;