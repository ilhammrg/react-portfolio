import React from 'react';

import { HomepageContainer, HomepageContent, HomepageContentLastLine } from './homepage.styles';


const Homepage = () => {
    return (
        <HomepageContainer>
            <HomepageContent>A software engineer,</HomepageContent>
            <HomepageContent>front-end developer,</HomepageContent>
            <HomepageContentLastLine>and sometimes plays guitar :)</HomepageContentLastLine>
        </HomepageContainer>
    );
};

export default Homepage;