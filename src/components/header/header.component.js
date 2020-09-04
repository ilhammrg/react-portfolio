import React from 'react';

import { HeaderContainer, LogoContainer, MenuContainer, MenuItem, MenuButton } from './header.styles';
import NavMenu from '../nav-menu/nav-menu.component';
import { Link } from 'react-router-dom';

import { openNavMenu } from '../../redux/menu/menu.actions';
import { switchDarkMode, switchLightMode } from '../../redux/app/app.actions';
import { connect } from 'react-redux';
import { selectNavPosition } from '../../redux/menu/menu.selectors';
import { selectIsDarkModeActive } from '../../redux/app/app.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ _openNavMenu, _navPosition, _isDarkModeActive, _switchDarkMode, _switchLightMode }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to='/' className='brand-name'>
                    <h1>Ilham Muhammad</h1>
                </Link>
            </LogoContainer>
            <MenuContainer>
                <MenuItem>
                    <MenuButton 
                        onClick={() => {
                            if(_isDarkModeActive) _switchLightMode();
                            else _switchDarkMode();
                        } } 
                        iconcolor="#f9d276" 
                        hovercolor='#f9d276'
                    >
                        <span className="material-icons">{_isDarkModeActive ? 'brightness_3' : 'brightness_7'}</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton onClick={() => _openNavMenu('translate(0,0)')} iconcolor="inherit" hovercolor='#4ecca3'>
                        <span className="material-icons">menu</span>
                    </MenuButton>
                </MenuItem>
            </MenuContainer>
            <NavMenu style={{transform: `${_navPosition}`}} />
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    _navPosition: selectNavPosition,
    _isDarkModeActive: selectIsDarkModeActive
});

const mapDispatchToProps = dispatch => {
    return {
        _openNavMenu: (navPosition) => dispatch(openNavMenu(navPosition)),
        _switchDarkMode: () => dispatch(switchDarkMode()),
        _switchLightMode: () => dispatch(switchLightMode())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);