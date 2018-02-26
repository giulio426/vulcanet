import React from 'react'
import PropTypes from 'prop-types'
import Line from './Line'
import TextFilterProps from '../containers/TextFilterProps'

import Icon from 'react-icons-kit';
import { ic_expand_less } from 'react-icons-kit/md/ic_expand_less'; 
import { ic_expand_more } from 'react-icons-kit/md/ic_expand_more'; 

//define the sidebar component
const Sidebar = ({ options, onPropClick, definePropsFilter, acordeon, onClickAcordeon }) => {
  console.log('options',options);
  //change status from number to text
  const defineStatus = (status) => {
    if(status == 1) {
      return 'open'
    } else if(status == 2) {
      return 'closed'
    } if(status == 3) {
      return 'escalated'
    } 
  }
  //define the color for each priority square
  const definePriority = (priority) => {
    if(priority == 0) {
      return {    'background-color': '#DE4343'}
    } else if(priority == 1) {
      return {    'background-color': '#FF9945'}
    } if(priority == 2) {
      return {    'background-color': '#EBF1F5'}
    } 
  }
  let input;

  return(
    <div className="sidebar">
      <div className='sidebarHeader'>
        {/* Import the icon asset */}
        <img src={process.env.PUBLIC_URL + '/assets/sidebarHeader.png'} />
      </div>

        {/* Define the filter component */}
      <TextFilterProps/>
      {
        Object.keys(options).map(title => {

          {/* Define each accordeon line */}
          let active = (acordeon.title == title || definePropsFilter.title == title)? 'active': '';
          return (
            <span>
              <span className='sidebarAcordeon' onClick={() => onClickAcordeon({title})}>{title} 
                <Icon className='accordeonIcon' icon={(active) ? ic_expand_less : ic_expand_more } />   
              </span>
              <span className={`sidebarAcordeonContent ${active}`}>
                {options[title].map(value => <span className={(definePropsFilter.title && (definePropsFilter.title == title && definePropsFilter.value == value)) ? 'btn flat' : 'btn' } 
                onClick={() => onPropClick({title, value})}> x {
                  (title == 'status')? defineStatus(value): (title == 'priority')? <span className='priority' style={definePriority(value)}></span> :value}</span>
                )}
                
              </span>
            </span>
            
          );
        })
      }
    </div>   
)}

export default Sidebar
