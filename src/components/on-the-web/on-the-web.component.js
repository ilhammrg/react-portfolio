import React from 'react';

import { OnTheWebContainer } from './on-the-web.styles';

const OnTheWeb = () => {
    return (
        <OnTheWebContainer>
            <ul className='on-the-web-list'>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="/#">GitHub</a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="/#">Linkedin</a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="/#">Twitter</a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="/#">Instagram</a>
                </li>
                <li className='on-the-web-item'>
                    <a className='on-the-web-link' href="/#">Email</a>
                </li>
            </ul>
        </OnTheWebContainer>
    );
};

export default OnTheWeb;