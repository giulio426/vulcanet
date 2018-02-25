const defineAcordeon = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_ACORDEON':
      //Check if the state is equal to prop, if true return empty
      //Convert both obj to string on verification
      if(JSON.stringify(state) === JSON.stringify(action.prop)) {
        return {};
      } else {
        return action.prop
      }
      
    default:
      return state
  }
}

export default defineAcordeon
