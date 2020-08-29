import React from 'react';

import CustomTitle from '../../components/custom-title/custom-title.component';

const Contact = () => {
    return (
        <div className='contact-container'>
            <CustomTitle>Contact</CustomTitle>
            <p>If you have any idea to talk about, you can reach me on my email:</p>
            <a href="/#">ilhammrg@gmail.com</a>
            <p>Maybe you just want to have a chat, simply mention or DM me on my twitter:</p>
            <a href="/#">Twitter</a>
        </div>
    );
};

export default Contact;