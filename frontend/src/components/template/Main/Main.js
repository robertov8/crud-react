import React, { Fragment } from 'react';
import './Main.css';

import Header from '../Header/Header';

export default props =>
    <Fragment>
        <Header {...props} />

        <main className="content">
            Conteúdo
        </main>
    </Fragment>;