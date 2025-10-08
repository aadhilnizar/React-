import React, { useState, useRef } from 'react';

function ValidatedForm() {
  const emailRef = useRef(null); 
  const passwordRef = useRef(null);
  const [passwordError, setPasswordError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [accepted , setAccepted] = useState(false)


  const handlePasswordChange = () => { //for instant check of password
    const password = passwordRef.current.value;
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else {
      setPasswordError('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim(); //.trim() to dlt the empty spaces
    const password = passwordRef.current.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex pattern to check the email validation

    if (!email) {
      setSubmitError('Email is required.');
      return;
    } else if (!emailPattern.test(email)) {
      setSubmitError('Please enter a valid email.');
      return;
    }

    if (!password) {
      setSubmitError('Password is required.');
      return;
    }

    if (passwordError) {
      setSubmitError('Fix password errors before submitting.');
      return;
    }else if  (!accepted) {
      setSubmitError('You must accept terms to continue.');
      return;
    }
    

    setSubmitError('');
    console.log(`Form submitted with Email: ${email} and Password: ${password}`

    )
    
  };

  return (
    <div style={{ padding: '20px' }} className='subpixel-antialiased '>
      <p className='text-4xl font-mono '>Form Validation</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }} className='font-mono' >
          <label>Email:</label>
          <input type="text" ref={emailRef} placeholder="Enter email address" />
        </div>

        <div style={{ marginBottom: '10px'   }} className='font-mono' >
          <label>Password:</label>
          <input className='font-mono' 
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label >
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              style={{ marginRight: '5px' }}
            />
            I accept the terms and conditions
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitError && <p style={{ color: 'red', marginTop: '10px' }}>{submitError}</p>}
    </div>
  );
}

export default ValidatedForm;
