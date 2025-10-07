import React,{useState} from 'react'

function SelectInput() {

const [elements, setElements] = useState([
    { id: 1, type: "", data: "" },
  ]);

  const handleAddElement = () => {
    setElements((prev) => [
      ...prev,
      { id: Date.now(), type: "", data: "" },
    ]);
  };

  const deleteElement = (id) => {
    setElements(elements.filter((el) => el.id !== id));
  };


  const handleTypeChange = (id, value) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, type: value, data: "" } : el
      )
    );
  };

  const handleDataChange = (id, value) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, data: value } : el))
    );
  };

  const handleCheckboxChange = (id, value, checked) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          const currentData = Array.isArray(el.data) ? el.data : [];
          let updatedData;
          if (checked) {
            updatedData = [...currentData, value];
          } else {
            updatedData = currentData.filter((item) => item !== value);
          }
          return { ...el, data: updatedData };
        }
        return el;
      })
    );
  };

  const renderElement = (el) => {                          
    switch (el.type) {
      case "text":
        return (
          <input
            type="text"
            placeholder="Enter text"
            value={el.data}
            onChange={(e) => handleDataChange(el.id, e.target.value)}
            className="border p-2 rounded w-full"
          />
        );

      case "radio":
        return (
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name={`radio-${el.id}`}
                value="Option A"
                checked={el.data === "Option A"}
                onChange={(e) => handleDataChange(el.id, e.target.value)}
              />{" "}
              Option A
            </label>
            <label>
              <input
                type="radio"
                name={`radio-${el.id}`}
                value="Option B"
                checked={el.data === "Option B"}
                onChange={(e) => handleDataChange(el.id, e.target.value)}
              />{" "}
              Option B
            </label>
          </div>
        );

      case "checkbox":
        return (
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Check me"
                checked={Array.isArray(el.data) && el.data.includes("Check me")}
                onChange={(e) =>
                  handleCheckboxChange(el.id, "Check me", e.target.checked)
                }
              />
              Check me
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Or me"
                checked={Array.isArray(el.data) && el.data.includes("Or me")}
                onChange={(e) =>
                  handleCheckboxChange(el.id, "Or me", e.target.checked)
                }
              />
              Or me
            </label>
          </div>
        );

      case "textarea":
        return (
          <textarea
            placeholder="Type here..."
            value={el.data}
            onChange={(e) => handleDataChange(el.id, e.target.value)}
            className="border p-2 rounded w-full"
            rows={3}
          ></textarea>
        );

      default:
        return (
          <p className="text-gray-500">Select an element from the dropdown</p>
        );
    }
  };

  // 
  const jsonOutput = elements.reduce((acc, el) => {
    if (el.type) {
      acc[el.type + "_" + el.id] = {
        type: el.type,
        data: el.data,
      };
    }
    return acc;
  }, {});


  return (
    <div>
           <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Dynamic Form Builder</h2>

      {elements.map((el,index) => (
        <div
          key={el.id}
          className="border rounded-lg p-4 bg-gray-50 shadow-sm flex flex-col gap-3"
        >
           <div className="flex items-center justify-between">
              <label className="font-medium">
                Choose an Element {index + 1}:
              </label>
              <button
                onClick={() => deleteElement(el.id)}
                className="text-red-500 font-semibold hover:text-red-700"
              >
                ✕ Delete
              </button>
            </div>
          <div className="flex gap-3 items-center">
            <select
              value={el.type}
              onChange={(e) => handleTypeChange(el.id, e.target.value)}
              className="border p-2 rounded w-1/3"
            >
              <option value="">-- Select Element --</option>
              <option value="text">Text Input</option>
              <option value="radio">Radio Button</option>
              <option value="checkbox">Checkbox</option>
              <option value="textarea">Textarea</option>
            </select>
          </div>

          <div className="mt-2">{renderElement(el)}</div>
        </div>
      ))}

      <button
        onClick={handleAddElement}
        className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ➕ Add Element
      </button>

      {/* JSON Output */}
      <div className="mt-6 p-3 bg-black text-green-400 font-mono text-sm rounded overflow-auto">
        <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
      </div>
    </div>
    </div>
  )
}

export default SelectInput