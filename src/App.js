import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './store';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/pages/Home';
import SignInPage from './components/pages/SignInPage';
import { Header } from './components/partials/Header';
import UserInfo from './components/pages/UserInfo';
import page404 from './components/pages/page404';

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
          <Route exact path='*' component={page404} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
