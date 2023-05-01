import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (

        <div className="LandingPage">
            <div className="welcome-text">
                <div>
                    <Link to="/login" className="link">Login</Link> or{" "}
                    <Link to="/signup" className="link">Sign up</Link> here
                </div>
            </div>
        </div>
    );
}

export default LandingPage;