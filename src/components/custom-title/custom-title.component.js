import React from 'react';

const CustomTitle = ({ children }) => {
    return (
        <div className='custom-title-container'>
            <h2 className='custom-title'>{children}</h2>
        </div>
    );
};

export default CustomTitle;