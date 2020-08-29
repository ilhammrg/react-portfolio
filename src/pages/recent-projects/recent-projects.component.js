import React from 'react';

import CustomTitle from '../../components/custom-title/custom-title.component';

const RecentProjects = () => {
    return (
        <div className='recent-projects-container'>
            <CustomTitle>Recent Projects</CustomTitle>
            <div className='recent-projects-list-container'>
                <ul className='recent-projects-list'>
                    <li className='recent-projects-item'>Football PWA</li>
                    <li className='recent-projects-item'>React Clothing</li>
                    <li className='recent-projects-item'>React Portfolio</li>
                    <li className='recent-projects-item'>React Face Recognition</li>
                    <li className='recent-projects-item'>Recipe Finder</li>
                </ul>
            </div>
        </div>
    );
};

export default RecentProjects;