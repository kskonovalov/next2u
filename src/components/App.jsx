import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Tasks from './Tasks';
import Profile from './Profile';

const App = ({ user }) => {
  const { name } = user;
  return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="tasks.html" className="nav-link">
                  Все задачи
                </Link>
              </li>
              <li className="nav-item">
                <Link to="profile.html" className="nav-link">
                  Мои задачи
                </Link>
              </li>
            </ul>
            <span className="navbar-text">{name}</span>
          </div>
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
