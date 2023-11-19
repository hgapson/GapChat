import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import ChartList from './ChatList'
function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <ChartList />
    </div>
  )
}

export default Sidebar
