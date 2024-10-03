export const ADD_TODO = 'ADD_TODO';
export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = payload => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload,
});

export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS,
});

export const UPDATE_DESC = 'UPDATE_DESC';
export const updateDescription = payload => ({
  type: UPDATE_DESC,
  payload,
});
