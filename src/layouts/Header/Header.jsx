import React from 'react';
import './header.css'
import TopBar from '../../components/Header/Topbar';
import TitleBar from '../../components/Header/TitleBar';
import FilterMenu from '../../components/Header/FilterMenu';


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
