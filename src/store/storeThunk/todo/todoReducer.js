import {
  TODO_ADD_PENDING, TODO_ADD_SUCCESS, TODO_ADD_ERROR,
  TODO_DONE_PENDING, TODO_DONE_SUCCESS, TODO_DONE_ERROR,
  TODO_IMPORTANT_PENDING, TODO_IMPORTANT_SUCCESS, TODO_IMPORTANT_ERROR,
} from './actionTypes';

const initialState = {
  todos: [
    {
      title: 'Learn English',
      isImportant: true,
      isChange: false,
      isDone: false,
      id: '1'
    },
  
    {
      title: 'Learn JavaScript',
      isImportant: true,
      isChange: true,
      isDone: false,
      id: '2'
    },
  
    {
      title: 'Go to gym',
      isImportant: false,
      isChange: false,
      isDone: false,
      id: '3'
    },
  
    {
      title: 'Eat breakfast',
      isImportant: false,
      isChange: true,
      isDone: false,
      id: '4'
    },
  
    {
      title: 'Finish school',
      isImportant: true,
      isChange: false,
      isDone: true,
      id: '5'
    },
  
    {
      title: 'Learn Russian',
      isImportant: true,
      isChange: true,
      isDone: true,
      id: '6'
    },
  
    {
      title: 'Read article',
      isImportant: false,
      isChange: false,
      isDone: true,
      id: '7'
    },
  
    {
      title: 'Read article',
      isImportant: false,
      isChange: true,
      isDone: true,
      id: '8'
    },
  ],
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
        todos: [...state.todos, {
          title: action.payload,
          isImportant: false,
          isChange: false,
          isDone: false,
          id: Date.now()
        }],
        isLoading: false
      }

    case TODO_ADD_ERROR:
      return {
        ...state, 
        isLoading: false,
        error: action.payload
      }

    default: 
      return state
  }
}