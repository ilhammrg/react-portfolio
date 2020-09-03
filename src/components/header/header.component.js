import React from 'react';

import { HeaderContainer, LogoContainer, MenuContainer, MenuItem, MenuButton } from './header.styles';
import NavMenu from '../nav-menu/nav-menu.component';
import { Link } from 'react-router-dom';

import { openNavMenu } from '../../redux/menu/menu.actions';
import { connect } from 'react-redux';
import { selectNavPosition } from '../../redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ _openNavMenu, _navPosition }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to='/' className='brand-name'>
                    <h1>Ilham Muhammad</h1>
                </Link>
            </LogoContainer>
            <MenuContainer>
                <MenuItem>
                    <MenuButton iconcolor="#f9d276" hovercolor='#f9d276'>
                        <span className="material-icons">brightness_high</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton onClick={() => _openNavMenu('translate(0,0)')} iconcolor="white" hovercolor='#4ecca3'>
                        <span className="material-icons">menu</span>
                    </MenuButton>
                </MenuItem>
            </MenuContainer>
            <NavMenu style={{transform: `${_navPosition}`}} />
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    _navPosition: selectNavPosition
});

const mapDispatchToProps = dispatch => {
    return {
        _openNavMenu: (navPosition) => dispatch(openNavMenu(navPosition))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);