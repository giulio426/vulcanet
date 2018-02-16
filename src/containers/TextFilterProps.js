import React from 'react'
import { connect } from 'react-redux'
import { textFilterProp } from '../actions'

let TextFilterProps = ({ dispatch }) => {
  let input

  return (
    <div>
      <form >
      <input className='filterAcordeon' ref={node => {
            input = node
          }}
          onChange={e => {
            dispatch(textFilterProp(input.value))
          }}
          onBlur={e => {
            dispatch(textFilterProp(input.value))
          }} placeholder='Find properties...'/>
      </form>
    </div>
  )
}
TextFilterProps = connect()(TextFilterProps)

export default TextFilterProps
