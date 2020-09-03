import React from 'react';

// import CustomTitle from '../../components/custom-title/custom-title.component';
import { ContactContainer } from './contact.styles';

const Contact = () => {
    return (
        <ContactContainer>
            {/* <CustomTitle>Contact</CustomTitle> */}
            <p>If you have any idea to talk about, you can reach me on my email:</p>
            <a href="mailto:ilhammrg@gmail.com">ilhammrg@gmail.com</a>
            
            <p>Maybe you just want to have a chat, simply mention or DM me on my twitter:</p>
            <a href="https://twitter.com/ilmuhammadrg" target="_blank" rel="noopener noreferrer">@ilmuhammadrg</a>
        </ContactContainer>
    );
};

export default Contact;