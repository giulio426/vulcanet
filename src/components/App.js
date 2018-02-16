import React from 'react'
import Footer from './Footer'
import TextFilter from '../containers/TextFilter'
import VisibleList from '../containers/VisibleList'
import SidebarList from '../containers/SidebarList'

const App = () => (
  <div>
    
    <main  className="main" >
      <SidebarList/> 

      <div style={{width: '100%'}}>
        <div className='header'>
          <TextFilter/>
          
        </div>
        <div className="main-content">
          <VisibleList/>
         
        </div>
      </div>
    </main>
  </div>
)
//<AddTodo /> <VisibleTodoList />
/*
<span className='btn flat btnHeader btnActive'>List</span>
          <span className='btn flat btnHeader'>Group by trader</span>
          <span className='btn flat btnHeader'> chevron down</span>
          <span className='btn btnHeader disabled raised'>Take Action</span>
  <footer className="footer"><Footer /></footer>
*/
export default App
