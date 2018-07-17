import React from 'react';
import './NavItens.css';

export default ({ path, icon, title}) =>
    <a href={`#/${path ? path : ''}`}>
        <i className={`fa fa-${icon}`} /> {title}
    </a>;