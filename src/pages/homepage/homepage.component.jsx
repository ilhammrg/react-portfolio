import React from 'react';

import { HomepageContainer } from './homepage.styles';
import Bio from '../../components/bio/bio.component.jsx';
import Projects from '../../components/projects/projects.component';
import BackToTop from '../../components/back-top-top/back-to-top.component';

const Homepage = () => {
  return (
    <HomepageContainer>
      <Bio />
      <Projects />
      <BackToTop />
    </HomepageContainer>
  );
};

export default Homepage;
