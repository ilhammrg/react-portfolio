import React from 'react';

import { 
  FooterContainer, 
  Copyright, 
  LinksContainer, 
  Links, 
  Github, 
  Linkedin, 
  Twitter 
} from './footer.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColors } from '../../redux/themes/themes.selectors';

const Footer = ({ colors }) => {
  const { font1, font3 } = colors;
  return (
    <FooterContainer>
      <Copyright font={font3}>Ilham Gunawan &copy; 2020</Copyright>
      <LinksContainer>
        <Links href='https://github.com/ilhammrg' target='_blank' rel='noreferrer' colorFont3={font3} colorFont1={font1}>
          <Github title='GitHub' />
        </Links>
        <Links href='https://linkedin.com/in/ilham-gunawan' target='_blank' rel='noreferrer' colorFont3={font3} colorFont1={font1}>
          <Linkedin title='Linkedin' />
        </Links>
        <Links href='https://twitter.com/ilmuhammadrg' target='_blank' rel='noreferrer' colorFont3={font3} colorFont1={font1}>
          <Twitter title='Twitter' />
        </Links>
      </LinksContainer>
    </FooterContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  colors: selectColors,
});

export default connect(mapStateToProps)(Footer);
