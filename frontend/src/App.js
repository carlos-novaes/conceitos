import React, { useState, useEffect } from 'react';
import { api } from './services/api';

import Header from './components/Header';

import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Carlos',
    });
    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map(({ id, title, owner }) => (
          <li key={id}>
            {title} - {owner}
          </li>
        ))}
      </ul>

      <button type='button' onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
};

export default App;
