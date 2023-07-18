import React, { useState, useEffect } from 'react';
import './App.css';

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are Mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>
        {flag ? <h2 className='ui-define'>Hello {inputData.name},you have Registered Successfully</h2> : ""}
      </pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter your Name'
            name='name'
            value={inputData.name}
            onChange={handleData}
          />
        </div>

        <div>
          <input
            type='text'
            placeholder='Enter your email'
            name='email'
            value={inputData.email}
            onChange={handleData}
          />
        </div>

        <div>
          <input
            type='text'
            placeholder='Enter your password'
            name='password'
            value={inputData.password}
            onChange={handleData}
          />
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
