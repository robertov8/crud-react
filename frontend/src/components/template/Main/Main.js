import React, { Fragment } from 'react';
import './Main.css';

import Header from '../Header/Header';

export default () =>
    <Fragment>
        <Header />

        <main className="content">
            Conteúdo
        </main>
    </Fragment>;