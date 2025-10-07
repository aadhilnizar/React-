import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  return (
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg shadow-red-400-xl rounded-lg">
      <h1>ToDoList</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "6px", width: "70%" }}
       class="w-full  bg-white placeholder:text-gray-400 text-gray-700 text-base border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-gray-400 shadow-sm focus:shadow" />
      <button
        type="button"
        onClick={() => {
          setItems([...items, { id: Date.now(), text: text, status: false }]);
          setText("");
        }}
        style={{ marginLeft: "8px", padding: "6px" }}
     class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
        Add
      </button>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
         
          <input
            id="default-checkbox"
            type="checkbox"
             checked={item.status}
            onChange={() =>
              setItems(
                items.map((i) =>
                  i.id === item.id ? { ...i, status: !i.status } : i
                )
              )
            }
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <p
            style={{
              marginLeft: "8px",
              color: item.status ? "gray" : "black",
              textDecoration: item.status ? "line-through" : "none",
            }}
         class="mb-3 text-gray-500 dark:text-gray-400 font-mono"  >
            {item.text}
          </p>
          <button
            style={{ marginLeft: "8px" }}
            onClick={() => setItems(items.filter((i) => i.id !== item.id))}
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
