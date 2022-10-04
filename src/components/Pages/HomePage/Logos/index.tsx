import React from "react";
import "./style.css";
import axon from "./axon.png";
import jetstar from "./jetstar.png";
import expedia from "./expedia.png";
import qantas from "./qantas.png";
import alitalia from "./alitalia.png";

const Logos: React.FC = () => {
    return(
       <React.Fragment>
        <section className="logos">
            <div className="logos__row">
                <div className="logos__row__box">
                    <img className="logos__row__box__logo" src={axon} alt="Axon"/>
                </div>
                <div className="logos__row__box">
                    <img className="logos__row__box__logo" src={jetstar} alt="Jetstar"/>
                </div>
                <div className="logos__row__box"> 
                    <img className="logos__row__box__logo" src={expedia} alt="Expedia"/>
                </div>
                <div className="logos__row__box"> 
                    <img className="logos__row__box__logo" src={qantas} alt="Qantas"/>
                </div>
                <div className="logos__row__box">
                     <img className="logos__row__box__logo" src={alitalia} alt="Alitalia"/>
                </div>
            </div>
        </section>
       </React.Fragment>
    )
};

export default Logos;