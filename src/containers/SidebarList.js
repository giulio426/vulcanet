import { connect } from 'react-redux'
import { toggleListProps, toggleAccordedon } from '../actions'
import Sidebar from '../components/Sidebar'

const getOptions = (list, filterText) => {
  
  let options = {}
  Object.keys(list[0]).map(prop => {
    let pula = false;
    
    if (filterText.length) {
      pula = !(prop.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);
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
  definePropsFilter: state.definePropsFilter,
  acordeon: state.defineAcordeon
})

const mapDispatchToProps = {
  onPropClick: toggleListProps,
  onClickAcordeon: toggleAccordedon
}

const SidebarList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarList
