import data from '../mock.js';

const transactions = (state = data, action) => {
  //return state
  switch (action.type) {
    /*case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )*/
    default:
      return state
  }
}

export default transactions
