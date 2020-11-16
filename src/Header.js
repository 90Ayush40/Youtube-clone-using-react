import "./Header.css";

import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />

                <Link to="/">

                    <img className="header__logo" src="https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_960_720.png"></img>
                    
                </Link>
           
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch}   type="text" placeholder="Search" />

                <Link to={`/search/${inputSearch}`}>

                    <SearchIcon  className="header__inputButton" />
                
                </Link>
            </div>

            <div className="header__icons">

                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon"  />    
             <Avatar 
                alt="Reny Sharp"
                src="https://remysharp.com/images/remy-2017.jpg"
             />
            </div>  
            
        </div>
    )
}

export default Header
