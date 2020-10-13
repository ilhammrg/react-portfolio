import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColors } from '../../redux/themes/themes.selectors';

import { 
  BackToTopContainer, 
  TopLink, 
  ArrowIcon, 
  Text 
} from './back-to-top.styles';

const BackToTop = ({ colors }) => {
  const { font1 } = colors;
  return (
    <BackToTopContainer>
      <TopLink color={font1} href='#'>
        <ArrowIcon className='material-icons'>arrow_circle_up</ArrowIcon>
        <Text>Back to top</Text>
      </TopLink>
    </BackToTopContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  colors: selectColors,
});

export default connect(mapStateToProps)(BackToTop);