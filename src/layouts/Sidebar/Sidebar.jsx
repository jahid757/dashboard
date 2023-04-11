import React, { useState } from 'react';
import './sidebar.css'
import './sidebar_light.css'
import './sidebar_dark.css'
import sidebarItem from '../../data/SidebarData';
import Item from '../../components/sidebar/Item';
import { images } from '../../assets/images/images';
import { Link } from 'react-router-dom';
import Follow from '../../components/sidebar/Follow';
import Bottom from '../../components/sidebar/Bottom';



const Sidebar = ({selected}) => {
    const [itemId, setItemId] = useState(selected)
    const itemFocus = (id) => {
        setItemId(id)
    }
    return (
        <div className="left_side_bar">
            <Link to="/" className="logo d-flex align-items-center gap-2 pt-0 mt-1">
                <img className="rounded" src={images.logo} alt="" />
                <h2>Xcel Pad</h2>
            </Link>
            <ul>
                {
                    sidebarItem.map((item,index) => <Item itemId={itemId} itemFocus={itemFocus} key={item.id} id={index} item={item}/>)
                }
            </ul>
            <hr />
                <Follow/>
                <Bottom/>
        </div>
    );
}

export default Sidebar;
