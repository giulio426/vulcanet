const definePropsFilter = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LIST_PROPS':
      //Verifica se a propriedade é a mesma que está no state, se for libera e reativa o filtro, se nao remove a prop
      //Converte os dois objetos para json na verificação
      if(JSON.stringify(state) === JSON.stringify(action.prop)) {
        return {};
      } else {
        return action.prop
      }
      
    default:
      return state
  }
}

export default definePropsFilter
