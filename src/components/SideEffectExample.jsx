import React, { useState, useEffect } from 'react';

export default function SideEffectExample() { 
  const [name,setName] = useState('')

  //this is a side effect
  //it runs after every render

  useEffect(() => {
    console.log('name changed');
  }, [name]);

  return ( 
    <div>
      <h2>Side Effect Example</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}