import { combineReducers } from 'redux'
import transactions from './Transactions'
import visibilityFilter from './visibilityFilter'
import defineTextFilter from './defineTextFilter'
import defineTextFilterProps from './defineTextFilterProps'
import defineAcordeon from './defineAcordeon'
import definePropsFilter from './definePropsFilter'

//Combine all reducers to make only one state obj
const todoApp = combineReducers({
  transactions,
  visibilityFilter,
  defineTextFilter,
  defineTextFilterProps,
  definePropsFilter,
  defineAcordeon
})

export default todoApp
