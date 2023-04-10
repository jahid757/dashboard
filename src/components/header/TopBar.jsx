import React from 'react';
import Navigation from './Navigation';
import Ethereum from '../ethereum/Ethereum';
import Wallet from '../wallet/Wallet';
import CreateButton from './CreateButton';

const TopBar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between pt-3">
            <Navigation route={'Launchpad'}/>
            <div className='d-flex align-items-center'>
                <Ethereum/>
                <Wallet/>
                <CreateButton/>
            </div>

        </div>
    );
}

export default TopBar;
