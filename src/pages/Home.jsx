import React from "react";
import Navbar from "./header/Navbar"; // Import Navbar from the header folder
import "../styles/Home.css"; // Import CSS for Home page
import RecoverySection from "./header/RecoverySection";
import JourneySection from "./header/JourneySection";
import SuccessStories from "./Swiper/Swiper";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar /> {/* Using Navbar component */}
            <RecoverySection />
            <JourneySection />
            <SuccessStories />
            <Footer />
        </div>
    );
};

export default Home;
