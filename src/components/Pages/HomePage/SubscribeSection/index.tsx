import React from "react";
import "./style.css";

const SubscribeSection: React.FC = () => {
    return(
        <React.Fragment>
            <section className="subscribesection">
                <div className="subscribesection__row">
                    <h2 className="subscribesection__row__title">Subscribe to get information, latest news and other
interesting offers about Cobham</h2>
                    <div className="subscribesection__row__box">
                        <input type="text" value="" placeholder="Your Email"/>
                        <button type="submit">
                                Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default SubscribeSection;