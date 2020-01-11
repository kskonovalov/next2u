import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Loader from './helpers/Loader';

const Tasks = React.lazy(() => import('./Tasks'));
const Profile = React.lazy(() => import('./Profile'));

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
          </ul>
          <span className="navbar-text">{name}</span>
        </nav>
      </nav>
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={Tasks} />
          <Route path="/tasks.html" component={Tasks} />
          <Route path="/profile.html" component={Profile} />
        </Suspense>
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
