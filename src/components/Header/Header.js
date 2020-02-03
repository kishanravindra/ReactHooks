import React from 'react';

import './Header.css';

const header = (props) => {
    return (
       <header className='Header'>
          <h3>{props.headerTitle}</h3> 
       </header>
    );
}

export default header;