import React from "react";
import "./style.css";
import logo from "./Logo.png";

const TopNav: React.FC = () => {
    return(
      <section className="navbar">
        <div className="navbar__row">
            <img className="navbar__row__logo" src={logo} alt="Jadoo Logo"/>   
            <nav className="navbar__row__navigation">
                <ul className="navbar__row__navigation__list">
                    <li className="navbar__row__navigation__list__link">Destinations</li>
                    <li className="navbar__row__navigation__list__link">Hotels</li>
                    <li className="navbar__row__navigation__list__link">Flights</li>
                    <li className="navbar__row__navigation__list__link">Bookings</li>
                    <li className="navbar__row__navigation__list__link">Login</li>
                    <li className="navbar__row__navigation__list__link"><span className="navbar__row__navigation__list__link__signup">Sign up</span></li>
                    <li className="navbar__row__navigation__list__link">EN</li>                    
                </ul>
            </nav>             
        </div>
      </section>
    )
};

export default TopNav;