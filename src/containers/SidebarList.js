import { connect } from 'react-redux'
import { toggleListProps } from '../actions'
import Sidebar from '../components/Sidebar'

const getOptions = (list, filterText) => {
  
  let options = {}
  Object.keys(list[0]).map(prop => {
    let pula = false;
    
    if (filterText.length) {
      pula = !(prop.indexOf(filterText) >= 0);
    } 
    
    if (!pula) {
      options[prop] = list.map(l => l[prop]);
      options[prop] = [ ...new Set(options[prop]) ]
    }
    
  })
  
  return options;
}


const mapStateToProps = (state) => ({
  options: getOptions(state.transactions, state.defineTextFilterProps),
  definePropsFilter: state.definePropsFilter
})

const mapDispatchToProps = {
  onPropClick: toggleListProps
}

const SidebarList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarList
