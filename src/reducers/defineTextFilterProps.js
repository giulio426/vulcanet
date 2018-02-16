const defineTextFilterProps = (state = '', action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER_PROP':
      return action.text
    default:
      return state
  }
}

export default defineTextFilterProps
