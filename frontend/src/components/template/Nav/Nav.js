import React from 'react';
import './Nav.css';

import NavItens from './NavItens';

export default () =>
    <aside className='menu-area'>
        <nav className='menu'>
            <NavItens icon='home' title='Início' />
            <NavItens path='users' icon='users' title='Usuários' />
        </nav>
    </aside>;