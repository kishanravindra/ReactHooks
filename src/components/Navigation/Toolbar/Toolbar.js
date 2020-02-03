import React from 'react';

import  './Toolbar.css';
import Navigation from '../Navigation';

const toolbar = ( props ) => (
    <header className='Toolbar'>
        <div className='Title'>
            <h3 style={{color: 'white'}}>React Hooks</h3>
        </div>
        <nav className='DesktopOnly'>
            <Navigation />
        </nav>
    </header>
);

export default toolbar;