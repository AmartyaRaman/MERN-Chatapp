import React from 'react'

import SearchInput from '../../components/sidebar/SearchInput'
import Conversations from '../../components/sidebar/Conversations'
import Logout from '../../components/sidebar/Logout'



const Sidebar = () => {
  
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-4'></div>
      <Conversations />
      <Logout />
    </div>
  )
}

export default Sidebar
