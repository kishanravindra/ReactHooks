import React from 'react';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <div>
        <li className='NavigationItem'>
            <a href={props.link}>{props.children}</a>
        </li>
    </div>
);

export default navigationItem;