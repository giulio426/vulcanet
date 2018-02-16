import { combineReducers } from 'redux'
import transactions from './todos'
import visibilityFilter from './visibilityFilter'
import defineTextFilter from './defineTextFilter'
import defineTextFilterProps from './defineTextFilterProps'
import definePropsFilter from './definePropsFilter'

import data from '../mock.js';

const todoApp = combineReducers({
  transactions,
  visibilityFilter,
  defineTextFilter,
  defineTextFilterProps,
  definePropsFilter
})

export default todoApp
