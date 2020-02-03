import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Notes from '../../views/Notes/Notes';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import UseEffect from '../../views/UseEffect/UseEffect';
import UseContext from '../../views/UseContext/UseContext';



class Layout extends Component {

    render () {
        return (
            <Wrapper>
                <Toolbar />
                <div style={{marginTop: 80}}>
                 <Route path='/' exact component={Notes} />
                 <Route path='/use-effect' component={UseEffect} />
                 <Route path='/use-context' component={UseContext} />
                </div>
            </Wrapper>
        )
    }
}

export default Layout;