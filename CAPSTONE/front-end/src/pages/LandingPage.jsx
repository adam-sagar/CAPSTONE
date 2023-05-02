import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (

        <div className="LandingPage">
            <div className="welcome-text">
                <span className="welcome-header">Welcome to Disc Detective</span>
                <p>An online platform for lost disc golf discs.
                Whether you've lost your favorite disc or found one without an owner, 
                Disc Detective connects you with fellow players looking to recover a
                disc or reunite one with its owner. Search by course, hole, or type, 
                and get back on the course in no time.</p>
                <Link to="/login" className="link">Login</Link> or{" "}
                <Link to="/signup" className="link">Sign up</Link> to begin your search.
            </div>
        </div>
    );
}

export default LandingPage;