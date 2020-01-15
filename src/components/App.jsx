import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import loadable from '@loadable/component';

import Loader from './Loader';

const Tasks = loadable(() => import('../pages/Tasks'), {
  fallback: <Loader />
});
const Profile = loadable(() => import('../pages/Profile'), {
  fallback: <Loader />
});

const updateWinData = () => {
  console.log(window.__DATA__);
};

const App = ({ user }) => {
  const { name } = user;
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="tasks.html"
                className="nav-link"
                activeClassName="is-active"
              >
                Все задачи
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="profile.html"
                className="nav-link"
                activeClassName="is-active"
              >
                Мои задачи
              </NavLink>
            </li>
            <li className="nav-item">
              <button type="button" onClick={updateWinData}>
                Test update of window._DATA_
              </button>
            </li>
          </ul>
          <span className="navbar-text">{name}</span>
        </nav>
      </nav>
      <div className="container">
        <Route path="/" exact component={Tasks} />
        <Route path="/tasks.html" component={Tasks} />
        <Route path="/profile.html" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = appStore => {
  const { user } = appStore;
  return {
    user
  };
};

export default connect(mapStateToProps)(App);
