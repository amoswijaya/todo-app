const initialState = {
  todos: [
    {
      id: 1,
      text: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      text: 'Learn redux',
      completed: false,
    },
    {
      id: 3,
      text: 'Learn react-redux',
      completed: false,
    },
  ],
};

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, payload] };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;
