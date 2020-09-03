import React from 'react';

import { MenuContainer, NavLink } from './nav-menu.styles';

import { connect } from 'react-redux';
import { closeNavMenu } from '../../redux/menu/menu.actions';

const NavMenu = ({ _closeNavMenu, ...otherProps }) => {
    return (
        <MenuContainer {...otherProps}>
            <NavLink 
                to='/' 
                onClick={() => _closeNavMenu('translate(0,-100vh)')}
            >
                Home
            </NavLink>
            <NavLink 
                to='projects'
                onClick={() => _closeNavMenu('translate(0,-100vh)')}
            >
                Projects
            </NavLink>
            <NavLink 
                to='/contact'
                onClick={() => _closeNavMenu('translate(0,-100vh)')}
            >
                Contact
            </NavLink>
            <NavLink 
                to='/posts'
                onClick={() => _closeNavMenu('translate(0,-100vh)')}
            >
                Posts
            </NavLink>
            <button onClick={() => _closeNavMenu('translate(0,-100vh)')}>
                <span className='material-icons'>close</span>
            </button>  
        </MenuContainer>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        _closeNavMenu: navPosition => dispatch(closeNavMenu(navPosition))
    };
};

export default connect(null, mapDispatchToProps)(NavMenu);