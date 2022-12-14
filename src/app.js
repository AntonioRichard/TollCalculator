import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addAccount } from './actions/accounts';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

export const store = configureStore();

ReactDOM.render(<AppRouter />, document.getElementById('app'));
