import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Context, initialState, reducer } from './store';

import Home from './components/pages/Home';
import AnotherPage from './components/pages/UserInfo';
import SignInPage from './components/pages/SignInPage';
import { Header } from './components/partials/Header';
import UserInfo from './components/pages/UserInfo';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route path="/user-info" component={UserInfo} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
