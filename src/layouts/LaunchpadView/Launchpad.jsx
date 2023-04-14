import React from 'react';
import './cryptoview.css'
import LaunchpadHead from '../../components/launchpadView/LaunchpadHead';
import LaunchpadBody from '../../components/launchpadView/LaunchpadBody';

const LaunchpadView = ({item}) => {
    return (
        <>
           <LaunchpadHead item={item}/> 
           <LaunchpadBody item={item}/>
        </>
    );
}

export default LaunchpadView;
