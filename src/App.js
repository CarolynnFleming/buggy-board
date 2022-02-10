import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

import './App.css';
import { logout } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetch() {
      const user = await getUser();

      if (user) setUser(user);
    }

    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <Router>
      <div className='App'>
        <header>
          {
            user &&
          <>
            <NavLink exact activeClassName='active-link' to="/board-games">List</NavLink>
            <NavLink exact activeClassName='active-link' to="/create">Create</NavLink>
            <a onClick={handleLogout} >Logout</a>
          </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user 
                  ? <Redirect to="/board-games" /> 
                  : <AuthPage />
              }
            </Route>
            <Route exact path="/board-games">
              {
                user 
                  ? <ListPage />
                  : <Redirect to="/" /> 
              }
            </Route>
            <Route exact path="/board-games/:game">
              {
                user 
                  ? <DetailPage />
                  : <Redirect to="/" /> 
              }
            </Route>
            <Route exact path="/create">
              {
                user 
                  ? <CreatePage />
                  : <Redirect to="/" /> 
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}