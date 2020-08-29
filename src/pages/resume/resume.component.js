import React from 'react';

import CustomTitle from '../../components/custom-title/custom-title.component';
import CustomButton from '../../components/custom-button/custom-button';

const Resume = () => {
    return (
        <div className='resume-container'>
            <CustomTitle>Resume</CustomTitle>
            <p>Click on the button below to get my latest resume, I will provide my latest resume as soon as posible :)</p>
            <CustomButton to="/">Get Resume Now</CustomButton>
        </div>
    );
};

export default Resume;