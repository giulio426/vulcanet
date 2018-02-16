import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Table from '../components/Table'
import Sidebar from '../components/Sidebar'

const getVisibleTodos = (todos, filter, text, removePropVal) => {
  if (removePropVal.title) {
    todos = todos.filter(row => row[removePropVal.title] != removePropVal.value)
  }
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'TEXT':
      return todos.filter(t => {
        let ret = Object.values(t).map(tt => String(tt).indexOf(text) > -1)
        return ret.includes(true);
      }) ;
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  transactions: getVisibleTodos(state.transactions, state.visibilityFilter, state.defineTextFilter, state.definePropsFilter)
})

const mapDispatchToProps = {
  
}

const VisibleList = connect(
  mapStateToProps,
  //mapDispatchToProps
)(Table)

export default VisibleList
