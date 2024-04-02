import React from 'react'

const Search = () => {
  return (
    <div className= "search">
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
      
    </div>
  )
}

export default Search
