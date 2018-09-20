import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { addArticle, updateTime, updateTimeAsyncThunk, updateTimeAsyncAwaitThunk } from './actions/index';
import App from './components/app.component';

import style from "./main.css";

/* For demo purposes                                                                        */
/* Attach the redux store and actions to window, so we can dispatch them using the browser. */
/* Example: window.store.dispatch(window.updateTimeAsyncThunk())                            */
window.store = store;
window.addArticle = addArticle;
window.updateTime = updateTime;
window.updateTimeAsyncThunk = updateTimeAsyncThunk;
window.updateTimeAsyncAwaitThunk = updateTimeAsyncAwaitThunk;

/* Wrap the App stub in the store using Provider */
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

/* For demo purposes                                                                        */
/* Load two articles to start off the UI so it's not empty.                                 */
window.store.dispatch(addArticle({ title: 'first article', id: '0001' }));
window.store.dispatch(addArticle({ title: 'second article', id: '0002' }));