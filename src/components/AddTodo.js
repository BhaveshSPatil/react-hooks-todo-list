import React, { useState } from 'react'

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        name="title"
        style={{ flex: '10', padding: '5px' }}
        placeholder="Add Todo ..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1' }}
      />
    </form>
  );
}

export default AddTodo
