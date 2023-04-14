import React from 'react';
import { icons } from '../../assets/icons/icon';

const Navigation = ({route}) => {
    return (
        <div className="d-flex align-items-center gap-2 content">
            <img src={icons.home_gray} alt="home gray icon" />
            <p className='nav_link'>Home</p>
            <p className='nav_link'>{route ? `/ ` : ''}</p>
            <p className='nav_link_active'>{route ? `${route}` : ''}</p>
        </div>
    );
}

export default Navigation;
