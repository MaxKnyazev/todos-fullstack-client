import {
  TODO_ADD_PENDING, TODO_ADD_SUCCESS, TODO_ADD_ERROR,
  TODO_DONE_PENDING, TODO_DONE_SUCCESS, TODO_DONE_ERROR,
  TODO_IMPORTANT_PENDING, TODO_IMPORTANT_SUCCESS, TODO_IMPORTANT_ERROR,
} from './actionTypes';

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

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(1000);

      dispatch(todoAddSuccess(title));
    } catch (error) {
      dispatch(todoAddError(error));
    }
  }
}