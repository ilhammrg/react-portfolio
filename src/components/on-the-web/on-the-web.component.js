import React from 'react';

import { OnTheWebContainer } from './on-the-web.styles';

const OnTheWeb = () => {
    return (
        <OnTheWebContainer>
            <ul className='on-the-web-list'>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="https://github.com/ilhammrg" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="https://linkedin.com/in/ilhammrg" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="https://twitter.com/ilmuhammadrg" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="https://www.instagram.com/ilhammuhammadrg/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </li>
            </ul>
        </OnTheWebContainer>
    );
};

export default OnTheWeb;