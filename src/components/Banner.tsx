import React from "react";
import '../styles/Banner.css';

const Banner: React.FC<{bannerMessage: string}> = ({bannerMessage}) => {
    return (
        <div className="banner-container">
            {bannerMessage}
        </div>
    );
}

export default Banner;