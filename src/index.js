'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './public/style/main.scss'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
