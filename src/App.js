import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Context, initialState, reducer } from './store';

import Home from './components/pages/Home';
import AnotherPage from './components/pages/AnotherPage';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/another" component={AnotherPage} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
