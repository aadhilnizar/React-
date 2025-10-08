import React, { useState, useEffect } from "react";
import { Pencil, Trash } from "lucide-react";


function Table() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); 

  // Load from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Fill all fields!");
      return;
    }

    if (editingIndex !== null) {
      // update user
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = { ...form, id: users[editingIndex].id };
      setUsers(updatedUsers);
      setEditingIndex(null); // reset edit mode
    } else {
      // add new user
      const newUser = { ...form, id: Date.now() };
      setUsers([...users, newUser]);
    }

    setForm({ name: "", email: "", password: "" }); // reset form
  };

  const handleEdit = (index) => {
    setForm(users[index]); // load user data into form
    setEditingIndex(index); // set edit mode
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      if (editingIndex === index) {
        setForm({ name: "", email: "", password: "" });
        setEditingIndex(null); // reset edit mode if the edited user is deleted
      }
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.password.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {editingIndex !== null ? "Edit User" : "Register User"}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className={`w-full ${
            editingIndex !== null ? "bg-yellow-500" : "bg-blue-500"
          } text-white py-2 rounded hover:opacity-90`}
        >
          {editingIndex !== null ? "Update User" : "Add User"}
        </button>
      </form>

      <h3 className="text-lg font-semibold mt-6">Saved Users</h3>

    
      <input
        type="text"
        placeholder="Search by name, email, or password..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-300 font-mono w-full p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md">
        <thead>
          <tr className="bg-purple-200">
            <th className="px-2 py-2 border">Name</th>
            <th className="px-2 py-2 border">Email</th>
            <th className="px-2 py-2 border">Password</th>
            <th className="px-2 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td className="border px-2 py-1">{user.name}</td>
                <td className="border px-2 py-1">{user.email}</td>
                <td className="border px-2 py-1">{user.password}</td>
                <td className="border px-2 py-1">
                 <td className="border px-2 py-1">
  <div className="flex gap-2">
    <button
      onClick={() => handleEdit(index)}
      className="bg-yellow-500 text-white px-2 py-1 rounded"
    >
      Edit
    </button>
    <button
      onClick={() => handleDelete(index)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Delete
    </button>
  </div>
</td>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-2">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
  
export default Table;
