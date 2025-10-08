import React, { use, useState } from "react";

function Crud() {
  // Initial dummy data
  const [users, setUsers] = useState([
    { id: 1, name: "Aadhil", email: "aadhil@example.com" },
    { id: 2, name: "Sara", email: "sara@example.com" },
  ]);
  
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add user
  const handleAdd = () => {
    if (!form.name || !form.email) return alert("Fill all fields!");
    setUsers([...users, { ...form, id: Date.now() }]);
    setForm({ id: null, name: "", email: "" });
    console.log(users);
    
    
  };

  // Edit user (fill form)
  const handleEdit = (user) => {
    setForm(user);
    setIsEditing(true);
  };

  // Update user
  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === form.id ? form : u)));
    setForm({ id: null, name: "", email: "" });
    setIsEditing(false);
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
        <article class="max-w-3xl mx-auto p-6 bg-white shadow-lg shadow-red-400-xl rounded-lg">
      <h1>React CRUD Example</h1>

      {/* Form */}
      <div>
    <input
  type="text"
  name="name"
  placeholder="Name"
  value={form.name}
  onChange={handleChange}
  className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
/>

<input
  type="email"
  name="email"
  placeholder="Email"
  value={form.email}
  onChange={handleChange}
  className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
/>


        {isEditing ? (
          <button onClick={handleUpdate} >Update</button>
        ) : (
          <button onClick={handleAdd}  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Add</button>
        )}
      </div>

      {/* Users List */}
     <ul className="mt-6 space-y-3">
  {users.map((user) => (
    <li
      key={user.id}
      className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow"
    >
      <span className="text-gray-800 font-medium">
        {user.name} <span className="text-gray-500 text-sm">({user.email})</span>
      </span>
      <div className="space-x-2">
        <button
          onClick={() => handleEdit(user)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
        
      </div>
      
    </li>
  ))}
</ul>
</article>
    </div>
  );
}

export default Crud;
