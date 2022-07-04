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

export function authStart() {
  return { type: 'AUTH_START' };
}

export function authSuccess(payload) {
  return { type: 'AUTH_SUCCESS', payload: payload };
}

export function authFailure(payload) {
  return { type: 'AUTH_FAILURE', payload: payload };
}

export function authLogout() {
  return { type: 'AUTH_LOGOUT' };
}
