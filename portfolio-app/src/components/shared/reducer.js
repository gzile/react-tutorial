import React from "react";

export const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
    activate: '',
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
    activate: '',
  },
];

const dispatchComplete = (state, payload) => {
  console.log(state, payload);
  return state.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, complete: !todo.complete };
    } else {
      return todo;
    }
  });
}

const dispatchActivate = (state, id, payload) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, activate:  payload};
    } else {
      return todo;
    }
  });
}

export const TodoReducer = (state, action) => {

  switch (action.type) {
    case 'COMPLETE':
      return dispatchComplete(state, action.id)
    case 'ACTIVATE':
      return dispatchActivate(state, action.id, action.activate)

    default:
      return state;
  }
}
