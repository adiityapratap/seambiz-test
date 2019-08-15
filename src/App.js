import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import ContactTable from './views/ContactTable';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={ContactTable} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
