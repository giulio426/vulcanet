const defineTextFilterProps = (state = '', action) => {
  //define value to the accordeon props filter
  switch (action.type) {
    case 'SET_TEXT_FILTER_PROP':
      return action.text
    default:
      return state
  }
}

export default defineTextFilterProps
