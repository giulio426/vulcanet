import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Table from '../components/Table'
import Sidebar from '../components/Sidebar'

//Function that filter the table lines
const getVisibleList = (linhas, filter, text, removePropVal) => {
  //when exclude prop from the sidebar remove from obj
  if (removePropVal.title) {
    linhas = linhas.filter(row => row[removePropVal.title] != removePropVal.value)
  }
  switch (filter) {
    //return all
    case 'SHOW_ALL':
      return linhas
    //filtered results by text filter
    case 'TEXT':
      return linhas.filter(t => {
        let ret = Object.values(t).map(tt => String(tt).toLowerCase().indexOf(text) > -1)
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
  mapStateToProps
)(Table)

export default VisibleList
