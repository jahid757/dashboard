import React from 'react';
import './header.css'
import './header_light.css'
import './header_dark.css'
import TopBar from '../../components/header/TopBar';
import TitleBar from '../../components/header/TitleBar';
import FilterMenu from '../../components/header/FilterMenu';


const Header = () => {
    return (
        <div className="header content">
            <TopBar/>
            <TitleBar/>
            <FilterMenu/>
        </div>
    );
}

export default Header;
