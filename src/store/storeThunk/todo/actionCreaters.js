import {
  TODO_ADD_PENDING, TODO_ADD_SUCCESS, TODO_ADD_ERROR,
  TODO_DELETE_PENDING, TODO_DELETE_SUCCESS, TODO_DELETE_ERROR,
  TODO_DONE_PENDING, TODO_DONE_SUCCESS, TODO_DONE_ERROR,
  TODO_IMPORTANT_PENDING, TODO_IMPORTANT_SUCCESS, TODO_IMPORTANT_ERROR,
} from './actionTypes';

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

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoAddSuccess(title));
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



export const todoDonePending = () => {
  return {
    type: TODO_DONE_PENDING,
  }
}

export const todoDoneSuccess = (id) => {
  return {
    type: TODO_DONE_SUCCESS,
    payload: id
  }
}

export const todoDoneError = (error) => {
  return {
    type: TODO_DONE_ERROR,
    payload: error
  }
}

export const todoDoneAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(todoDonePending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoDoneSuccess(id));
    } catch (error) {
      dispatch(todoDoneError(error));
    }
  }
}



export const todoImportantPending = () => {
  return {
    type: TODO_IMPORTANT_PENDING,
  }
}

export const todoImportantSuccess = (id) => {
  return {
    type: TODO_IMPORTANT_SUCCESS,
    payload: id
  }
}

export const todoImportantError = (error) => {
  return {
    type: TODO_IMPORTANT_ERROR,
    payload: error
  }
}

export const todoImportantAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(todoImportantPending());

      const testAsync = (delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      }
      await testAsync(delay);

      dispatch(todoImportantSuccess(id));
    } catch (error) {
      dispatch(todoImportantError(error));
    }
  }
}
