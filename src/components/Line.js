import React from 'react'
import PropTypes from 'prop-types'

const defineStatus = (status) => {

  //change the state from number to text
  if(status == 1) {
    return 'open'
  } else if(status == 2) {
    return 'closed'
  } if(status == 3) {
    return 'escalated'
  } 
}
//make the colered square for each piority
const definePriority = (priority) => {
  if(priority == 0) {
    return {    'background-color': '#DE4343'}
  } else if(priority == 1) {
    return {    'background-color': '#FF9945'}
  } if(priority == 2) {
    return {    'background-color': '#EBF1F5'}
  } 
}
//define each line of the row
const Line = ({ priority, status, title, trader, counterparty, book, source}) => (
  <tr>
    <td className='bold'>{title}</td>
    <td><span className='priority' style={definePriority(priority)}></span></td>
    <td> <span className='status'>{defineStatus(status)}</span></td>
    <td>{trader}</td>
    <td>{counterparty}</td>
    <td>{book}</td>
    <td>{source}</td>
  </tr>
)

//define propTypes for the component
Line.propTypes = {
  priority: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  trader: PropTypes.string.isRequired,
  counterparty: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Line
