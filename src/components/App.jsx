import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import TodosList from './TodosList';

const App = () => {
  store.dispatch({ type: "API_CALL_REQUEST" })
  return (
    <Provider store={store}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="tasks.html">
                Все задачи
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile.html">
                Мои задачи
              </a>
            </li>
          </ul>
          <span className="navbar-text">user.name</span>
        </div>
      </nav>

      <div className="container">
        <h2>Все задачи</h2>
        <TodosList />
      </div>
    </Provider>
  );
};

export default App;
