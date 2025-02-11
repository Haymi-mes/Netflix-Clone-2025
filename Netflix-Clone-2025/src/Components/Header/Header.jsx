import React from 'react'
import './Header.css'
import Netflixlogo from '../../assets/image/NetflixLogo.jpeg'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Header = () => {
  return (
    <>
      <div className='header-outer-container'>
        <div className="header-container">
          <div className="header-left">
            <ul> 
              <li>
                <img src={Netflixlogo} alt="Netflix Logo" width={80} /> 
              </li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>

              <li>My Lists</li>
              <li>Browse by Languages</li>
            </ul>
          </div>

          <div className="header-right">
            <ul>
              <li><SearchIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li><AccountBoxIcon /></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header