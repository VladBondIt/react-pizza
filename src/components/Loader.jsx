import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader
        speed={1}
        width={280}
        height={455}
        viewBox="0 0 280 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="125" cy="125" r="125" />
        <rect x="0" y="260" rx="6" ry="6" width="280" height="20" />
        <rect x="0" y="305" rx="6" ry="6" width="280" height="85" />
        <rect x="0" y="400" rx="6" ry="6" width="75" height="44" />
        <rect x="128" y="400" rx="30" ry="30" width="151" height="44" />
    </ContentLoader>
)

export default MyLoader;