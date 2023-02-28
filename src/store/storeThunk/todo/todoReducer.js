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

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case TODO_ADD_SUCCESS:
      return {
        ...state, 
        todos: [...state.todos, action.payload],
        isLoading: false
      }

    case TODO_ADD_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }
      


    case TODO_DELETE_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case TODO_DELETE_SUCCESS:
      return {
        ...state, 
        todos: state.todos.filter(todo => todo.id !== action.payload),
        isLoading: false
      }

    case TODO_DELETE_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }



    case TODO_TOGGLE_DONE_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case TODO_TOGGLE_DONE_SUCCESS:
      return {
        ...state, 
        todos: state.todos.map(elem => 
          elem.id === action.payload 
            ? {...elem, isDone: !elem.isDone}
            : elem
        ),
        isLoading: false
      }

    case TODO_TOGGLE_DONE_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }



    case TODO_TOGGLE_IMPORTANT_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case TODO_TOGGLE_IMPORTANT_SUCCESS:
      return {
        ...state, 
        todos: state.todos.map(elem => 
          elem.id === action.payload 
            ? {...elem, isImportant: !elem.isImportant}
            : elem
        ),
        isLoading: false
      }

    case TODO_TOGGLE_IMPORTANT_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }


    case TODO_TOGGLE_CHANGE_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case TODO_TOGGLE_CHANGE_SUCCESS:
      return {
        ...state, 
        todos: state.todos.map(elem => 
          elem.id === action.payload 
            ? {...elem, isChange: !elem.isChange}
            : elem
        ),
        isLoading: false
      }

    case TODO_TOGGLE_CHANGE_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }



    case TODO_CHANGE_TITLE_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case TODO_CHANGE_TITLE_SUCCESS:
      return {
        ...state, 
        todos: state.todos.map(elem => 
          elem.id === action.payload.id 
            ? {...elem, title: action.payload.title}
            : elem
        ),
        isLoading: false
      }

    case TODO_CHANGE_TITLE_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }

    case GET_ALL_TODOS_PENDING:
      return {
        ...state, 
        isLoading: true,
      }

    case GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false
      }

    case GET_ALL_TODOS_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }

    default: 
      return state
  }
}