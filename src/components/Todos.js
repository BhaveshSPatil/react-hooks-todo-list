import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

function Todos({ todos, delTodo, markComplete }) {
  return todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />
  ));

}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
