import React from 'react';

import CustomButton from '../custom-button/custom-button';

const MenuItem = ({ children, ...otherProps }) => {
    return (
        <li className="menu-item-container">
            <CustomButton {...otherProps}>{children}</CustomButton>
        </li>
    );
};

export default MenuItem;