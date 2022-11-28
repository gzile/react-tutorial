import React, { useReducer } from 'react'
import { initialTodos, TodoReducer } from '../shared/reducer';

const Account = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({
      type: 'COMPLETE',
      id: todo.id,
    })
  }

  // console.log('TODOS', todos);

  return (
    <>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Account