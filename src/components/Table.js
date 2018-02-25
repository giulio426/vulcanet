import React from 'react'
import PropTypes from 'prop-types'
import Line from './Line'
import Ionicon from 'react-ionicons'

const Table = ({ transactions }) => {
  
  {/* Make the table structure */}
  return(
    <table>
      <thead>
        <td className='bold'>Title</td>
        <td><Ionicon icon="ios-alert" fontSize="25px" onClick={() => console.log('Hi!')} color="#2F8BC3"/></td>
        <td className='bold'>Status</td>
        <td className='bold'>Trader</td>
        <td className='bold'>Counterparty</td>
        <td className='bold'>Book</td>
        <td className='bold'>Source</td>
      </thead>
      <tbody>
        {transactions.map(data =>
          <Line
            key={data.id}
            {...data}
            
          />
        )}
        
      </tbody>
    </table>
)}

Table.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      priority: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      trader: PropTypes.string.isRequired,
      counterparty: PropTypes.string.isRequired,
      book: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Table
