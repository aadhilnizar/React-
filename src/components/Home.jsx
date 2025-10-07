import React, { useEffect, useState, } from 'react'


function SimpleFormWithRadio() {

  //  const navigate=useNavigate()
  const [count, setCount] = useState(0)
  // useEffect(()=> {
  //   setTimeout(()=> {
  //     setCount((count) => count + 1)
  //   },1000)
  // })

  const increment = () => {
    // navigate(`/about/${count + 1}`)
    setCount(count + 1)
  }
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)


  const [change, changeText] = useState('Hello Moto');
  const handleClick = () => {
    changeText('You clicked the button')


  }
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmittedData({ name, gender });
    const newEntry = { name, gender }
    setSubmittedData((prevList) => [...prevList, newEntry])
    setName('')



  };
  const [color, setColor] = useState('Red');


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button className="btn btn-primary" onClick={increment}>Increment</button>
      <button className="btn btn-primary" onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>

      <button className="btn btn-danger" onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      <button className='btn btn-primary' onClick={handleClick}>Click Here</button><p>{change}</p>
      <div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <input class="form-control w-75"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Radio buttons */}
        <div class="form-check">
          <label>
            <input class="form-check-input"
              type="radio"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Male
          </label>
        </div>
        <div class="form-check">
          <label>
            <input class="form-check-input"
              type="radio"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <button className='btn btn-dark' type="submit">Submit</button>
      </form>

      {/* Show submitted data */}
      {/* {submittedData && ( */}
      {submittedData.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <p>You submitted:</p>
          {/* <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p> */}
          <ul>
            {submittedData.map((entry, index) => (
              <li key={index}>
                <strong>Name:</strong>{entry.name} <strong>Gender:</strong> {entry.gender}
              </li>
            ))}
          </ul>
        </div>
      )}

      <h1 style={{ color: color }}>My favourite color is {color}</h1>
      <button type='button' onClick={() => setColor("Blue")}>Blue</button>
      <button type='button' onClick={() => setColor("Yellow")}>Yellow</button>
      <button type='button' onClick={() => setColor("Red")}>Red</button>
      <button type='button' onClick={() => setColor("Purple")}>Purple</button>
      {/* <h1>I've Rendered {count} times</h1> */}
    </div>
  );
}

export default SimpleFormWithRadio ;


