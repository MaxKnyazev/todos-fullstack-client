import {
  TODO_ADD_PENDING, 
  TODO_ADD_SUCCESS, 
  TODO_ADD_ERROR,
  
  TODO_DELETE_PENDING, 
  TODO_DELETE_SUCCESS, 
  TODO_DELETE_ERROR,

  TODO_TOGGLE_DONE_PENDING, 
  TODO_TOGGLE_DONE_SUCCESS, 
  TODO_TOGGLE_DONE_ERROR,

  TODO_TOGGLE_IMPORTANT_PENDING, 
  TODO_TOGGLE_IMPORTANT_SUCCESS, 
  TODO_TOGGLE_IMPORTANT_ERROR,

  TODO_TOGGLE_CHANGE_PENDING, 
  TODO_TOGGLE_CHANGE_SUCCESS, 
  TODO_TOGGLE_CHANGE_ERROR,

  TODO_CHANGE_TITLE_PENDING, 
  TODO_CHANGE_TITLE_SUCCESS, 
  TODO_CHANGE_TITLE_ERROR,

  GET_ALL_TODOS_PENDING, 
  GET_ALL_TODOS_SUCCESS, 
  GET_ALL_TODOS_ERROR,
} from './actionTypes';

import { axiosInstance } from '../../../utils/axiosInstance';

const delay = 0;

export const todoAddPending = () => {
  return {
    type: TODO_ADD_PENDING,
  }
}

export const todoAddSuccess = (title) => {
  return {
    type: TODO_ADD_SUCCESS,
    payload: title
  }
}

export const todoAddError = (error) => {
  return {
    type: TODO_ADD_ERROR,
    payload: error
  }
}

export const todoAddAsync = (title) => {
  return async (dispatch) => {
    try {
      dispatch(todoAddPending());

      const todo = await axiosInstance.post('/todos/create', {
        userId: '708c5fe4-b759-11ed-afa1-0242ac120002',
        title,
      });
      console.log(todo);

      dispatch(todoAddSuccess(todo.data.todo));
    } catch (error) {
      dispatch(todoAddError(error));
    }
  }
}



export const todoDeletePending = () => {
  return {
    type: TODO_DELETE_PENDING,
  }
}

export const todoDeleteSuccess = (id) => {
  return {
    type: TODO_DELETE_SUCCESS,
    payload: id
  }
}

export const todoDeleteError = (error) => {
  return {
    type: TODO_DELETE_ERROR,
    payload: error
  }
}

export const todoDeleteAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(todoDeletePending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoDeleteSuccess(id));
    } catch (error) {
      dispatch(todoDeleteError(error));
    }
  }
}



export const todoToggleDonePending = () => {
  return {
    type: TODO_TOGGLE_DONE_PENDING,
  }
}

export const todoToggleDoneSuccess = (id) => {
  return {
    type: TODO_TOGGLE_DONE_SUCCESS,
    payload: id
  }
}

export const todoToggleDoneError = (error) => {
  return {
    type: TODO_TOGGLE_DONE_ERROR,
    payload: error
  }
}

export const todoToggleDoneAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(todoToggleDonePending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoToggleDoneSuccess(id));
    } catch (error) {
      dispatch(todoToggleDoneError(error));
    }
  }
}



export const todoToggleImportantPending = () => {
  return {
    type: TODO_TOGGLE_IMPORTANT_PENDING,
  }
}

export const todoToggleImportantSuccess = (id) => {
  return {
    type: TODO_TOGGLE_IMPORTANT_SUCCESS,
    payload: id
  }
}

export const todoToggleImportantError = (error) => {
  return {
    type: TODO_TOGGLE_IMPORTANT_ERROR,
    payload: error
  }
}

export const todoToggleImportantAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(todoToggleImportantPending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoToggleImportantSuccess(id));
    } catch (error) {
      dispatch(todoToggleImportantError(error));
    }
  }
}



export const todoToggleChangePending = () => {
  return {
    type: TODO_TOGGLE_CHANGE_PENDING,
  }
}

export const todoToggleChangeSuccess = (id) => {
  return {
    type: TODO_TOGGLE_CHANGE_SUCCESS,
    payload: id
  }
}

export const todoToggleChangeError = (error) => {
  return {
    type: TODO_TOGGLE_CHANGE_ERROR,
    payload: error
  }
}

export const todoToggleChangeAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(todoToggleChangePending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoToggleChangeSuccess(id));
    } catch (error) {
      dispatch(todoToggleChangeError(error));
    }
  }
}



export const todoChangeTitlePending = () => {
  return {
    type: TODO_CHANGE_TITLE_PENDING,
  }
}

export const todoChangeTitleSuccess = (title, id) => {
  return {
    type: TODO_CHANGE_TITLE_SUCCESS,
    payload: {
      id,
      title
    }
  }
}

export const todoChangeTitleError = (error) => {
  return {
    type: TODO_CHANGE_TITLE_ERROR,
    payload: error
  }
}

export const todoChangeTitleAsync = (title, id) => {
  return async (dispatch) => {
    try {
      dispatch(todoChangeTitlePending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoChangeTitleSuccess(title, id));
    } catch (error) {
      dispatch(todoChangeTitleError(error));
    }
  }
}



export const getAllTodosPending = () => {
  return {
    type: GET_ALL_TODOS_PENDING,
  }
}

export const getAllTodosSuccess = (todos) => {
  return {
    type: GET_ALL_TODOS_SUCCESS,
    payload: todos,
  }
}

export const getAllTodosError = (error) => {
  return {
    type: GET_ALL_TODOS_ERROR,
    payload: error
  }
}

export const getAllTodosAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllTodosPending());

      const todos = await axiosInstance.get('/todos');
      console.log(todos);

      dispatch(getAllTodosSuccess(todos.data.todos));
    } catch (error) {
      dispatch(getAllTodosError(error));
    }
  }
}