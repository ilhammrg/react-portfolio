import React from 'react';

import { ContactContainer } from './contact.styles';

const Contact = () => {
    return (
        <ContactContainer>
            <p>If you have any idea to talk about, kindly email me on:</p>
            <a href="mailto:ilhammrg@gmail.com">ilhammrg@gmail.com</a>
            
            <p>Maybe you just want to have a chat, simply mention or DM me on twitter:</p>
            <a href="https://twitter.com/ilmuhammadrg" target="_blank" rel="noopener noreferrer">@ilmuhammadrg</a>
        </ContactContainer>
    );
};

export default Contact;