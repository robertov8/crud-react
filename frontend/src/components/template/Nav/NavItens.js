import React from 'react';
import { Link } from 'react-router-dom';

import './NavItens.css';

export default ({ path, icon, title}) =>
    <Link to={`/${path ? path : ''}`}>
        <i className={`fa fa-${icon}`} /> {title}
    </Link>;