const definePropsFilter = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LIST_PROPS':
      return action.prop
    default:
      return state
  }
}

export default definePropsFilter
