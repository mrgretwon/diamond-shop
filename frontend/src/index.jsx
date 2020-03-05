import 'bootstrap/dist/css/bootstrap.min.css';
import './design/css/style.css';
import 'react-notifications-component/dist/theme.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga/index';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import routes from './configuration/routes';
import {composeWithDevTools} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <DndProvider backend={Backend}>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </DndProvider>
    </Provider>,
    BootstrapedElement,
);
registerServiceWorker();
