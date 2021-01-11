import React, { useState } from 'react';
import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpg';

const App = () => {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  const handleAddProject = () => {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  };

  return (
    <>
      <Header title='Projects' />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>

      <button type='button' onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
};

export default App;
