const todosApiUrl = 'https://jsonplaceholder.typicode.com/todos';

export { todosApiUrl };

const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

export { usersApiUrl };

const userTasksApiUrl =
  'https://jsonplaceholder.typicode.com/todos?userId=%user_id%';

export { userTasksApiUrl };

const userInfoApiUrl =
  'https://jsonplaceholder.typicode.com/users?id=%user_id%';

export { userInfoApiUrl };

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
  }
};

export { initialState };