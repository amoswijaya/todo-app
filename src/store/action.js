export function addTodo(payload) {
  return { type: 'ADD_TODO', payload: payload };
}

export function removeTodo(payload) {
  console.log(payload);
  return { type: 'REMOVE_TODO', payload: payload };
}

export function toggleTodo(payload) {
  return { type: 'TOGGLE_TODO', payload: payload };
}
