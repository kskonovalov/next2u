const tasksApiUrl = 'https://jsonplaceholder.typicode.com/todos';

export { tasksApiUrl };

const userTasksApiUrl =
  'https://jsonplaceholder.typicode.com/todos?userId=%user_id%';

export { userTasksApiUrl };

const userInfoApiUrl =
  'https://jsonplaceholder.typicode.com/users?id=%user_id%';

export { userInfoApiUrl };

const initialState = {
  todos: {
    fetching: false,
    todos: null,
    error: null
  }
};

export { initialState };