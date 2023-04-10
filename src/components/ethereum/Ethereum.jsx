import React from 'react';
import { icons } from '../../assets/icons/icon';

const Ethereum = () => {
    return (
        <div className="d-flex align-items-center gap-3 wallet p-16 mr-1 pointer-event">
            <img className='ethereum' src={icons.ethereum} alt="ethereum" />
            <img className='dwn_arrow' src={icons.down_arrow} alt="" />
        </div>
    );
}

export default Ethereum;
