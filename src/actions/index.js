let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const textFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text,
  filter:'TEXT'
})

export const textFilterProp = (text) => ({
  type: 'SET_TEXT_FILTER_PROP',
  text,
})


export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleListProps = (prop) => ({
  type: 'TOGGLE_LIST_PROPS',
  prop
})
