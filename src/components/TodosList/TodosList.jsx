import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

const TodosList = ({ todosResult }) => {
  const { todos, fetching, error } = todosResult;
  if(fetching) {
    return <div className="alert alert-info">
      Loading..
    </div>;
  }
  if(error) {
    return <div className="alert alert-info">
      Smth went wrong. Try to refresh page!
    </div>;
  }
  return (
    <ul className="list-group">
      {typeof todos === 'object' &&
        todos !== null &&
        Object.keys(todos).map((key) => <TodoItem key={todos[key].id} item={todos[key]} />)}
    </ul>
  );
};

const mapStateToProps = store => {
  return {
    todosResult: store.todos
  };
};

export default connect(mapStateToProps)(TodosList);
