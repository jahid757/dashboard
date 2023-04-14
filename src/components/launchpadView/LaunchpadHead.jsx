import React from 'react';
import Navigation from '../header/Navigation';
import Ethereum from '../ethereum/Ethereum';
import Wallet from '../wallet/Wallet';
import CreateButton from '../header/CreateButton';
import NetworkLogo from '../crypto/NetworkLogo';
import { icons } from '../../assets/icons/icon';

const LaunchpadHead = ({item}) => {
    return (
        <div className="header position-relative launchepad_head">
            <div className='d-flex align-items-center justify-content-between pt-3'>
            <Navigation homeText={'Home / Launchpads '} route="CryptoBank Hybrid Exchange Fair Launch"/>
            <div className='d-flex align-items-center'>
                <Ethereum/>
                <Wallet/>
                <CreateButton/>
            </div>
        </div>
        <div className="d-flex align-items-center gap-3 content py-2">
            <NetworkLogo item={item}/>
            <div>
                <h2 className='launched_title title'>CryptoBank Hybrid Exchange <span className='text-capitalize'>{item.sale_status}</span></h2>
                <div className="d-flex align-items-center gap-3">
                    <p className={`text-capitalize status_text status_${item.status}`}>{item.status}</p>
                    <div className="d-flex gap-2 align-items-center">
                        <img src={icons.global} alt="global" />
                        <img src={icons.medium} alt="medium" />
                        <img src={icons.telegram} alt="telegram" />
                        <img src={icons.twitter} alt="twitter" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default LaunchpadHead;
