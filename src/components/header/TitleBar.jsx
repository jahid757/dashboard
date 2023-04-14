import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';

const TitleBar = () => {
    const [filter,setFilter] = useState('all')
    const onSmallScreenMobile = useWindowWidth(767);
    
    return (
        <div className={`d-flex align-items-center gap-2 content ${onSmallScreenMobile ? 'pb-3' : ''}`}>
            <h2 className='title mr-20'>Launchpads</h2>
            <div className="filter_btn_wrap">
                <button className={`${filter === 'all' ? 'active':''}`} onClick={() => setFilter('all')}>All (200)</button>
                <button className={`${filter === 'my' ? 'active':''}`} onClick={() => setFilter('my')}>My (4)</button>
            </div>
        </div>
    );
}

export default TitleBar;
