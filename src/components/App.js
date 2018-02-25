import React from 'react'
import TextFilter from '../containers/TextFilter'
import VisibleList from '../containers/VisibleList'
import SidebarList from '../containers/SidebarList'

{/* Create the base Component */}
const App = () => (
  <div>
    <main  className="main" >
    {/* Insert sideBar Component */}
      <SidebarList/> 

      <div style={{width: '100%'}}>
        <div className='header'>
    {/* Insert filter Component for the accordeon*/}
          <TextFilter/>
          
        </div>
        <div className="main-content">
    {/* Insert list Component */}
          <VisibleList/>
         
        </div>
      </div>
    </main>
  </div>
)

export default App
