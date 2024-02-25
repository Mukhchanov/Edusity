import React from 'react';
import '../styles/layouts/_title.scss';

function Title({ subtitle, title }) {
    return (
        <div className='title'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    )
};

export default Title;