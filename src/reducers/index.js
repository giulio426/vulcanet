import { combineReducers } from 'redux'
import transactions from './Transactions'
import visibilityFilter from './visibilityFilter'
import defineTextFilter from './defineTextFilter'
import defineTextFilterProps from './defineTextFilterProps'
import definePropsFilter from './definePropsFilter'


const todoApp = combineReducers({
  transactions,
  visibilityFilter,
  defineTextFilter,
  defineTextFilterProps,
  definePropsFilter
})

export default todoApp
