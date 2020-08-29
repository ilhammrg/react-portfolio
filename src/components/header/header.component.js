import React from 'react';

import { HeaderContainer, LogoContainer, MenuContainer, MenuItem, MenuButton } from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <h1 className='brand-name'>Ilham Muhammad</h1>
            </LogoContainer>
            <MenuContainer>
                <MenuItem>
                    <MenuButton iconcolor="#f9d276" hovercolor='#f9d276'>
                        <span className="material-icons">brightness_high</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton iconcolor="white" hovercolor='#4ecca3'>
                        <span className="material-icons">menu</span>
                    </MenuButton>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    );
};

export default Header;