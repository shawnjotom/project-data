// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import {API } from 'aws-amplify';





function App() {
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const projectData = {
      title,
      skills: skills.split(',').map(skill => skill.trim()),
      type,
      description
    };

    try {
      await API.graphql({
        query: `
          mutation CreateProject($input: CreateProjectInput!) {
            createProject(input: $input) {
              id
            }
          }
        `,
        variables: { input: projectData }
      });
      alert('Project created successfully!');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('An error occurred while creating the project.');
    }
  }

  return (
    <div className="App">
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={e => setSkills(e.target.value)} required />
        <input type="text" placeholder="Type" value={type} onChange={e => setType(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
