import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Table from '../components/Table'
import Sidebar from '../components/Sidebar'

//Recebe o comando para efetuar o filtro das linhas
const getVisibleList = (linhas, filter, text, removePropVal) => {
  //Quando vier o filtro de remover da sidebar já remove
  if (removePropVal.title) {
    linhas = linhas.filter(row => row[removePropVal.title] != removePropVal.value)
  }
  switch (filter) {
    //Retorna todas as linhas
    case 'SHOW_ALL':
      return linhas
    //filtra pelo texto do hader
    case 'TEXT':
      return linhas.filter(t => {
        let ret = Object.values(t).map(tt => String(tt).indexOf(text) > -1)
        return ret.includes(true);
      }) ;
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  transactions: getVisibleList(state.transactions, state.visibilityFilter, state.defineTextFilter, state.definePropsFilter)
})

const VisibleList = connect(
  mapStateToProps,
  //mapDispatchToProps
)(Table)

export default VisibleList
