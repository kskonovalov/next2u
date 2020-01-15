const tasksApiUrl = 'https://jsonplaceholder.typicode.com/todos';

export { tasksApiUrl };

const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

export { usersApiUrl };

const apiUrls = {
  tasks: tasksApiUrl,
  users: usersApiUrl
};

export { apiUrls };

const initialState = {
  tasks: {
    fetching: false,
    data: null,
    error: null
  },
  users: {
    fetching: false,
    data: null,
    error: null
  },
  user:
    typeof window.__DATA__ !== 'undefined' &&
    typeof window.__DATA__.user !== 'undefined'
      ? window.__DATA__.user
      : {}
};

export { initialState };
