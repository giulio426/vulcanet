// Action to change textFilter state
export const textFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text,
  filter:'TEXT'
})

// Action to change accordeon filter state
export const textFilterProp = (text) => ({
  type: 'SET_TEXT_FILTER_PROP',
  text,
})

// Action to change the lines that appears on table
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// Action to change the state of the itens on each accordeon state
export const toggleListProps = (prop) => ({
  type: 'TOGGLE_LIST_PROPS',
  prop
})

// Action to change accordeon open or close state
export const toggleAccordedon = (prop) => ({
  type: 'TOGGLE_ACORDEON',
  prop
})
