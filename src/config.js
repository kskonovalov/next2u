const todosApiUrl = 'https://jsonplaceholder.typicode.com/todos';

export { todosApiUrl };

const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

export { usersApiUrl };

const apiUrls = {
  'todos': todosApiUrl,
  'users': usersApiUrl
};

export { apiUrls };

const initialState = {
  apiData: {
    todos: {
      fetching: false,
      data: null,
      error: null
    },
    users: {
      fetching: false,
      data: null,
      error: null
    }
  },
  user:
    typeof window.__DATA__ !== 'undefined' &&
    typeof window.__DATA__.user !== 'undefined'
      ? window.__DATA__.user
      : {}
};

export { initialState };
