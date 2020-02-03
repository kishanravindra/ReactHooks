import React from 'react';

import './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = () => (
        <nav className='Navigation'>
            <NavigationItem link="/" active>Use State</NavigationItem>
            <NavigationItem link="/use-effect">Use Effect</NavigationItem>
            <NavigationItem link="/use-context">Use Context</NavigationItem>
        </nav>
);

export default navigation;