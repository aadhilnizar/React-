import React from 'react'
import { useParams } from 'react-router-dom'

function UserExp() {
    
    const {id} =useParams();


  return (
    <div className='text-white'><h1>User Profile</h1>
    <div> 
        User ID : {id}
    </div>
    </div>
  )
}

export default UserExp