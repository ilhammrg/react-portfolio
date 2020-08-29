import React from 'react';

import { FooterContainer, FooterContent } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <span className='footer-text'>From Bandung with </span>
                <span className='footer-heart-icon material-icons'>favorite</span>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;