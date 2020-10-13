import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { turnLightThemes, turnDarkThemes } from '../../redux/themes/themes.actions';
import { selectIsCurrentThemesDark } from '../../redux/themes/themes.selectors';

import { HeaderContainer, MenuButton, BrandLink } from './header.styles';

const Header = ({ isCurrentThemesDark, turnLightThemesOn, turnDarkThemesOn }) => {
  return (
    <HeaderContainer>
      <BrandLink to='/'>Ilham Gunawan</BrandLink>
      {
        isCurrentThemesDark ?
          <MenuButton onClick={turnLightThemesOn}>
            <span className="material-icons" title='Toggle Themes'>brightness_high</span>
          </MenuButton>
        :
          <MenuButton onClick={turnDarkThemesOn}>
            <span className="material-icons" title='Toggle Themes'>brightness_3</span>
          </MenuButton>
      }
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isCurrentThemesDark: selectIsCurrentThemesDark,
});

const mapDispatchToProps = dispatch => {
  return {
    turnLightThemesOn: () => dispatch(turnLightThemes()),
    turnDarkThemesOn: () => dispatch(turnDarkThemes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
