import React from "react";
import "./style.css";
import HeroContent from "./HeroContent";
import Services from "./Services";
import Destinations from "./Destinations";
import SubscribeSection from "./SubscribeSection";
import BookATrip from "./BookATrip";
import TestimonialsSection from "./TestimonialsSection";
import Logos from "./Logos";
import TopNav from "../../Layouts/TopNav";
import Footer from "../../Layouts/Footer";

const HomePage: React.FC = () => {
    return(
        <div className="container">
            <TopNav />
            <HeroContent />
            <Services />
            <Destinations />
            <BookATrip />
            <TestimonialsSection />
            <Logos />

            <SubscribeSection />
          
            <Footer />
        </div>
    )
};

export default HomePage;