import React from "react";
import "./style.css";
import HeroContent from "./HeroContent";
import Services from "./Services";
import Destinations from "./Destinations";
import TopNav from "../../Layouts/TopNav";

const HomePage: React.FC = () => {
    return(
        <div className="container">
            <TopNav />
            <HeroContent />
            <Services />
            <Destinations />
        </div>
    )
};

export default HomePage;