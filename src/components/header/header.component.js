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
                    <MenuButton hovercolor='#f9d276'>
                        <span className="material-icons">brightness_5</span>
                    </MenuButton>
                </MenuItem>
                <MenuItem>
                    <MenuButton hovercolor='#4ecca3'>
                        <span className="material-icons">menu</span>
                    </MenuButton>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    );
};

export default Header;