import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img 
      className='header_logo'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nTYA-qVfzAM-UZhRvHVfeAnLAAWNVhKgVnpjUO5Qvw&usqp=CAU&ec=48665698"
      alt=""></img>
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
      </IconButton>
    </div>
  )
}

export default Header;
