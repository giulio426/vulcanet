import React from 'react'
import PropTypes from 'prop-types'
import Line from './Line'
import TextFilterProps from '../containers/TextFilterProps'


///// ****** BUscar automaticamente quais as props e seus valores, montar os botoes e adicionar o funcionamento do filtro e do acordeon



const Sidebar = ({ options, onPropClick, definePropsFilter }) => {
  console.log('options',options);
  const defineStatus = (status) => {
    if(status == 1) {
      return 'open'
    } else if(status == 2) {
      return 'closed'
    } if(status == 3) {
      return 'escalated'
    } 
  }
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
        <img src={process.env.PUBLIC_URL + '/assets/sidebarHeader.png'} />
      </div>
      <TextFilterProps/>
      {
        Object.keys(options).map(title => {
          return (
            <span>
              <span className='sidebarAcordeon'>{title}</span>
              <span className='sidebarAcordeonContent active'>
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

Sidebar.propTypes = {

}

export default Sidebar
