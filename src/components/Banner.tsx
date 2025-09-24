import React from "react";

const Banner: React.FC<{bannerMessage: string}> = ({bannerMessage}) => {
    return (
        <div>
            {bannerMessage}
        </div>
    )
}

export default Banner;