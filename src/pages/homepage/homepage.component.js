import React from 'react';

import { HomepageContainer, HomepageContent, HomepageContentLastLine } from './homepage.styles';


const Homepage = () => {
    return (
        <HomepageContainer>
            <HomepageContent>A software engineer</HomepageContent>
            <HomepageContent>A front-end developer</HomepageContent>
            <HomepageContentLastLine>And sometimes plays guitar :)</HomepageContentLastLine>
        </HomepageContainer>
    );
};

export default Homepage;