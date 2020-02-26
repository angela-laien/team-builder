import React, { useState } from 'react';
import './App.css';
import Members from './components/Members';
import Form from './components/Form';


function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Angela Pig',
      email: 'angelapig@gmail.com',
      role: 'Back-end Engineer'
  },
  {
      id: 2,
      name: 'Andy Monkey',
      email: 'andymonkey@gmail.com',
      role: 'Product Manager'
  },
  {
      id: 3,
      name: 'Tony Dog',
      email: 'tonydog@gmail.com',
      role: 'Front-end Engineer'
  },
  {
      id: 4,
      name: 'Sharon Sheep',
      email: 'sharonsheep@gmail.com',
      role: 'UX designer'
  }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
