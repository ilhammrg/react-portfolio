import React from 'react';

import { ButtonContent } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <ButtonContent {...otherProps} >{children}</ButtonContent>
    );
};

export default CustomButton;