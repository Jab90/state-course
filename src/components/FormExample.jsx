import React, { useState } from 'react';

export default function FormExample() { 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState(''); 
  const [email, setEmail] = useState(''); 

  // console.log(firstname, lastname, email);

  const handleSubmit = (e) => { 
    e.preventDefault(); //prevents the page from reloading
    console.log(firstname, lastname, email);

    //clear the form
    setFirstname('');
    setLastname('');
    setEmail('');
  };
  return (
    <form onSubmit={(e) =>handleSubmit(e) }>
      <p>
      <label>
        First Name: 
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={event => setFirstname(event.target.value)}
         />
      </label>
      </p>

      <p>
      <label>
        Last Name: 
        <input 
        type="text"
        name="firstname"
        value={lastname}
        onChange={e => setLastname(e.target.value)}
        />
      </label>
      </p>

      <p>
      <label>
        Email:
        <input
        type="text"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </label>
      </p>
      <p>
        <input type='Submit' value='Submit'/>
      </p>
    </form>
  )
}