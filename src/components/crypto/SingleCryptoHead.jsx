import React from 'react';
import { icons } from '../../assets/icons/icon';

const SingleCryptoHead = ({item}) => {
    const {name} = item;
    return (
        <div className='crypto_head'>
            <div className="d-flex align-items-start justify-content-between mb-10 position-relative">
                <div className="network_icon">
                    <img src={item.image} alt="icon" />
                    <img className='network_name_icon' src={item.network_image} alt="network icon" />
                </div>
                <div className=''>
                    <p className={`text-capitalize status_text status_${item.status}`}>{item.stacking_poll ? <img src={icons.lock} className='mb-1'/> : ''} {item.status}</p>
                    { 
                        item.verify && item.verify.length > 0  ? 
                        <div className="d-flex align-items-center gap-2 position-absolute xy-center-align">
                        { item.verify && item.verify.length > 0  ? 
                            item.verify.map((data,index) => {
                                return <button key={index} className={`${data.name} font-11`}>{data.name}</button>
                            })
                        : '' }
                    </div> : ''
                    }
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                <h2 className='crypto_name mb-2'>{name}</h2>
            <p className="network_value">1{item.crypto_network} = {item.crypto_value}{item.crypto_value_network}</p>
                </div>
                {
                    item.stacking_poll ? <p className='font-12 stacking_pool'>Staking pool</p> : ''
                }
            </div>
        </div>
    );
}

export default SingleCryptoHead;
