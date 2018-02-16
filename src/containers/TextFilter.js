import React from 'react'
import { connect } from 'react-redux'
import { textFilter } from '../actions'

let TextFilter = ({ dispatch }) => {
  let input

  return (
    <div>
      <form >
        <input className='filterAcordeon' placeholder='Search for alerts...' ref={node => {
            input = node
          }}
          onChange={e => {
            dispatch(textFilter(input.value))
          }}
          onBlur={e => {
            dispatch(textFilter(input.value))
          }}
          className='inputTableHeader'/>
      </form>
    </div>
  )
}
TextFilter = connect()(TextFilter)

export default TextFilter
