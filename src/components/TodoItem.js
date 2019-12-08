import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, delTodo, markComplete }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      padding: '1px',
      borderBottom: '1px #ccc dotted'
    };
  }

  const { id, title, completed } = todo;
  const isChecked = completed;
  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={markComplete.bind(this, id)} checked={isChecked} />
        {' '}
        {title}
        <button onClick={delTodo.bind(this, id)} style={btnStyle}>x</button>
      </p>
    </div>
  );
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}


export default TodoItem;
