const defineTextFilter = (state = '', action) => {
  //define text on text filter
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return action.text
    default:
      return state
  }
}

export default defineTextFilter
