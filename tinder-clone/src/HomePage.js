import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function HomePage() {
  return (
    <div>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
      </Link>
    </div>
  );
}

export default HomePage;
