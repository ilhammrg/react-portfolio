import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { MenuDirectoryContainer } from './menu-directory.styles';

const MenuDirectory = () => {
    return (
        <MenuDirectoryContainer>
            <MenuItem to='/contact' buttoncolor="red">Contact</MenuItem>
            <MenuItem to='/' buttoncolor="green">Recent Projects</MenuItem>
            <MenuItem to='/resume' buttoncolor="salmon">Resume</MenuItem>
            <MenuItem to='/posts' buttoncolor="lightblue">Posts</MenuItem>
        </MenuDirectoryContainer>
    );
};

export default MenuDirectory;