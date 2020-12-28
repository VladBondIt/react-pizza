import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader
        speed={1}
        width={300}
        height={600}
        viewBox="0 0 400 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="140" r="140" />
        <rect x="0" y="310" rx="3" ry="3" width="280" height="30" />
        <rect x="0" y="355" rx="6" ry="6" width="280" height="85" />
        <rect x="0" y="450" rx="3" ry="3" width="75" height="44" />
        <rect x="128" y="450" rx="30" ry="30" width="151" height="44" />
    </ContentLoader>
)

export default MyLoader;