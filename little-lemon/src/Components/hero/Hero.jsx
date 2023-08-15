import React from "react";
import {NavLink} from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return(
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                         We are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <NavLink to = "/reservations">
                        <button className="btn">Reserve a table</button>
                    </NavLink>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <img src="{HeroImage}" alt="Serving Dish" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;