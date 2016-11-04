/**
 * Created by gongy on 4/11/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/App'
import UrlList from './containers/UrlList';

const sagaMiddleware = createSagaMiddleware();
const routerHistoryMiddleware = routerMiddleware(browserHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(routerHistoryMiddleware, sagaMiddleware)));

sagaMiddleware.run(sagas);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UrlList}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
