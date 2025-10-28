import React from 'react'
import { Link } from 'react-router-dom';

function Experience() {

    const users = [
    { id: 1, name: "Aadhil" },
    { id: 2, name: "Abel" },
    { id: 3, name: "John" },
  ];

  return (
    <div className='text-white '>
         <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>
          {/* Link to dynamic route */}
          <Link to={`/exp/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  )
}

export default Experience